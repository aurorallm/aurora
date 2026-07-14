(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,69537,(e,t,a)=>{t.exports={version:"1.0.33",fetchedAt:"2026-07-14T19:29:06.032Z"}},42705,e=>{"use strict";let t=e.i(69537).default.version;e.s(["AURORA_VERSION",0,t])},70139,e=>{"use strict";var t=e.i(423),a=e.i(82755),s=e.i(82e3),i=e.i(31590),r=e.i(42705);let o=[{id:"chat-completions",label:"Chat Completions",color:"#3B82F6",endpoints:[{id:"create-completion",method:"POST",path:"/v1/chat/completions",title:"Create Chat Completion",description:"Primary inference endpoint. Routes to the optimal provider based on your configured strategy — latency, cost, or primary/fallback.",params:[{name:"model",type:"string",required:!0,description:"Model ID to use. e.g. gpt-4o, claude-3-opus, aurora-best-latency"},{name:"messages",type:"array",required:!0,description:"Array of message objects representing the conversation."},{name:"stream",type:"boolean",required:!1,description:"Enable server-sent event streaming of partial responses."},{name:"max_tokens",type:"integer",required:!1,description:"Maximum tokens in the generated response."},{name:"temperature",type:"number",required:!1,description:"Sampling temperature 0–2. Defaults to 1."}],curlExample:`curl -X POST https://api.aurora.gateway/v1/chat/completions \\
  -H "Authorization: Bearer $AURORA_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Explain quantum computing."}
    ],
    "stream": true
  }'`,responseExample:`{
  "id": "aur-8f3a-x1b2",
  "object": "chat.completion",
  "created": 1749268800,
  "model": "gpt-4o",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Quantum computing leverages qubits ..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 28,
    "completion_tokens": 142,
    "total_tokens": 170
  },
  "provider": "openai",
  "latency": "142ms"
}`},{id:"stream-completion",method:"POST",path:"/v1/chat/completions?stream=true",title:"Stream Chat Completion",description:"Same as the standard endpoint but returns a Server-Sent Events stream. Each chunk contains a delta of the response.",params:[{name:"model",type:"string",required:!0,description:"Model ID to use."},{name:"messages",type:"array",required:!0,description:"Conversation messages array."},{name:"stream",type:"boolean",required:!0,description:"Must be set to true."}],curlExample:`curl -X POST https://api.aurora.gateway/v1/chat/completions \\
  -H "Authorization: Bearer $AURORA_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "claude-3-opus",
    "messages": [
      {"role": "user", "content": "Write a short poem."}
    ],
    "stream": true
  }'`,responseExample:`data: {"id":"aur-9c2d","choices":[{"delta":{"role":"assistant"}}]}
data: {"id":"aur-9c2d","choices":[{"delta":{"content":"Here"}}]}
data: {"id":"aur-9c2d","choices":[{"delta":{"content":"'s a"}}]}
data: {"id":"aur-9c2d","choices":[{"delta":{"content":" poem..."}}]}
data: [DONE]`}]},{id:"embeddings",label:"Embeddings",color:"#C9A227",endpoints:[{id:"create-embeddings",method:"POST",path:"/v1/embeddings",title:"Create Embeddings",description:"Generate dense vector embeddings for input text. Compatible with OpenAI's embedding API format.",params:[{name:"model",type:"string",required:!0,description:"Embedding model ID. e.g. text-embedding-3-small"},{name:"input",type:"string | array",required:!0,description:"Input text or array of tokens to embed."}],curlExample:`curl -X POST https://api.aurora.gateway/v1/embeddings \\
  -H "Authorization: Bearer $AURORA_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "text-embedding-3-small",
    "input": "The quick brown fox jumps over the lazy dog."
  }'`,responseExample:`{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [
        -0.006929283495992422,
        -0.005336422007530928,
        ...
      ]
    }
  ],
  "model": "text-embedding-3-small",
  "usage": {
    "prompt_tokens": 8,
    "total_tokens": 8
  }
}`}]},{id:"models",label:"Models",color:"#C9A227",endpoints:[{id:"list-models",method:"GET",path:"/v1/models",title:"List Available Models",description:"Returns a list of all models available through the gateway, including provider and capability metadata.",params:[],curlExample:`curl -X GET https://api.aurora.gateway/v1/models \\
  -H "Authorization: Bearer $AURORA_KEY"`,responseExample:`{
  "object": "list",
  "data": [
    {
      "id": "gpt-4o",
      "object": "model",
      "provider": "openai",
      "capabilities": ["chat", "vision", "function_calling"],
      "created": 1749268800
    },
    {
      "id": "claude-3-opus",
      "object": "model",
      "provider": "anthropic",
      "capabilities": ["chat", "vision", "extended_thinking"],
      "created": 1749268800
    }
  ]
}`}]},{id:"providers",label:"Providers",color:"#C9A227",endpoints:[{id:"list-providers",method:"GET",path:"/v1/providers",title:"List Providers",description:"List all configured LLM providers, their status, latency, and active model counts.",params:[],curlExample:`curl -X GET https://api.aurora.gateway/v1/providers \\
  -H "Authorization: Bearer $AURORA_KEY"`,responseExample:`{
  "object": "list",
  "data": [
    {
      "id": "openai",
      "status": "healthy",
      "latency_p50": 142,
      "latency_p99": 890,
      "active_models": 12,
      "total_requests": 1047291
    },
    {
      "id": "anthropic",
      "status": "healthy",
      "latency_p50": 310,
      "latency_p99": 1200,
      "active_models": 6,
      "total_requests": 482310
    }
  ]
}`}]},{id:"keys",label:"API Keys",color:"#C72A09",endpoints:[{id:"create-key",method:"POST",path:"/v1/admin/keys",title:"Create API Key",description:"Generate a new API key with specific permissions, rate limits, and budget caps.",params:[{name:"name",type:"string",required:!0,description:"Human-readable label for the key."},{name:"rate_limit_rpm",type:"integer",required:!1,description:"Max requests per minute."},{name:"budget_cap",type:"number",required:!1,description:"Monthly spend cap in USD."}],curlExample:`curl -X POST https://api.aurora.gateway/v1/admin/keys \\
  -H "Authorization: Bearer $AURORA_ADMIN_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "production-app",
    "rate_limit_rpm": 10000,
    "budget_cap": 500.00
  }'`,responseExample:`{
  "id": "key_a1b2c3d4",
  "name": "production-app",
  "key": "aurora_sk_f4k3...key",
  "created": 1749268800,
  "rate_limit_rpm": 10000,
  "budget_cap": 500.00,
  "usage": {
    "current_month": 0
  }
}`},{id:"list-keys",method:"GET",path:"/v1/admin/keys",title:"List API Keys",description:"Retrieve all API keys with their metadata and usage statistics.",params:[],curlExample:`curl -X GET https://api.aurora.gateway/v1/admin/keys \\
  -H "Authorization: Bearer $AURORA_ADMIN_KEY"`,responseExample:`{
  "object": "list",
  "data": [
    {
      "id": "key_a1b2c3d4",
      "name": "production-app",
      "created": 1749268800,
      "rate_limit_rpm": 10000,
      "usage_current_month": 234.50
    }
  ]
}`},{id:"delete-key",method:"DELETE",path:"/v1/admin/keys/:id",title:"Revoke API Key",description:"Immediately revoke an API key. All in-flight requests will be allowed to complete.",params:[{name:"id",type:"string",required:!0,description:"The API key ID to revoke."}],curlExample:`curl -X DELETE https://api.aurora.gateway/v1/admin/keys/key_a1b2c3d4 \\
  -H "Authorization: Bearer $AURORA_ADMIN_KEY"`,responseExample:`{
  "id": "key_a1b2c3d4",
  "object": "api_key",
  "deleted": true
}`}]},{id:"analytics",label:"Analytics",color:"#C9A227",endpoints:[{id:"get-usage",method:"GET",path:"/v1/admin/analytics/usage",title:"Usage Statistics",description:"Aggregated usage metrics broken down by provider, model, and time window.",params:[{name:"start_date",type:"string",required:!0,description:"ISO date string for the start of the window."},{name:"end_date",type:"string",required:!0,description:"ISO date string for the end of the window."},{name:"granularity",type:"string",required:!1,description:"hour, day, or month. Defaults to day."}],curlExample:`curl -X GET "https://api.aurora.gateway/v1/admin/analytics/usage?start_date=2026-06-01&end_date=2026-07-01&granularity=day" \\
  -H "Authorization: Bearer $AURORA_ADMIN_KEY"`,responseExample:`{
  "object": "list",
  "data": [
    {
      "date": "2026-06-01",
      "provider": "openai",
      "total_requests": 84210,
      "total_tokens": 12400000,
      "total_cost": 421.05
    }
  ],
  "summary": {
    "total_requests": 2520000,
    "total_tokens": 372000000,
    "total_cost": 12631.50
  }
}`},{id:"get-logs",method:"GET",path:"/v1/admin/analytics/logs",title:"Inference Logs",description:"Real-time and historical inference logs with filtering by model, provider, and status code.",params:[{name:"limit",type:"integer",required:!1,description:"Number of log entries to return. Max 1000."},{name:"offset",type:"integer",required:!1,description:"Pagination offset."}],curlExample:`curl -X GET "https://api.aurora.gateway/v1/admin/analytics/logs?limit=50&offset=0" \\
  -H "Authorization: Bearer $AURORA_ADMIN_KEY"`,responseExample:`{
  "object": "list",
  "data": [
    {
      "id": "log_abc123",
      "timestamp": "2026-07-01T12:00:00Z",
      "model": "gpt-4o",
      "provider": "openai",
      "status": 200,
      "latency_ms": 142,
      "tokens": 170,
      "cost": 0.0034
    }
  ],
  "total": 1047291
}`}]},{id:"health",label:"Health",color:"#C72A09",endpoints:[{id:"health-check",method:"GET",path:"/v1/health",title:"Health Check",description:"Lightweight health check endpoint. Returns gateway status and provider connectivity.",params:[],curlExample:"curl -X GET https://api.aurora.gateway/v1/health",responseExample:`{
  "status": "healthy",
  "uptime_seconds": 86400,
  "version": "${r.AURORA_VERSION}-OSS",
  "providers": {
    "openai": "reachable",
    "anthropic": "reachable",
    "google": "reachable"
  },
  "latency_p50": 0.4
}`}]}],l={GET:"#C9A227",POST:"#3B82F6",PUT:"#F59E0B",DELETE:"#EF4444"},n=[{id:"introduction",label:"Introduction",color:"#C72A09"},{id:"chat-completions",label:"Chat Completions",color:"#C9A227"},{id:"embeddings",label:"Embeddings",color:"#C9A227"},{id:"models",label:"Models",color:"#C9A227"},{id:"providers",label:"Providers",color:"#C9A227"},{id:"keys",label:"API Keys",color:"#C72A09"},{id:"analytics",label:"Analytics",color:"#C9A227"},{id:"health",label:"Health",color:"#C72A09"}];e.s(["default",0,function(){let[e,d]=(0,a.useState)("chat-completions"),[c,p]=(0,a.useState)(!1),m=o.find(t=>t.id===e)||o[0];function x(e){d(e),p(!1);let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Navbar,{}),(0,t.jsxs)("main",{className:"min-h-screen w-full bg-[#E3E2DE]",children:[(0,t.jsx)("div",{className:"noise-overlay"}),(0,t.jsxs)("section",{className:"relative overflow-hidden bg-[#0A0805] shadow-2xl",children:[(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1639762681485-074b5012eb87?q=80&w=2070&auto=format&fit=crop",className:"absolute inset-0 w-full h-full object-cover opacity-20 grayscale pointer-events-none",alt:""}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0A0805] via-transparent to-transparent"}),(0,t.jsxs)("div",{className:"relative z-10 px-6 md:px-8 py-16 md:py-20 max-w-6xl mx-auto",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-4",children:[(0,t.jsx)("span",{className:"bg-[#C72A09] text-white px-3 py-1 text-[10px] font-mono tracking-tighter",children:"API"}),(0,t.jsxs)("span",{className:"text-xs font-mono text-white/60",children:["Aurora Gateway v",r.AURORA_VERSION,"-OSS"]})]}),(0,t.jsxs)("h1",{className:"font-clash text-[60px] md:text-[80px] uppercase leading-[0.8] tracking-tighter text-[#E3E2DE] hero-heading",children:["API",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-[#C9A227] aurora-glow",children:"Reference"})]}),(0,t.jsx)("p",{className:"text-white/60 text-lg max-w-2xl mt-6 leading-relaxed",children:"Direct bridge to machine intelligence. Unified specification across 30+ LLM providers with automatic routing, failover, and observability."})]})]}),(0,t.jsx)("div",{className:"max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16",children:(0,t.jsxs)("div",{className:"flex gap-8 lg:gap-12 relative",children:[(0,t.jsx)("button",{onClick:()=>p(!c),className:"lg:hidden fixed bottom-8 right-8 z-50 bg-[#1B0E0D] text-[#E3E2DE] p-4 rounded-sm shadow-xl","aria-label":"Toggle sidebar",children:c?(0,t.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,t.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):(0,t.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,t.jsx)("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),(0,t.jsx)("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),c&&(0,t.jsx)("div",{className:"lg:hidden fixed inset-0 bg-black/50 z-40",onClick:()=>p(!1)}),(0,t.jsxs)("aside",{className:`
                shrink-0 w-64
                ${c?"fixed inset-y-0 left-0 z-50 translate-x-0":"hidden"}
                lg:block lg:sticky lg:top-32 lg:h-[calc(100vh-160px)] lg:translate-x-0
                overflow-y-auto pb-12 pr-4 bg-[#E3E2DE] lg:bg-transparent
                border-r border-[#1B0E0D]/10 lg:border-r-0
                pt-8 lg:pt-0
                transition-transform duration-300
              `,children:[(0,t.jsx)("button",{onClick:()=>p(!1),className:"lg:hidden absolute top-4 right-4 text-[#1B0E0D]","aria-label":"Close sidebar",children:(0,t.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,t.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),(0,t.jsx)("nav",{className:"flex flex-col gap-10",children:n.map(a=>(0,t.jsxs)("section",{children:[(0,t.jsx)("h5",{className:"font-clash text-xs uppercase tracking-widest mb-4",style:{color:a.color,opacity:.5},children:(a.id,a.label)}),"introduction"===a.id?(0,t.jsxs)("ul",{className:"flex flex-col gap-3 font-medium text-xs uppercase",children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:()=>x("chat-completions"),className:`sidebar-link block py-1 text-left w-full ${"chat-completions"===e?"active":""}`,children:"Authentication"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:()=>x("chat-completions"),className:"sidebar-link block py-1 text-left w-full",children:"Rate Limits"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:()=>x("chat-completions"),className:"sidebar-link block py-1 text-left w-full",children:"Error Codes"})})]}):(0,t.jsx)("ul",{className:"flex flex-col gap-3 font-medium text-xs uppercase",children:o.find(e=>e.id===a.id)?.endpoints.map(s=>(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:()=>x(s.id),className:`sidebar-link block py-1 text-left w-full ${e===a.id?"active":""}`,children:s.title})},s.id))})]},a.id))})]}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[m&&(0,t.jsx)("div",{id:m.id,className:"scroll-mt-32",children:(0,t.jsxs)("div",{className:"flex items-baseline gap-4 mb-12 border-b-2 border-[#1B0E0D] pb-4",children:[(0,t.jsxs)("span",{className:"font-mono text-[#C72A09] text-sm uppercase font-black",children:[String(n.findIndex(e=>e.id===m.id)+1).padStart(2,"0")," ","//"]}),(0,t.jsx)("h2",{className:"font-clash text-4xl md:text-5xl uppercase tracking-tighter text-[#1B0E0D]",children:m.label})]})}),m?.endpoints.map(e=>(0,t.jsxs)("div",{id:e.id,className:"scroll-mt-32 endpoint-card",children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-4 mb-8",children:[(0,t.jsx)("span",{className:"method-badge text-[10px]",style:{color:l[e.method],borderColor:l[e.method]},children:e.method}),(0,t.jsx)("code",{className:"font-mono text-lg md:text-xl text-[#1B0E0D] break-all",children:e.path})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12",children:[(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsx)("p",{className:"text-base md:text-lg uppercase font-medium leading-tight text-[#1B0E0D]/80",children:e.description}),e.params.length>0&&(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h4",{className:"font-clash text-sm uppercase tracking-widest text-[#1B0E0D]/50",children:"Parameters"}),e.params.map(e=>(0,t.jsxs)("div",{className:"border-t border-[#1B0E0D] py-4",children:[(0,t.jsxs)("div",{className:"flex justify-between items-baseline mb-2 gap-4",children:[(0,t.jsx)("span",{className:"font-bold font-mono text-sm text-[#1B0E0D]",children:e.name}),(0,t.jsx)("span",{className:"text-[10px] bg-[#1B0E0D] text-[#E3E2DE] px-2 py-0.5 uppercase whitespace-nowrap font-mono",children:e.required?"Required":"Optional"})]}),(0,t.jsx)("p",{className:"text-xs text-[#1B0E0D]/60 uppercase leading-relaxed",children:e.description}),(0,t.jsxs)("span",{className:"text-[10px] font-mono text-[#1B0E0D]/40 mt-1 block",children:["Type: ",e.type]})]},e.name))]})]}),(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("div",{className:"code-block",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,t.jsx)("span",{className:"text-[10px] text-[#E3E2DE]/40 font-mono uppercase tracking-widest",children:"cURL Example"}),(0,t.jsx)("button",{onClick:()=>navigator.clipboard.writeText(e.curlExample),className:"text-[#E3E2DE]/40 hover:text-[#C9A227] transition-colors cursor-pointer","aria-label":"Copy curl example",children:(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,t.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})})]}),(0,t.jsx)("pre",{className:"font-mono text-xs md:text-sm text-[#E3E2DE] overflow-x-auto leading-relaxed whitespace-pre-wrap",children:e.curlExample})]}),(0,t.jsxs)("div",{className:"code-block",style:{borderLeftColor:"#C9A227"},children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,t.jsx)("span",{className:"text-[10px] text-[#E3E2DE]/40 font-mono uppercase tracking-widest",children:"Response Sample"}),(0,t.jsx)("button",{onClick:()=>navigator.clipboard.writeText(e.responseExample),className:"text-[#E3E2DE]/40 hover:text-[#C9A227] transition-colors cursor-pointer","aria-label":"Copy response example",children:(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,t.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})})]}),(0,t.jsx)("pre",{className:"font-mono text-xs md:text-sm text-[#E3E2DE] overflow-x-auto leading-relaxed whitespace-pre-wrap",children:e.responseExample})]})]})]})]},e.id)),(0,t.jsxs)("section",{className:"endpoint-card",children:[(0,t.jsxs)("div",{className:"flex items-baseline gap-4 mb-10 border-b border-[#1B0E0D] pb-2",children:[(0,t.jsx)("span",{className:"font-mono text-[#C72A09] text-sm uppercase font-black",children:"00 //"}),(0,t.jsx)("h2",{className:"font-clash text-4xl md:text-5xl uppercase tracking-tight text-[#1B0E0D]",children:"Rate Limits"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,t.jsxs)("div",{className:"border-2 border-[#1B0E0D] p-6",children:[(0,t.jsx)("span",{className:"font-mono text-xs text-[#1B0E0D]/40 mb-2 block",children:"RPM"}),(0,t.jsx)("div",{className:"text-5xl font-clash text-[#1B0E0D]",children:"10,000"}),(0,t.jsx)("p",{className:"text-[10px] mt-4 uppercase font-bold text-[#1B0E0D]/60",children:"Requests Per Minute"})]}),(0,t.jsxs)("div",{className:"border-2 border-[#1B0E0D] p-6",children:[(0,t.jsx)("span",{className:"font-mono text-xs text-[#1B0E0D]/40 mb-2 block",children:"TPM"}),(0,t.jsx)("div",{className:"text-5xl font-clash text-[#1B0E0D]",children:"1.5M"}),(0,t.jsx)("p",{className:"text-[10px] mt-4 uppercase font-bold text-[#1B0E0D]/60",children:"Tokens Per Minute"})]}),(0,t.jsxs)("div",{className:"border-2 border-[#1B0E0D] p-6 bg-[#1B0E0D] text-[#E3E2DE]",children:[(0,t.jsx)("span",{className:"font-mono text-xs text-[#E3E2DE]/40 mb-2 block",children:"ERROR CODE"}),(0,t.jsx)("div",{className:"text-5xl font-clash text-[#EF4444]",children:"429"}),(0,t.jsx)("p",{className:"text-[10px] mt-4 uppercase font-bold text-[#C9A227]",children:"Standard HTTP Code"})]})]})]})]})]})})]}),(0,t.jsx)(s.Footer,{})]})}])}]);