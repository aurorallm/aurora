<p align="center">
  <img href="" src="https://raw.githubusercontent.com/aurorallm/aurora/main/docs-assets/assets/aurora-logo-animated.svg" width="96" height="96" alt="Aurora Logo">
</p>

<h1 align="center">Aurora — Open-Source AI Gateway | OpenAI &amp; Anthropic Compatible API</h1>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/aurorallm/aurora" alt="License" height="20"></a>
  <a href="https://www.npmjs.com/package/iaurora"><img src="https://img.shields.io/npm/v/iaurora" alt="npm" height="20"></a>
  <!-- <a href="https://codecov.io/gh/aurorallm/aurora"><img src="https://codecov.io/gh/aurorallm/aurora/branch/main/graph/badge.svg" alt="codecov" height="20"></a> -->
  <a href="https://github.com/aurorallm/aurora"><img src="https://img.shields.io/github/stars/aurorallm/aurora" alt="GitHub Stars" height="20"></a>
  <a href="https://discord.gg/AfaFBSU2km"><img src="https://dcbadge.limes.pink/api/server/https://discord.gg/AfaFBSU2km?style=flat" alt="Discord" height="20"></a>
  <img src="https://img.shields.io/docker/pulls/aurorahq/aurora" alt="Docker Pulls" height="20">
  <a href="https://artifacthub.io/packages/search?repo=aurora-gateway"><img src="https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/aurora-gateway" alt="Artifact Hub" height="20"></a>

</p>
<p align="center"><b>Open-source LLM gateway (OSS edition). One API for every AI provider.</b></p>

<p align="center">Self-hosted. No vendor lock-in. 14 provider types, 30+ LLM providers supported.</p>

<a href="https://raw.githubusercontent.com/aurorallm/aurora/main/docs-assets/assets/dashboard-overview.png">
  <img src="https://raw.githubusercontent.com/aurorallm/aurora/main/docs-assets/assets/dashboard-overview.png" alt="Aurora open-source AI gateway admin dashboard showing provider stats and usage metrics" width="100%">
</a>

---

## Quick Start

Start routing AI traffic in 60 seconds.

### Option A — CLI (npm)

```bash
npm install -g iaurora
mkdir my-gateway && cd my-gateway
aurora init        # creates config.yaml, .env, data/
```

Set your provider keys in `.env`:

```env
# ── REQUIRED ──────────────────────────────────────────────
AURORA_MASTER_KEY="your-secure-key"

# ── PROVIDER API KEYS (at least one) ─────────────────────
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
GEMINI_API_KEY="..."
GROQ_API_KEY="gsk_..."
DEEPSEEK_API_KEY="..."
OPENROUTER_API_KEY="..."
XAI_API_KEY="..."
ZAI_API_KEY="..."
MINIMAX_API_KEY="..."
AZURE_API_KEY="..."
ORACLE_API_KEY="..."
OLLAMA_API_KEY="..."
VLLM_API_KEY="..."
JINA_API_KEY="..."

# ── OPTIONAL FEATURE TOGGLES (set true to enable) ────────
LOGGING_ENABLED=true                  # Audit logging to storage
METRICS_ENABLED=true                  # Prometheus /metrics endpoint
GUARDRAILS_ENABLED=true               # Content safety filters
TOKEN_SAVER_ENABLED=true              # Output compression to cut token use

# ── PRODUCTION STORAGE ───────────────────────────────────
# STORAGE_TYPE=postgresql
# POSTGRES_URL=postgres://user:pass@localhost:5432/aurora

# ── REDIS CACHE (model cache + response cache) ──────────
# REDIS_URL=redis://localhost:6379
# RESPONSE_CACHE_SIMPLE_ENABLED=true
```

```bash
aurora
```

### Option B — inline env vars (no `.env` needed)

