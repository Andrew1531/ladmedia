import { Router, type IRouter, type Request, type Response, type NextFunction } from "express";
import { db, leadsTable, insertLeadSchema } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

// Middleware: require Authorization: Bearer <SESSION_SECRET> for admin routes
function requireAdminKey(req: Request, res: Response, next: NextFunction): void {
  const adminKey = process.env["SESSION_SECRET"];
  if (!adminKey) {
    res.status(503).json({ error: "Admin access not configured" });
    return;
  }
  const authHeader = req.headers["authorization"] ?? "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  if (!token || token !== adminKey) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}

// POST /api/leads — save a new lead from the contact form (public)
router.post("/leads", async (req, res) => {
  const parsed = insertLeadSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body", details: parsed.error.issues });
    return;
  }

  try {
    const [lead] = await db.insert(leadsTable).values(parsed.data).returning();
    res.status(201).json({ success: true, lead });
  } catch (err) {
    res.status(500).json({ error: "Failed to save lead" });
  }
});

// GET /api/leads — list all leads (admin only, requires Bearer SESSION_SECRET)
router.get("/leads", requireAdminKey, async (_req, res) => {
  try {
    const leads = await db.select().from(leadsTable).orderBy(desc(leadsTable.createdAt));
    res.json({ leads });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

export default router;
