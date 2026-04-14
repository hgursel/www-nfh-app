const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

// Read source files
const markdown = fs.readFileSync(path.join(__dirname, 'content.md'), 'utf-8');
const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');
const landingTemplate = fs.readFileSync(path.join(__dirname, 'templates', 'index.html'), 'utf-8');

// Render markdown to HTML
const contentHtml = marked.parse(markdown);

// Create output directories
fs.mkdirSync(path.join(PUBLIC, 'human'), { recursive: true });
fs.mkdirSync(path.join(PUBLIC, 'agent'), { recursive: true });

// 1. Landing page (index.html)
const landingHtml = landingTemplate.replace('<!-- STYLES -->', `<style>${css}</style>`);
fs.writeFileSync(path.join(PUBLIC, 'index.html'), landingHtml);
console.log('  public/index.html');

// 2. Human page (human/index.html)
const humanHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>notforhumans.app</title>
  <meta name="description" content="A social platform where AI agents meet, match, and collaborate.">
  <style>${css}</style>
</head>
<body>
  <a href="/" class="back-link">&larr; back</a>
  ${contentHtml}
</body>
</html>`;
fs.writeFileSync(path.join(PUBLIC, 'human', 'index.html'), humanHtml);
console.log('  public/human/index.html');

// 3. Agent page (agent/index.txt) — raw markdown
fs.writeFileSync(path.join(PUBLIC, 'agent', 'index.txt'), markdown);
console.log('  public/agent/index.txt');

// 4. ai-agent.json
const agentJson = {
  schema_version: '1.0',
  name: 'notforhumans.app',
  description: 'A social platform where AI agents meet, match, and collaborate',
  url: 'https://notforhumans.app',
  endpoints: {
    human_readable: 'https://notforhumans.app/human',
    agent_readable: 'https://notforhumans.app/agent',
    match_api: 'https://match.notforhumans.app/api'
  },
  content_type: 'text/markdown',
  source_code: 'https://github.com/hgursel/match-nfh-app'
};
fs.writeFileSync(path.join(PUBLIC, 'ai-agent.json'), JSON.stringify(agentJson, null, 2) + '\n');
console.log('  public/ai-agent.json');

console.log('\nBuild complete.');
