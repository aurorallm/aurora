<p align="center">
  <img src="https://raw.githubusercontent.com/aurorallm/aurora/main/docs/assets/aurora-logo-animated.svg" width="96" height="96" alt="Aurora Logo">
</p>

<h1 align="center">Aurora Gateway OSS — Open-Source AI Gateway | OpenAI &amp; Anthropic Compatible API</h1>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/aurorallm/aurora" alt="License" height="20"></a>
  <a href="https://www.npmjs.com/package/iaurora"><img src="https://img.shields.io/npm/v/iaurora" alt="npm" height="20"></a>
  <a href="https://goreportcard.com/report/github.com/aurorallm/aurora"><img src="https://goreportcard.com/badge/github.com/aurorallm/aurora" alt="Go Report Card" height="20"></a>
  <a href="https://codecov.io/gh/aurorallm/aurora"><img src="https://codecov.io/gh/aurorallm/aurora/branch/main/graph/badge.svg" alt="codecov" height="20"></a>
  <a href="https://github.com/aurorallm/aurora"><img src="https://img.shields.io/github/stars/aurorallm/aurora" alt="GitHub Stars" height="20"></a>
  <a href="https://discord.gg/YJPrfR9uh"><img src="https://dcbadge.limes.pink/api/server/https://discord.gg/YJPrfR9uh?style=flat" alt="Discord" height="20"></a>
  <img src="https://img.shields.io/docker/pulls/aurorahq/aurora" alt="Docker Pulls" height="20">
  <a href="https://artifacthub.io/packages/search?repo=aurora-gateway"><img src="https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/aurora-gateway" alt="Artifact Hub" height="20"></a>
</p>

<p align="center"><b>Open-source LLM gateway (OSS edition). One API for every AI provider.</b></p>

<p align="center">Self-hosted. No vendor lock-in. 30+ LLM providers supported.</p>

<a href="https://raw.githubusercontent.com/aurorallm/aurora/main/docs/assets/dashboard-overview.png">
  <img src="https://raw.githubusercontent.com/aurorallm/aurora/main/docs/assets/dashboard-overview.png" alt="Aurora open-source AI gateway admin dashboard showing provider stats and usage metrics" width="100%">
</a>

## Quick Start

Start routing AI traffic in 60 seconds.

<img src="https://raw.githubusercontent.com/aurorallm/aurora/main/docs/assets/install.gif" alt="Install demo" style="max-width:100%;border-radius:12px;margin:12px 0;">

**1. Install Aurora Gateway**

```bash
npm install -g iaurora
# or
docker run --rm -p 8080:8080 \
  -e AURORA_MASTER_KEY="your-key" \
  -e GROQ_API_KEY="gsk_..." \
  # optional: add more providers or configure storage
  # -e OPENAI_API_KEY="sk-..." \
  # -e ANTHROPIC_API_KEY="sk-ant-..." \
  # -e GEMINI_API_KEY="..." \
  # -e STORAGE_TYPE=sqlite          # sqlite (default), postgresql, mongodb
  # -e PORT=8080                    # change listening port
  # -e LOG_LEVEL=info               # debug, info, warn, error
  # -e LOG_FORMAT=text              # text or json
  aurorahq/aurora
```

**2. Init and start**

```bash
mkdir my-gateway && cd my-gateway
aurora init      # scaffolds config.yaml, .env, data/
aurora           # starts gateway on port 8080
```

**3. Make your first request**

```bash
curl http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $(grep AURORA_MASTER_KEY .env | cut -d= -f2)" \
  -d '{"model":"groq/llama-3.3-70b-versatile","messages":[{"role":"user","content":"Hello!"}]}'
```

The dashboard is at `http://localhost:8080/admin/dashboard`.

