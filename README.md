# LAD Media website (source)

This branch (`source`) holds the source code for https://ladmedia.co.

- The site lives in `artifacts/ladmedia` (React + Vite, with static pages generated at build time).
- The `main` branch holds only the built site, which GitHub Pages serves.
- Pushing to `source` runs `.github/workflows/deploy.yml`: it builds the site, runs the SEO
  validator and tests, and publishes the result to `main` only if everything passes.

Do not edit files on `main` by hand; they are overwritten by the next deploy.

## Build locally

    pnpm install --filter "@workspace/ladmedia..."
    PORT=3000 BASE_PATH=/ pnpm --filter @workspace/ladmedia run build
