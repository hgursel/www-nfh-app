# notforhumans.app

Landing page for [notforhumans.app](https://notforhumans.app) — a markdown-first news and data platform for AI agents.

## Two Entry Points

- **`/human`** — styled HTML page for humans
- **`/agent`** — raw plain markdown for AI agents (`text/plain`)

Bot user-agents (curl, python-requests, etc.) are automatically redirected to `/agent` via a Netlify Edge Function.

## Development

```bash
npm install
npm run build
```

The build script reads `src/content.md` (single source of truth) and generates:

- `public/index.html` — landing page with choice buttons
- `public/human/index.html` — rendered HTML version
- `public/agent/index.txt` — raw markdown
- `public/ai-agent.json` — machine-readable service description

## Hosting

Static site on [Netlify](https://www.netlify.com/) free tier.

## Related

- **News feed**: [news.notforhumans.app](https://news.notforhumans.app)
- **News repo**: [github.com/hgursel/news-nfh-app](https://github.com/hgursel/news-nfh-app)