**Setup guides:** [npm](https://www.npmjs.com/package/iaurora) · [Docker](https://hub.docker.com/r/aurorahq/aurora) · [Helm/Kubernetes](https://github.com/aurorallm/aurora/tree/main/helm) · [Source](https://github.com/aurorallm/aurora)

---

## Kubernetes (Helm)

Deploy on any Kubernetes cluster with the [Helm chart](https://github.com/aurorallm/aurora/tree/main/helm).

```bash
# Quick dev — Groq, no Redis, no auth
helm install aurora ./helm \
  --namespace aurora --create-namespace \
  --set image.tag=1.0.25 \
  --set providers.groq.apiKey="gsk_your_key_here" \
  --set providers.groq.enabled=true \
  --set redis.enabled=false \
  --set auth.masterKey=""
```

```bash
# Production — multiple providers, auth, Redis
helm upgrade --install aurora ./helm \
  --namespace aurora --create-namespace \
  --set image.tag=1.0.25 \
  --set auth.masterKey="your-secure-key" \
  --set providers.openai.apiKey="sk-..." \
  --set providers.openai.enabled=true \
  --set providers.anthropic.apiKey="sk-ant-..." \
  --set providers.anthropic.enabled=true \
  --set redis.enabled=true
```

**Full Helm documentation:** [helm/README.md](https://github.com/aurorallm/aurora/tree/main/helm/README.md)

---

## Enterprise Deployments

Aurora supports enterprise-grade deployments for teams running production AI systems at scale.
In addition to private networking, custom security controls, and governance, **Aurora Enterprise** unlocks advanced capabilities including SSO, RBAC, tenant isolation, budget enforcement, compliance workflows, and production support.

The Enterprise edition is a separate distribution with a signed license.

<a href="https://raw.githubusercontent.com/aurorallm/aurora/main/docs/assets/comparison.png">
  <img src="https://raw.githubusercontent.com/aurorallm/aurora/main/docs/assets/comparison.png" alt="OSS vs Enterprise comparison" width="100%" style="border-radius:12px;margin:16px 0;">
</a>

<div align="center">
  <a href="mailto:team.auroragate@gmail.com?subject=Aurora%20Enterprise%20Inquiry" style="display:block;margin-top:5px;">
    <img src="https://img.shields.io/badge/Email%20Us-Enterprise-5865F2?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Aurora Enterprise" width="200"/>
  </a>
</div>

---


## Repository Structure

```text
aurora/
├── apps/                  # Application entrypoints
│   └── aurora/            # Main gateway binary
├── internal/              # Internal packages
│   ├── api/               # HTTP handlers, middleware
│   ├── config/            # Configuration loading and validation
│   ├── providers/         # Provider implementations (OpenAI, Anthropic, etc.)
│   ├── storage/           # SQLite, PostgreSQL, MongoDB backends
│   ├── guardrails/        # Content safety filters
│   ├── cache/             # Exact and semantic caching
│   └── analytics/         # Usage tracking and metrics
├── dashboard-ui/          # React admin dashboard frontend
├── configs/               # Configuration profiles and examples
├── docs/                  # Documentation and assets
├── scripts/               # Build and release scripts
├── test/                  # Test suites
└── helm/                  # Kubernetes Helm charts
```

---

## Providers

Providers are **auto-discovered from environment variables**. Set any of these keys in your `.env` and restart — the provider and its models appear automatically.

| Provider | Env var | Default models |
|----------|---------|----------------|
| OpenAI | `OPENAI_API_KEY` | `gpt-4o`, `gpt-4o-mini` |
| Anthropic | `ANTHROPIC_API_KEY` | `claude-sonnet-4`, `claude-opus-4` |
| Google Gemini | `GEMINI_API_KEY` | `gemini-2.5-pro`, `gemini-2.5-flash` |
| Groq | `GROQ_API_KEY` | `llama-3.3-70b`, `qwen3-32b`, `whisper` |
| DeepSeek | `DEEPSEEK_API_KEY` | `deepseek-chat`, `deepseek-reasoner` |
| OpenRouter | `OPENROUTER_API_KEY` | 300+ models |
| xAI | `XAI_API_KEY` | `grok-3`, `grok-3-mini` |
| Z.ai | `ZAI_API_KEY` | `glm-4.5` |
| MiniMax | `MINIMAX_API_KEY` | `minimax-m1` |
| Azure OpenAI | `AZURE_API_KEY` + `AZURE_BASE_URL` | Your deployments |
| Oracle | `ORACLE_API_KEY` + `ORACLE_BASE_URL` | `cohere.command-r-plus` |
| Ollama | `OLLAMA_BASE_URL` | Any local model |
| vLLM | `VLLM_BASE_URL` | Any served model |

**Custom base URL?** Set `OPENAI_BASE_URL`, `GROQ_BASE_URL`, etc. in `.env`.

**Multiple instances of the same provider?** Use suffix notation: `OPENAI_EAST_API_KEY`, `OPENAI_WEST_API_KEY`, etc.

---

## Configuration

The gateway loads settings in this order (later wins):

```
code defaults → config.yaml → .env / env vars
```

Generated by `aurora init`, every section is documented inline:

| Section | What it controls |
|---------|-----------------|
| `server` | Port, base path, master key, passthrough, Anthropic ingress |
| `admin` | Dashboard API and UI |
| `models` | Discovery, overrides, allowlisting |
| `storage` | SQLite (default), PostgreSQL, or MongoDB |
| `logging` | Audit logging of requests/responses |
| `usage` | Token tracking, pricing, retention |
| `metrics` | Prometheus endpoint |
| `guardrails` | Content safety filters |
| `cache` | Model cache, response cache (exact + semantic) |
| `combos` | Multi-model combo definitions |
| `token_saver` | Output compression |
| `fallback` | Provider failover rules |
| `resilience` | Retry + circuit breaker |

---

## Documentation

- [CLI Reference](https://github.com/aurorallm/aurora)
- [Provider Configuration](https://github.com/aurorallm/aurora)
- [Admin Dashboard](https://github.com/aurorallm/aurora)
- [Docker Compose & Helm](https://github.com/aurorallm/aurora)

## Need Help?

[Join our Discord](https://discord.com/invite/YJPrfR9uh) for community support, setup help, and discussions.

---

## Contributing

We welcome contributions of all kinds! Check out the repository to get started:

- Setting up the development environment
- Code conventions and best practices
- How to submit pull requests
- Building and testing locally

---

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

Built with ❤️ by the Aurora team.
