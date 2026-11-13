const { ReplitConnectors } = require('/home/runner/workspace/node_modules/@replit/connectors-sdk');
const fs = require('node:fs');
const path = require('node:path');

const connectors = new ReplitConnectors();
const owner = 'Andrew1531';
const repo = 'ladmedia';
const dist = path.resolve(__dirname, '../dist/public');

async function github(endpoint, options = {}) {
  const response = await connectors.proxy('github', endpoint, options);
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function listFiles(directory, base = directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? listFiles(fullPath, base)
      : [path.relative(base, fullPath).split(path.sep).join('/')];
  });
}

async function main() {
  const files = listFiles(dist);
  const treeItems = [];
  const failed = [];

  console.log(`Uploading ${files.length} production files...`);
  for (const file of files) {
    const content = fs.readFileSync(path.join(dist, file));
    const blob = await github(`/repos/${owner}/${repo}/git/blobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: content.toString('base64'),
        encoding: 'base64',
      }),
    });

    if (!blob.sha) {
      failed.push(file);
      process.stdout.write('x');
      continue;
    }

    treeItems.push({
      path: file,
      mode: '100644',
      type: 'blob',
      sha: blob.sha,
    });
    process.stdout.write('.');
  }

  const currentRef = await github(`/repos/${owner}/${repo}/git/ref/heads/main`);
  const parentSha = currentRef.object?.sha;
  if (!parentSha) throw new Error('Could not read the current main branch.');

  if (failed.length) {
    console.log(`\nRecovering ${failed.length} unchanged files from the current deployment...`);
    const commit = await github(`/repos/${owner}/${repo}/git/commits/${parentSha}`);
    const previousTree = await github(
      `/repos/${owner}/${repo}/git/trees/${commit.tree.sha}?recursive=1`,
    );

    for (const file of failed) {
      const existing = previousTree.tree?.find((item) => item.path === file);
      if (!existing) throw new Error(`Upload failed and no previous copy exists: ${file}`);
      treeItems.push({
        path: existing.path,
        mode: existing.mode,
        type: 'blob',
        sha: existing.sha,
      });
    }
  }

  const tree = await github(`/repos/${owner}/${repo}/git/trees`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tree: treeItems }),
  });
  if (!tree.sha) throw new Error(`Could not create Git tree: ${JSON.stringify(tree)}`);

  const commit = await github(`/repos/${owner}/${repo}/git/commits`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: 'Fix crawlability and SEO indexing signals',
      tree: tree.sha,
      parents: [parentSha],
      author: {
        name: 'Andrew',
        email: 'andrew@ladmedia.co',
      },
    }),
  });
  if (!commit.sha) throw new Error(`Could not create commit: ${JSON.stringify(commit)}`);

  const update = await github(`/repos/${owner}/${repo}/git/refs/heads/main`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sha: commit.sha, force: true }),
  });
  if (!update.ref) throw new Error(`Could not update main: ${JSON.stringify(update)}`);

  console.log(`\nPublished commit ${commit.sha}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});