```bash
# Linux / macOS
AURORA_MASTER_KEY=your-secure-key \
  OPENAI_API_KEY=sk-... \
  ANTHROPIC_API_KEY=sk-ant-... \
  GEMINI_API_KEY=... \
  GROQ_API_KEY=gsk_... \
  DEEPSEEK_API_KEY=... \
  OPENROUTER_API_KEY=... \
  XAI_API_KEY=... \
  ZAI_API_KEY=... \
  MINIMAX_API_KEY=... \
  AZURE_API_KEY=... \
  ORACLE_API_KEY=... \
  OLLAMA_API_KEY=... \
  VLLM_API_KEY=... \
  JINA_API_KEY=... \
  LOGGING_ENABLED=true \
  METRICS_ENABLED=true \
  GUARDRAILS_ENABLED=true \
  TOKEN_SAVER_ENABLED=true \
  aurora

# Windows PowerShell
$env:AURORA_MASTER_KEY="your-secure-key"; `
$env:OPENAI_API_KEY="sk-..."; `
$env:ANTHROPIC_API_KEY="sk-ant-..."; `
$env:GEMINI_API_KEY="..."; `
$env:GROQ_API_KEY="gsk_..."; `
$env:DEEPSEEK_API_KEY="..."; `
$env:OPENROUTER_API_KEY="..."; `
$env:XAI_API_KEY="..."; `
$env:ZAI_API_KEY="..."; `
$env:MINIMAX_API_KEY="..."; `
$env:AZURE_API_KEY="..."; `
$env:ORACLE_API_KEY="..."; `
$env:OLLAMA_API_KEY="..."; `
$env:VLLM_API_KEY="..."; `
$env:JINA_API_KEY="..."; `
$env:LOGGING_ENABLED="true"; `
$env:METRICS_ENABLED="true"; `
$env:GUARDRAILS_ENABLED="true"; `
$env:TOKEN_SAVER_ENABLED="true"; `
aurora

# Windows CMD
set AURORA_MASTER_KEY=your-secure-key ^
  && set OPENAI_API_KEY=sk-... ^
  && set ANTHROPIC_API_KEY=sk-ant-... ^
  && set GEMINI_API_KEY=... ^
  && set GROQ_API_KEY=gsk_... ^
  && set DEEPSEEK_API_KEY=... ^
  && set OPENROUTER_API_KEY=... ^
  && set XAI_API_KEY=... ^
  && set ZAI_API_KEY=... ^
  && set MINIMAX_API_KEY=... ^
  && set AZURE_API_KEY=... ^
  && set ORACLE_API_KEY=... ^
  && set OLLAMA_API_KEY=... ^
  && set VLLM_API_KEY=... ^
  && set JINA_API_KEY=... ^
  && set LOGGING_ENABLED=true ^
  && set METRICS_ENABLED=true ^
  && set GUARDRAILS_ENABLED=true ^
  && set TOKEN_SAVER_ENABLED=true ^
  && aurora
```

### Option C — Docker

```bash
docker run -d --name aurora -p 8080:8080 \
  -e AURORA_MASTER_KEY="your-secure-key" \
  -e OPENAI_API_KEY="sk-..." \
  -e ANTHROPIC_API_KEY="sk-ant-..." \
  -e GEMINI_API_KEY="..." \
  -e GROQ_API_KEY="gsk_..." \
  -e DEEPSEEK_API_KEY="..." \
  -e OPENROUTER_API_KEY="..." \
  -e XAI_API_KEY="..." \
  -e ZAI_API_KEY="..." \
  -e MINIMAX_API_KEY="..." \
  -e AZURE_API_KEY="..." \
  -e ORACLE_API_KEY="..." \
  -e OLLAMA_API_KEY="..." \
  -e VLLM_API_KEY="..." \
  -e JINA_API_KEY="..." \
  -e LOGGING_ENABLED=true \
  -e METRICS_ENABLED=true \
  -e GUARDRAILS_ENABLED=true \
  -e TOKEN_SAVER_ENABLED=true \
  aurorahq/aurora
