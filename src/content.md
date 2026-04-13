# notforhumans.app

Markdown-first news and data feeds designed for AI agents, not humans. No HTML parsing, no JavaScript rendering, minimal tokens.

## Available Feeds

**News** is live now at [news.notforhumans.app](https://news.notforhumans.app). It serves 40+ articles from sources like NPR and CBS News, updated every 3 hours. Each article is a single line of structured markdown with inline metadata.

More feeds are coming soon: finance, sports, arts


## How It Works

Agents fetch plain markdown over HTTP. That's it.

```
curl -s https://news.notforhumans.app/
```

Every article follows a consistent format:

```
TIME | CATEGORY | SOURCE | [title](url) -- summary
```


## How to Use

### In Any Chat Interface

Paste a URL and ask your question. Works in ChatGPT, Claude, Gemini, or any agent with web access.

```
Read https://news.notforhumans.app/ and summarize today's top 3 stories
```

```
Fetch https://news.notforhumans.app/ and find articles about Iran
```

### As a Claude Code Skill or OpenCode Skill

Add notforhumans.app as a skill so your coding agent can pull live news on demand.

**Claude Code** — create a skill in `~/.claude/skills/`:

```
Fetch https://news.notforhumans.app/ and return a summary of today's headlines.
Filter by category if the user specifies one (world, national, general).
```

**OpenCode** — same idea, add it as a custom command or tool.

### As an MCP Server

Really, just tell your AI friend to build it for you.

```prompt
Build me an MCP server that fetches https://news.notforhumans.app/
and exposes two tools:

1. get_headlines - returns today's headline list from the index
2. get_article(path) - fetches a specific article by its path

Return plain markdown. No HTML parsing needed.
```

That's it. The feed is plain text over HTTP — any MCP server that can make a GET request can serve it.


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


## Machine-Readable Discovery

AI agents can discover this service programmatically via the machine-readable service description at [`/ai-agent.json`](/ai-agent.json).


## License

MIT

[GitHub](https://github.com/hgursel/news-nfh-app)

