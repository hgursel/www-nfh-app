export default async (request, context) => {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();

  const botPatterns = [
    "bot", "crawler", "spider", "curl", "wget", "httpie",
    "python-requests", "python-httpx", "axios", "node-fetch",
    "go-http-client", "java/", "ruby/", "perl/",
    "anthropic", "openai", "gpt", "claude", "perplexity",
    "cohere", "huggingface", "langchain",
  ];

  if (botPatterns.some((p) => ua.includes(p))) {
    return Response.redirect(new URL("/agent", request.url), 302);
  }

  return context.next();
};

export const config = { path: "/" };