```

### Option D — Kubernetes (Helm)

```bash
# Quick dev — Groq, no Redis, no auth
helm install aurora ./helm \
  --namespace aurora --create-namespace \
  --set image.repository=aurorahq/aurora \
  --set image.tag=latest \
  --set providers.groq.apiKey="gsk_your_key_here" \
  --set providers.groq.enabled=true \
  --set redis.enabled=false \
  --set auth.masterKey=""
```

```bash
# Production — multiple providers, auth, Redis
helm upgrade --install aurora ./helm \
  --namespace aurora --create-namespace \
  --set image.repository=aurorahq/aurora \
  --set image.tag=latest \
  --set auth.masterKey="your-secure-key" \
  --set providers.openai.apiKey="sk-..." \
  --set providers.openai.enabled=true \
  --set providers.anthropic.apiKey="sk-ant-..." \
  --set providers.anthropic.enabled=true \
  --set providers.gemini.apiKey="..." \
  --set providers.gemini.enabled=true \
  --set providers.groq.apiKey="gsk_..." \
  --set providers.groq.enabled=true \
  --set providers.deepseek.apiKey="..." \
  --set providers.deepseek.enabled=true \
  --set providers.openrouter.apiKey="..." \
  --set providers.openrouter.enabled=true \
  --set providers.xai.apiKey="..." \
  --set providers.xai.enabled=true \
  --set providers.zai.apiKey="..." \
  --set providers.zai.enabled=true \
  --set providers.minimax.apiKey="..." \
  --set providers.minimax.enabled=true \
  --set providers.azure.apiKey="..." \
  --set providers.azure.enabled=true \
  --set providers.oracle.apiKey="..." \
  --set providers.oracle.enabled=true \
  --set providers.ollama.apiKey="..." \
  --set providers.ollama.enabled=true \
  --set providers.vllm.apiKey="..." \
  --set providers.vllm.enabled=true \
  --set logging.enabled=true \
  --set metrics.enabled=true \
  --set guardrails.enabled=true \
  --set tokenSaver.enabled=true \
  --set redis.enabled=true
```

**Full Helm docs:** [helm/README.md](./helm/README.md)

### Test your gateway

```bash
curl http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-master-key" \
  -d '{"model":"groq/llama-4-scout-17b-16e-instruct","messages":[{"role":"user","content":"Hello!"}]}'
```

Anthropic format with streaming enabled:

```bash
curl http://localhost:8080/v1/messages \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-master-key" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "anthropic/claude-sonnet-5-20260630",
    "max_tokens": 1024,
    "stream": true,
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

Dashboard: `http://localhost:8080/admin/dashboard`

