(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,69537,(e,a,s)=>{a.exports={version:"1.0.33",fetchedAt:"2026-07-14T19:29:06.032Z"}},42705,e=>{"use strict";let a=e.i(69537).default.version;e.s(["AURORA_VERSION",0,a])},45938,e=>{"use strict";var a=e.i(423),s=e.i(31590),t=e.i(82e3),l=e.i(42705);let r=[{value:"42%",label:"Cost Savings"},{value:"30MS",label:"Latency Gain"},{value:"100X",label:"Scale Ready"}],i=[{icon:(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"w-12 h-12 opacity-40 group-hover:opacity-100 transition-opacity",fill:"currentColor",children:(0,a.jsx)("path",{d:"M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 1.672 0 2.735.612 3.202 1.054l1.292-1.508c-.738-.682-2.062-1.257-3.837-1.257-2.36 0-3.938 1.216-3.938 3.099 0 2.025 1.643 2.814 3.878 3.612 2.399.852 3.298 1.524 3.298 2.579 0 .988-.864 1.549-2.1 1.549-1.692 0-2.969-.646-3.563-1.205L9.8 14.574c.795.802 2.291 1.583 4.333 1.583 2.489 0 4.166-1.281 4.166-3.369 0-2.209-1.448-3.114-3.323-3.798zM24 5.047v13.906A5.047 5.047 0 0118.953 24H5.047A5.047 5.047 0 010 18.953V5.047A5.047 5.047 0 015.047 0h13.906A5.047 5.047 0 0124 5.047z"})}),tag:"Finance",title:"Global Ledger: p99 Latency optimization",desc:"How a global fintech leader unified 15+ LLM endpoints into a single, high-availability stream with failover automation.",metrics:[{value:"12MS",label:"p99 Latency"},{value:"99.99%",label:"Uptime"}]},{icon:(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"w-12 h-12 opacity-40 group-hover:opacity-100 transition-opacity",fill:"currentColor",children:(0,a.jsx)("path",{d:"M4.71 0A4.7 4.7 0 000 4.71v14.58A4.7 4.7 0 004.71 24h14.58A4.7 4.7 0 0024 19.29V4.71A4.7 4.7 0 0019.29 0H4.71zm3.79 4.5h1.59l3.43 8.06 3.3-8.06h1.51l-4.18 9.85v5.23h-1.4v-5.23L8.5 4.5z"})}),tag:"AI/ML",title:"Model Agnostic: Dynamic provider routing",desc:"Research lab achieves zero downtime during provider outages by implementing Aurora's intelligent health-check routing.",metrics:[{value:"0MS",label:"Downtime"},{value:"3.5X",label:"Efficiency"}]},{icon:(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"w-12 h-12 opacity-40 group-hover:opacity-100 transition-opacity",fill:"currentColor",children:(0,a.jsx)("path",{d:"M12 0c-1.43 0-2.735.503-3.78 1.5H4.5A1.5 1.5 0 003 3v3.72C2.003 7.765 1.5 9.07 1.5 10.5c0 1.43.503 2.735 1.5 3.78V18a1.5 1.5 0 001.5 1.5h3.72c1.045.997 2.35 1.5 3.78 1.5s2.735-.503 3.78-1.5H18a1.5 1.5 0 001.5-1.5v-3.72c.997-1.045 1.5-2.35 1.5-3.78 0-1.43-.503-2.735-1.5-3.78V3A1.5 1.5 0 0018 1.5h-3.72C13.235.503 11.93 0 10.5 0zM9 5.5a1 1 0 011 1v7a1 1 0 01-2 0v-7a1 1 0 011-1zm3 0a1 1 0 011 1v7a1 1 0 01-2 0v-7a1 1 0 011-1zm3 1a1 1 0 00-2 0v7a1 1 0 002 0v-7z"})}),tag:"SaaS",title:"Data Guard: Multi-tenant PII scrubbing",desc:"Securing enterprise customer data at the edge. How Aurora Gateway became the security compliance backbone for DataGuard.",metrics:[{value:"100%",label:"Compliance"},{value:"Sub-1ms",label:"Overhead"}]}];e.s(["default",0,function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Navbar,{}),(0,a.jsxs)("main",{className:"flex-1",children:[(0,a.jsx)("style",{children:`
          @keyframes headingFadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes cardReveal {
            from { opacity: 0; transform: scale(1) translateY(30px); }
            to { opacity: 1; transform: scale(1.02) translateY(0); }
          }
          @keyframes imageRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(2deg); }
          }
          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 10px rgba(201,162,39,0.3); }
            50% { box-shadow: 0 0 25px rgba(201,162,39,0.7); }
          }
          @keyframes fadeInStagger {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .hero-heading {
            line-height: 0.85;
          }
          .indent-custom {
            padding-left: 20vw;
          }
          .grayscale-img {
            filter: grayscale(100%);
            transition: filter 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .case-study-card:hover .grayscale-img {
            filter: grayscale(0%);
            transform: scale(1.02);
          }
          .case-study-card {
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            border: 1px solid #1B0E0D;
          }
          .case-study-card:hover {
            transform: translateY(-8px);
            box-shadow: 20px 20px 0px rgba(27, 14, 13, 1);
            background-color: #fff;
          }
          .brutalist-button {
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .brutalist-button:hover {
            transform: translate(-4px, -4px);
            box-shadow: 4px 4px 0px #1B0E0D;
          }
          .active-filter {
            background-color: #C9A227;
            color: #1B0E0D;
            border-color: #1B0E0D;
          }
          .logo-grid-item {
            filter: grayscale(100%);
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          .logo-grid-item:hover {
            filter: grayscale(0%);
            opacity: 1;
          }
          .timeline-dot {
            width: 8px;
            height: 8px;
            background-color: #C72A09;
            border-radius: 0;
            transform: rotate(45deg);
          }
          .case-study-card:hover .grayscale-img-card {
            animation: imageRotate 400ms ease forwards;
          }
          .cta-glow-pulse:hover {
            animation: glowPulse 3s infinite;
          }
          .animate-heading {
            animation: headingFadeUp 800ms cubic-bezier(0.165, 0.84, 0.44, 1) both;
          }
          .animate-card {
            animation: cardReveal 600ms cubic-bezier(0.165, 0.84, 0.44, 1) both;
          }
          .stagger-1 { animation-delay: 100ms; }
          .stagger-2 { animation-delay: 200ms; }
          .stagger-3 { animation-delay: 300ms; }
          .stagger-4 { animation-delay: 400ms; }
          .stagger-5 { animation-delay: 500ms; }
        `}),(0,a.jsx)("header",{className:"relative min-h-[80vh] bg-[#1B0E0D] flex flex-col justify-end overflow-hidden pt-48 pb-20 px-4 md:px-8",children:(0,a.jsxs)("div",{className:"relative z-10 w-full max-w-[1440px] mx-auto",children:[(0,a.jsxs)("div",{className:"font-mono text-[10px] text-[#C9A227] opacity-80 tracking-[0.4em] uppercase mb-10",children:["Evidence // Global_Adoption // v",l.AURORA_VERSION]}),(0,a.jsxs)("h1",{className:"font-clash text-[12vw] text-[#E3E2DE] hero-heading uppercase mb-16",children:["Customer",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"indent-custom text-[#C72A09]",children:"Stories"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-12 gap-8 border-t border-[#E3E2DE]/20 pt-12 mt-12",children:[(0,a.jsx)("div",{className:"col-span-12 md:col-span-8",children:(0,a.jsx)("p",{className:"text-[#E3E2DE] text-xl md:text-3xl uppercase font-medium leading-none tracking-tighter max-w-2xl",children:"Success at Scale: Validated performance gains across 50+ enterprise deployments and 1.2B daily gateway operations."})}),(0,a.jsx)("div",{className:"col-span-12 md:col-span-4"})]})]})}),(0,a.jsx)("section",{className:"py-20 md:py-32 px-4 md:px-8",children:(0,a.jsxs)("div",{className:"max-w-[1440px] mx-auto",children:[(0,a.jsx)("div",{className:"mb-16",children:(0,a.jsx)("span",{className:"bg-[#C72A09] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest",children:"Featured Case Study"})}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-[#1B0E0D] p-6 md:p-12",children:[(0,a.jsxs)("div",{className:"lg:col-span-6 relative group overflow-hidden border border-[#1B0E0D]",children:[(0,a.jsx)("img",{src:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",className:"w-full h-full object-cover grayscale-img",alt:"TechCorp Office"}),(0,a.jsx)("div",{className:"absolute top-6 left-6",children:(0,a.jsx)("span",{className:"bg-black text-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest",children:"TechCorp Inc."})})]}),(0,a.jsxs)("div",{className:"lg:col-span-6 flex flex-col justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex gap-4 mb-6 items-center",children:[(0,a.jsx)("span",{className:"px-2 py-0.5 border border-[#1B0E0D] text-[10px] font-mono uppercase",children:"SaaS Platform"}),(0,a.jsx)("div",{className:"w-12 h-[1px] bg-[#1B0E0D]"}),(0,a.jsx)("span",{className:"text-[10px] font-mono opacity-50 uppercase",children:"Verified July 2026"})]}),(0,a.jsxs)("h2",{className:"font-clash text-4xl md:text-6xl uppercase leading-[0.9] mb-8",children:["How TechCorp Reduced",(0,a.jsx)("br",{}),"AI Costs by ",(0,a.jsx)("span",{className:"text-[#C72A09]",children:"42%"})]}),(0,a.jsxs)("div",{className:"relative mb-12 pl-10",children:[(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"absolute top-0 left-0 w-8 h-8 text-[#C72A09]",fill:"currentColor",children:(0,a.jsx)("path",{d:"M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"})}),(0,a.jsx)("p",{className:"text-lg md:text-xl font-medium uppercase leading-tight italic text-[#C72A09] opacity-90",children:"“Aurora Gateway isn't just middleware; it's our cost control layer. We've scaled our LLM features 10x without ballooning our budget.”        "}),(0,a.jsx)("p",{className:"text-xs font-mono uppercase mt-4 text-[#1B0E0D]",children:"— Marcus Vance, CTO at TechCorp"})]})]}),(0,a.jsx)("div",{className:"grid grid-cols-3 gap-4 md:gap-6 mb-12",children:r.map(e=>(0,a.jsxs)("div",{className:"border-l-4 border-[#C9A227] pl-4 py-2",children:[(0,a.jsx)("span",{className:"block font-clash text-3xl md:text-4xl",children:e.value}),(0,a.jsx)("span",{className:"block font-mono text-[10px] uppercase opacity-60",children:e.label})]},e.label))}),(0,a.jsxs)("div",{className:"flex flex-wrap items-center gap-8",children:[(0,a.jsx)("a",{href:"#",className:"bg-[#C9A227] text-[#1B0E0D] px-8 md:px-10 py-4 md:py-5 uppercase font-bold text-sm tracking-[0.2em] brutalist-button cta-glow-pulse inline-block",children:"Read Full Case Study"}),(0,a.jsx)("div",{className:"flex items-center gap-6",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-mono text-[10px] opacity-40 uppercase",children:"Implementation"}),(0,a.jsxs)("div",{className:"flex items-center gap-3 mt-1",children:[(0,a.jsx)("div",{className:"timeline-dot"}),(0,a.jsx)("div",{className:"w-12 h-1 bg-[#1B0E0D]/10 relative",children:(0,a.jsx)("div",{className:"absolute top-0 left-0 h-full bg-[#C9A227] w-full"})}),(0,a.jsx)("span",{className:"font-mono text-[10px] font-bold uppercase",children:"4 Weeks"})]})]})})]})]})]})]})}),(0,a.jsx)("section",{className:"py-20 md:py-24 px-4 md:px-8 border-t border-[#1B0E0D]",children:(0,a.jsxs)("div",{className:"max-w-[1440px] mx-auto",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8",children:[(0,a.jsxs)("h2",{className:"font-clash text-5xl md:text-8xl uppercase tracking-tighter leading-none",children:["More",(0,a.jsx)("br",{}),"Success"]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:["All","Finance","SaaS","Healthcare","AI/ML"].map(e=>(0,a.jsx)("button",{className:`px-6 py-3 uppercase font-bold text-[10px] tracking-widest border border-[#1B0E0D] brutalist-button ${"All"===e?"active-filter":"hover:bg-white transition-all"}`,children:e},e))})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12",children:i.map((e,s)=>(0,a.jsxs)("div",{className:"case-study-card p-8 md:p-10 flex flex-col justify-between group h-full bg-white/50",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-start mb-8",children:[e.icon,(0,a.jsx)("span",{className:"px-2 py-0.5 bg-[#1B0E0D] text-white text-[9px] font-mono uppercase",children:e.tag})]}),(0,a.jsx)("h3",{className:"font-clash text-2xl md:text-3xl uppercase mb-4 leading-tight",children:e.title}),(0,a.jsx)("p",{className:"text-sm uppercase opacity-70 mb-10 leading-relaxed",children:e.desc})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex gap-8 border-t border-[#1B0E0D]/10 pt-8 mb-8",children:e.metrics.map(e=>(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"font-clash text-2xl",children:e.value}),(0,a.jsx)("span",{className:"font-mono text-[9px] uppercase opacity-50",children:e.label})]},e.label))}),(0,a.jsxs)("a",{href:"#",className:"inline-flex items-center gap-2 font-bold uppercase text-xs tracking-widest group-hover:text-[#C72A09] transition-colors",children:["Read Story",(0,a.jsx)("svg",{viewBox:"0 0 24 24",className:"w-4 h-4",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,a.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]},e.title))})]})}),(0,a.jsx)("section",{className:"py-24 md:py-40 px-4 md:px-8",children:(0,a.jsxs)("div",{className:"max-w-4xl mx-auto text-center",children:[(0,a.jsxs)("h2",{className:"font-clash text-6xl md:text-9xl uppercase tracking-tighter leading-none mb-12",children:["Your Turn To",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-[#C72A09]",children:"Optimize"})]}),(0,a.jsx)("p",{className:"text-lg md:text-2xl uppercase font-medium leading-tight mb-16 opacity-80",children:"Join the industrial standard for high-performance AI inference. Deploy Aurora in minutes and take total control over your machine intelligence costs."}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-6",children:[(0,a.jsx)("a",{href:"#",className:"bg-[#1B0E0D] text-white px-10 md:px-12 py-5 md:py-6 uppercase font-bold text-sm tracking-[0.2em] brutalist-button cta-glow-pulse inline-block",children:"Start Free Trial"}),(0,a.jsx)("a",{href:"#",className:"border border-[#1B0E0D] text-[#1B0E0D] px-10 md:px-12 py-5 md:py-6 uppercase font-bold text-sm tracking-[0.2em] brutalist-button hover:bg-white inline-block",children:"Request Demo"})]})]})})]}),(0,a.jsx)(t.Footer,{})]})}])}]);