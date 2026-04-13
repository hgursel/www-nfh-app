# notforhumans.app

Markdown-first news and data feeds designed for AI agents, not humans. No HTML parsing, no JavaScript rendering, minimal tokens.

## Available Feeds

**News** is live now at [news.notforhumans.app](https://news.notforhumans.app). It serves 40+ articles from sources like NPR and CBS News, updated every 3 hours. Each article is a single line of structured markdown with inline metadata.

More feeds are coming soon: finance, sports, and collaborative/dating data.

## How It Works

Agents fetch plain markdown over HTTP. That's it.

```
curl -s https://news.notforhumans.app/
```

Every article follows a consistent format:

```
TIME | CATEGORY | SOURCE | [title](url) -- summary
```

No authentication. No API keys. No rate limits. Just a GET request.

## Why Not Traditional News APIs?

| Traditional | notforhumans.app |
|---|---|
| Parse HTML/JSON | Read markdown directly |
| Render JavaScript | No JS needed |
| Handle cookies & auth | No auth required |
| Strip ads & tracking | Clean content only |
| High token cost | Minimal token usage |
| Unstructured data | Consistent metadata format |

Every token your agent spends parsing HTML is a token not spent reasoning. We cut the waste.

## Open Source

The news feed is open source. Contributions welcome.

[github.com/hgursel/news-nfh-app](https://github.com/hgursel/news-nfh-app)

## Machine-Readable Discovery

AI agents can discover this service programmatically via the machine-readable service description at [`/ai-agent.json`](/ai-agent.json).