**Setup guides:** [Website](https://aurorallm.online/) · [npm](https://www.npmjs.com/package/iaurora) · [Docker](https://hub.docker.com/r/aurorahq/aurora) · [Helm/Kubernetes](https://github.com/aurorallm/aurora/tree/main/helm) · [Source](https://github.com/aurorallm/aurora)

---

## Enterprise Deployments

Aurora supports enterprise-grade deployments for teams running production AI systems at scale.
In addition to private networking, custom security controls, and governance, **Aurora Enterprise** unlocks advanced capabilities including SSO, RBAC, tenant isolation, budget enforcement, compliance workflows, and production support.

The Enterprise edition is a separate distribution with a signed license.

<a href="https://raw.githubusercontent.com/aurorallm/aurora/main/docs-assets/assets/comparison.png">
  <img src="https://raw.githubusercontent.com/aurorallm/aurora/main/docs-assets/assets/comparison.png" alt="OSS vs Enterprise comparison" width="100%" style="border-radius:12px;margin:16px 0;">
</a>

<div align="center">
  <a href="mailto:team.auroragate@gmail.com?subject=Aurora%20Enterprise%20Inquiry" style="display:block;margin-top:5px;">
    <img src="https://img.shields.io/badge/Email%20Us-Enterprise-5865F2?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Aurora Enterprise" width="200"/>
  </a>
</div>

---

## Providers

Providers are **auto-discovered from environment variables**. Set any provider's `_API_KEY` and restart — the provider and its default models appear automatically.

> **Security note for public docs:** The env var names listed below are documentation references. Actual secrets go into your **`.env` file** (in `.gitignore`) or your **deployment secrets manager** — never commit them.

| Provider | Env var | Default base URL | Requires base URL | API key required | Default models |
|----------|---------|-----------------|-------------------|-----------------|----------------|
| OpenAI | `OPENAI_API_KEY` | `https://api.openai.com/v1` | No | Yes | `gpt-5.6-sol`, `gpt-5.6-luna` |
| Anthropic | `ANTHROPIC_API_KEY` | `https://api.anthropic.com/v1` | No | Yes | `claude-sonnet-5`, `claude-fable-5` |
| Google Gemini | `GEMINI_API_KEY` | `https://generativelanguage.googleapis.com/v1beta/openai` | No | Yes | `gemini-3.1-pro`, `gemini-3.5-flash` |
| Groq | `GROQ_API_KEY` | `https://api.groq.com/openai/v1` | No | Yes | `llama-4-scout-17b`, `llama-4-maverick-17b`, `qwen3-32b` |
| DeepSeek | `DEEPSEEK_API_KEY` | `https://api.deepseek.com` | No | Yes | `deepseek-v4-pro`, `deepseek-v4-flash` |
| OpenRouter | `OPENROUTER_API_KEY` | `https://openrouter.ai/api/v1` | No | Yes | 300+ models |
| xAI (Grok) | `XAI_API_KEY` | `https://api.x.ai/v1` | No | Yes | `grok-4.5`, `grok-4.3` |
| Z.ai | `ZAI_API_KEY` | `https://api.z.ai/api/paas/v4` | No | Yes | `glm-5.2` |
| MiniMax | `MINIMAX_API_KEY` | `https://api.minimax.io/v1` | No | Yes | `minimax-m3` |
| Azure OpenAI | `AZURE_API_KEY` | — | **Yes** | Yes | Your deployments |
| Oracle | `ORACLE_API_KEY` | — | **Yes** | Yes | `cohere.command-r-plus` |
| Ollama | `OLLAMA_API_KEY` | `http://localhost:11434/v1` | No | **No** (optional) | Any local model |
| vLLM | `VLLM_API_KEY` | `http://localhost:8000/v1` | No | **No** (optional) | Any served model |
| Jina (reranker) | `JINA_API_KEY` | — | **Yes** | Yes | `jina-embeddings-v3` |

### Per-provider extras

Every provider supports `*_MODELS` to override auto-discovered models:

```env
OPENAI_MODELS=gpt-5.6-sol,gpt-5.6-terra,gpt-5.6-luna
```

OpenRouter extras:

```env
OPENROUTER_SITE_URL=https://github.com/aurorallm/aurora
OPENROUTER_APP_NAME=Aurora Gateway
```

Azure requires API version:

```env
AZURE_API_VERSION=2024-10-21
```

### Custom base URL

Override any provider's endpoint:

```env
OPENAI_BASE_URL=https://my-corp-openai-proxy.example.com/v1
```

### Multiple instances of the same provider

Use suffix notation (underscores become hyphens in the provider name):

```env
OPENAI_EAST_API_KEY=sk-...     # → provider: openai-east
OPENAI_WEST_API_KEY=sk-...     # → provider: openai-west
JINA_API_KEY1=...              # → provider: jina-1
```

---

## Configuration

The gateway loads settings in this priority order (later wins):

```
code defaults → config.yaml → .env / environment variables
```

Generated by `aurora init`, every section of `config.yaml` is documented inline:

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

### Quick config profiles

Aurora ships pre-built config profiles in `configs/editions/`:

| Profile | File | Use case |
|---------|------|----------|
| OSS | `oss.env.example` | Minimal local — SQLite, no Redis |
| OSS Local Power | `oss.local-power.env.example` | SQLite + Redis exact cache |
| OSS Team | `oss.team.env.example` | Postgres + Redis + Qdrant — full team deployment |

```bash
export AURORA_CONFIG_PATH=configs/editions/oss.team.example.yaml
```

### Configuring across deployment methods

Each env var works in all three deploy modes:

| Variable | `.env` file | Docker `-e` flag | Helm `--set` value |
|----------|-------------|------------------|---------------------|
| `PORT` | `PORT=9090` | `-e PORT=9090` | `--set server.port=9090` |
| `AURORA_MASTER_KEY` | `AURORA_MASTER_KEY=...` | `-e AURORA_MASTER_KEY=...` | `--set auth.masterKey=...` |
| `OPENAI_API_KEY` | `OPENAI_API_KEY=sk-...` | `-e OPENAI_API_KEY=sk-...` | `--set providers.openai.apiKey=...` |
| `STORAGE_TYPE` | `STORAGE_TYPE=postgresql` | `-e STORAGE_TYPE=postgresql` | `--set storage.type=postgresql` |
| `REDIS_URL` | `REDIS_URL=redis://...` | `-e REDIS_URL=redis://...` | `--set cache.redis.url=...` |

### Complete env var reference

All configurable environment variables, organized by subsystem:

#### Server & Security

| Env var | Default | Description |
|---------|---------|-------------|
| `PORT` | `8080` | HTTP listening port |
| `BASE_PATH` | `/` | URL path prefix to mount under |
| `AURORA_MASTER_KEY` | `""` | Master API key for auth |
| `BODY_SIZE_LIMIT` | `10M` | Max request body size (e.g. `10M`, `1G`, `500K`) |
| `SWAGGER_ENABLED` | `false` | Enable Swagger UI at `/swagger/index.html` |
| `PPROF_ENABLED` | `false` | Enable pprof at `/debug/pprof/` |
| `ENABLE_PASSTHROUGH_ROUTES` | `true` | Provider-native passthrough at `/p/{provider}` |
| `ALLOW_PASSTHROUGH_V1_ALIAS` | `true` | Allow `/p/{provider}/v1/...` alias routes |
| `ENABLED_PASSTHROUGH_PROVIDERS` | `openai,anthropic,openrouter,zai,vllm` | Provider types for passthrough |
| `ENABLE_ANTHROPIC_INGRESS` | `false` | Expose `/v1/messages` for native Anthropic clients |
| `DISABLE_REQUEST_LOGGING` | `false` | Turn off request logging |
| `DISABLE_REQUEST_BODY_SNAPSHOT` | `false` | Don't snapshot request bodies |
| `DISABLE_PASSTHROUGH_SEMANTIC_ENRICHMENT` | `false` | Disable semantic enrichment on passthrough |

#### HTTP Client & Proxy

| Env var | Default | Description |
|---------|---------|-------------|
| `HTTP_TIMEOUT` | `600` | Upstream request timeout (seconds) |
| `HTTP_RESPONSE_HEADER_TIMEOUT` | `600` | Timeout for upstream response headers (seconds) |
| `HTTP_PROXY` | — | HTTP proxy URL for upstream calls |
| `HTTPS_PROXY` | — | HTTPS proxy URL |
| `NO_PROXY` | — | Hosts to exclude from proxy |

#### Storage

| Env var | Default | Description |
|---------|---------|-------------|
| `STORAGE_TYPE` | `sqlite` | Backend: `sqlite`, `postgresql`, or `mongodb` |
| `SQLITE_PATH` | `data/aurora-oss.db` | SQLite database file path |
| `POSTGRES_URL` | — | PostgreSQL connection string |
| `POSTGRES_MAX_CONNS` | `10` | PostgreSQL connection pool max |
| `MONGODB_URL` | — | MongoDB connection string |
| `MONGODB_DATABASE` | `aurora` | MongoDB database name |

#### Model Registry

| Env var | Default | Description |
|---------|---------|-------------|
| `MODEL_LIST_URL` | `https://github.com/aurorallm/aurora/blob/main/docs-assets/assets/models.json` | External model metadata registry (empty = disabled) |
| `MODEL_LIST_LOCAL_PATH` | `data/models.local.json` | Local model registry snapshot path |
| `MODEL_LIST_USER_OVERRIDES_PATH` | `data/user_pricing.yaml` | User pricing override file |
| `MODELS_ENABLED_BY_DEFAULT` | `true` | Default enabled state for provider models |
| `MODEL_OVERRIDES_ENABLED` | `true` | Allow per-model overrides (dashboard editing) |
| `KEEP_ONLY_ALIASES_AT_MODELS_ENDPOINT` | `false` | Hide provider models from `GET /v1/models`, show only aliases |
| `CONFIGURED_PROVIDER_MODELS_MODE` | `fallback` | `fallback` or `allowlist` — how configured model lists affect inventory |

#### Caching

**Model cache:**

| Env var | Default | Description |
|---------|---------|-------------|
| `CACHE_REFRESH_INTERVAL` | `3600` | Model registry cache refresh (seconds) |
| `AURORA_CACHE_DIR` | `.cache` | Local filesystem cache directory |
| `REDIS_URL` | — | Redis connection URL (enables Redis-backed model cache) |
| `REDIS_KEY_MODELS` | `aurora:models` | Redis key for model cache |
| `REDIS_TTL_MODELS` | `86400` | Redis model cache TTL (seconds) |

**Response cache (exact match):**

| Env var | Default | Description |
|---------|---------|-------------|
| `RESPONSE_CACHE_SIMPLE_ENABLED` | `false` | Enable Redis exact-response cache |
| `REDIS_KEY_RESPONSES` | `aurora:response:` | Redis key prefix for responses |
| `REDIS_TTL_RESPONSES` | `3600` | Response cache TTL (seconds) |

**Semantic cache (vector similarity):**

| Env var | Default | Description |
|---------|---------|-------------|
| `SEMANTIC_CACHE_ENABLED` | `false` | Enable semantic cache |
| `SEMANTIC_CACHE_THRESHOLD` | `0.92` | Similarity threshold (0-1) |
| `SEMANTIC_CACHE_PROMPT_SIMILARITY` | `0.90` | Prompt similarity threshold (0-1) |
| `SEMANTIC_CACHE_TTL` | `3600` | Entry TTL (seconds) |
| `SEMANTIC_CACHE_MAX_CONV_MESSAGES` | `3` | Recent conversation messages to embed |
| `SEMANTIC_CACHE_EXCLUDE_SYSTEM_PROMPT` | `false` | Exclude system prompt from cache key |
| `SEMANTIC_CACHE_EMBEDDER_PROVIDER` | `openai` | Embedder provider name |
| `SEMANTIC_CACHE_EMBEDDER_MODEL` | `text-embedding-3-small` | Embedder model |
| `SEMANTIC_CACHE_VECTOR_STORE_TYPE` | `qdrant` | Backend: `qdrant`, `pgvector`, `pinecone`, `weaviate` |
| `SEMANTIC_CACHE_QDRANT_URL` | `http://localhost:6333` | Qdrant URL |
| `SEMANTIC_CACHE_QDRANT_COLLECTION` | `aurora_semantic` | Qdrant collection name |
| `SEMANTIC_CACHE_QDRANT_API_KEY` | — | Qdrant API key |
| `SEMANTIC_CACHE_PGVECTOR_URL` | — | pgvector connection string |
| `SEMANTIC_CACHE_PGVECTOR_TABLE` | `aurora_semantic_cache` | pgvector table name |
| `SEMANTIC_CACHE_PGVECTOR_DIMENSION` | `1536` | pgvector embedding dimension |
| `SEMANTIC_CACHE_PINECONE_HOST` | — | Pinecone host URL |
| `SEMANTIC_CACHE_PINECONE_API_KEY` | — | Pinecone API key |
| `SEMANTIC_CACHE_PINECONE_NAMESPACE` | — | Pinecone namespace |
| `SEMANTIC_CACHE_PINECONE_DIMENSION` | `1536` | Pinecone embedding dimension |
| `SEMANTIC_CACHE_WEAVIATE_URL` | — | Weaviate URL |
| `SEMANTIC_CACHE_WEAVIATE_CLASS` | `AuroraSemanticCache` | Weaviate class name |
| `SEMANTIC_CACHE_WEAVIATE_API_KEY` | — | Weaviate API key |

#### Audit Logging

| Env var | Default | Description |
|---------|---------|-------------|
| `LOGGING_ENABLED` | `false` | Enable audit log to storage |
| `LOGGING_LOG_BODIES` | `true` | Log request/response bodies (may contain PII) |
| `LOGGING_LOG_HEADERS` | `true` | Log headers (sensitive headers redacted) |
| `LOGGING_ONLY_MODEL_INTERACTIONS` | `true` | Skip health/metrics/admin endpoints |
| `LOGGING_BUFFER_SIZE` | `1000` | In-memory queue capacity |
| `LOGGING_FLUSH_INTERVAL` | `5` | Flush interval (seconds) |
| `LOGGING_RETENTION_DAYS` | `30` | Auto-delete after N days (0 = forever) |

#### Usage Tracking

| Env var | Default | Description |
|---------|---------|-------------|
| `USAGE_ENABLED` | `true` | Enable token usage tracking |
| `USAGE_PRICING_RECALCULATION_ENABLED` | `true` | Allow admin pricing recalculation |
| `ENFORCE_RETURNING_USAGE_DATA` | `true` | Add `stream_options.include_usage=true` to streaming requests |
| `USAGE_BUFFER_SIZE` | `1000` | In-memory queue capacity |
| `USAGE_FLUSH_INTERVAL` | `5` | Flush interval (seconds) |
| `USAGE_RETENTION_DAYS` | `90` | Auto-delete after N days (0 = forever) |

#### Guardrails

| Env var | Default | Description |
|---------|---------|-------------|
| `GUARDRAILS_ENABLED` | `false` | Enable content safety filters globally |
| `ENABLE_GUARDRAILS_FOR_BATCH_PROCESSING` | `false` | Apply guardrails to `/v1/batches` items |

#### Metrics

| Env var | Default | Description |
|---------|---------|-------------|
| `METRICS_ENABLED` | `false` | Enable Prometheus `/metrics` endpoint |
| `METRICS_ENDPOINT` | `/metrics` | Metrics endpoint path |

#### Token Saver (output compression)

| Env var | Default | Description |
|---------|---------|-------------|
| `TOKEN_SAVER_ENABLED` | `false` | Enable caveman-style output compression |
| `TOKEN_SAVER_ENDPOINTS` | `chat_completions` | Endpoints to apply it to |
| `TOKEN_SAVER_APPLY_STREAMING` | `true` | Apply to streaming responses |
| `TOKEN_SAVER_OUTPUT_ENABLED` | `false` | Enable output style/profile |
| `TOKEN_SAVER_OUTPUT_PROFILE` | `concise` | Output profile name |
| `TOKEN_SAVER_MODELS_INCLUDE` | — | Models to include (comma-separated) |
| `TOKEN_SAVER_MODELS_EXCLUDE` | — | Models to exclude |
| `TOKEN_SAVER_PROVIDERS_INCLUDE` | — | Providers to include |
| `TOKEN_SAVER_PROVIDERS_EXCLUDE` | — | Providers to exclude |
| `TOKEN_SAVER_ON_ERROR` | `allow` | Behavior on error: `allow` or `block` |
| `TOKEN_SAVER_EMIT_HEADERS` | `true` | Emit token-saver headers in response |
| `TOKEN_SAVER_AUDIT_ENABLED` | `true` | Log token-saver actions |

#### Resilience (retry + circuit breaker)

| Env var | Default | Description |
|---------|---------|-------------|
| `RETRY_MAX_RETRIES` | `3` | Upstream retry count |
| `RETRY_INITIAL_BACKOFF` | `1s` | Initial backoff duration |
| `RETRY_MAX_BACKOFF` | `30s` | Maximum backoff duration |
| `RETRY_BACKOFF_FACTOR` | `2.0` | Exponential backoff multiplier |
| `RETRY_JITTER_FACTOR` | `0.1` | Random jitter fraction |
| `CIRCUIT_BREAKER_FAILURE_THRESHOLD` | `5` | Failures before circuit opens |
| `CIRCUIT_BREAKER_SUCCESS_THRESHOLD` | `2` | Successes before circuit closes |
| `CIRCUIT_BREAKER_TIMEOUT` | `30s` | Time before half-open retry |

#### Fallback

| Env var | Default | Description |
|---------|---------|-------------|
| `FEATURE_FALLBACK_MODE` | `manual` | Fallback mode: `auto`, `manual`, or `off` |
| `FALLBACK_MANUAL_RULES_PATH` | — | Path to manual fallback rules JSON |

#### Admin & Features

| Env var | Default | Description |
|---------|---------|-------------|
| `ADMIN_ENDPOINTS_ENABLED` | `true` | Enable `/admin/api/v1/*` REST endpoints |
| `ADMIN_UI_ENABLED` | `true` | Enable `/admin/dashboard` UI |
| `COMBOS_ENABLED` | `true` | Enable combo model calls |
| `CLI_TOOLS_ENABLED` | `true` | Enable CLI tools integration |
| `CLI_TOOLS_APPLY_ENABLED` | `false` | Allow admin/API to apply tool changes |
| `WORKFLOW_REFRESH_INTERVAL` | `1m` | Workflow refresh interval from storage |
| `EDITION` | — | Edition identifier (Enterprise use) |

#### Config file path

| Env var | Default | Description |
|---------|---------|-------------|
| `AURORA_CONFIG_PATH` | `configs/config.yaml` | Override path to config YAML |

---

## CLI Reference

The `aurora` CLI is installed via `npm install -g iaurora`.

| Command | Description |
|---------|-------------|
| `aurora init` | Scaffolds `config.yaml`, `.env`, `data/` in the current directory |
| `aurora` | Starts the gateway server (default port 8080) |
| `aurora --help` | Show all CLI options |

`aurora init` generates:
- **`config.yaml`** — Full gateway configuration with inline docs for every section
- **`.env`** — Environment file for secrets and runtime overrides (based on `.env.template`)
- **`data/`** — Directory for SQLite database and local model cache

The gateway merges `config.yaml` + `.env`/env vars at startup. Use `config.yaml` for structure and `.env` for secrets/keys.

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

## Documentation

- [Website](https://aurorallm.online/)
- [CLI Reference](https://github.com/aurorallm/aurora)
- [Provider Configuration](https://github.com/aurorallm/aurora)
- [Admin Dashboard](https://github.com/aurorallm/aurora)
- [Docker Compose & Helm](https://github.com/aurorallm/aurora)

---

## Need Help?

[Join our Discord](https://discord.gg/AfaFBSU2km) for community support, setup help, and discussions.

---

## Contributing

We welcome contributions of all kinds! Check out the repository to get started:

- Setting up the development environment
- Code conventions and best practices
- How to submit pull requests
- Building and testing locally

---

## License

This project is licensed under the Apache 2.0 License — see the [LICENSE](LICENSE) file for details.

Built with ❤️ by the Aurora team.
