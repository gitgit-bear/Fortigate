import { useEffect, useState } from "react";

const icons = ["🧠", "⏱️", "📊", "🔌", "📝", "⚡", "🛡️", "🎯"];

const i18n = {
  zh: {
    htmlLang: "zh-Hant",
    pageTitle: "FortiTrace IR - FortiGate DFIR 分析平台",
    navContact: "聯絡",
    navDemo: "申請 Demo",
    heroTag: "DFIR / Incident Response for FortiGate",
    heroTitle: "FortiTrace IR",
    heroSubtitle: "把 FortiGate log 變成可交付的攻擊敘事與決策報告。",
    heroDesc:
      "專為 cyber security 團隊打造，快速重建 attack timeline、keyword timeline 與 attack story，同步輸出 management-ready dashboard、technical details 與 SIEM-friendly data，讓調查、簡報、交接一次到位。",
    ctaDemo: "申請示範",
    ctaContact: "聯絡我們",
    trustBadges: [
      "FortiGate 專用調查流程",
      "Analyst + Management 雙視角",
      "可離線部署（Offline-first）",
      "SIEM / SOC 交接友善",
    ],
    what: {
      kicker: "What It Is",
      title: "不只是 log parser，也不取代 SIEM，而是補齊調查到交付的最後一哩",
      desc: "FortiTrace IR 聚焦本地快速調查：把零散 log 轉成 keyword attack story 與可讀時間線，再同步產出 management-ready dashboard、SIEM-friendly export 與 case handoff 成果。",
      points: [
        "適合 cyber security 公司、MSSP / SOC、IR team 與企業資安團隊。",
        "比單純搜尋更有脈絡：從關鍵字到攻擊故事，一次串接。",
        "比只看 firewall event 更可交付：可直接對 manager、客戶、SOC 做回報。",
      ],
    },
    featuresTitle: "核心功能",
    features: [
      ["Keyword Attack Story", "把分散事件轉成可讀的攻擊敘事，快速掌握入侵脈絡與轉折點。"],
      ["Keyword Timeline", "針對關鍵字建立時間序列，從 IOC 到關聯行為一路追蹤。"],
      ["Management Dashboard", "即時彙整事件狀態、風險熱點與處置進度，方便管理層決策。"],
      ["SIEM-friendly Export", "輸出結構化資料，可順利銜接 Splunk、ELK 與既有 SIEM 流程。"],
      ["Case Notes / Handoff", "完整保留分析備註與證據脈絡，讓 SOC 交接更一致、可追溯。"],
      ["Massive Log Triage", "面對大量 FortiGate log 也能快速篩選、聚焦高風險事件。"],
      ["MITRE Mapping", "對照 MITRE ATT&CK 技術，協助團隊標準化事件描述與回報。"],
      ["Executive / Technical Dual View", "同一份資料可切換技術深度，兼顧 analyst 與 management 受眾。"],
    ],
    ui: {
      kicker: "UI Showcase",
      title: "介面展示",
      desc: "以下展示 FortiGate Incident Workbench GUI 的產品介面圖，方便潛在客戶快速理解使用情境。",
      items: [
        ["主分析介面", "集中檢視 log 摘要、告警與關聯行為，建立第一輪判讀。", "/screenshots/main-analysis.svg"],
        ["Attack Story 畫面", "將關鍵事件串為敘事流程，快速產出 incident story。", "/screenshots/attack-story.svg"],
        ["Management Dashboard", "視覺化呈現風險與處置 KPI，直接支援簡報與會議。", "/screenshots/management-dashboard.svg"],
        ["Keyword Timeline / Timeline Investigation", "以時間軸追蹤可疑字串，還原攻擊活動前後脈絡。", "/screenshots/keyword-timeline.svg"],
      ],
    },
    workflow: {
      title: "使用流程",
      steps: ["匯入 FortiGate log", "快速分析與偵測", "建立時間線與攻擊故事", "匯出 dashboard / story / SIEM data", "交付 management / SOC / 客戶"],
    },
    matters: ["比手工翻 log 更快：聚焦重要事件，減少分析時間浪費。", "比純 search 更有脈絡：從單一事件提升到完整攻擊故事。", "比只看 firewall event 更易交付：可直接產出 dashboard 與報告。", "同時適合 analyst、manager、MSSP 與 client-facing reporting。"],
    integration: "整合能力",
    integrationItems: ["Splunk-friendly", "ELK-friendly", "Generic SIEM export", "Offline-first deployment", "適合內部環境 / 客戶現場 / SOC handoff"],
    target: "適用對象",
    targetItems: ["MSSP", "SOC 團隊", "Incident Response 團隊", "Firewall / Network Security 團隊", "企業內部資安團隊"],
    pricing: "商業模式",
    pricingDesc: "可依部署模式與團隊規模調整，以下為方案 placeholder。",
    plans: [
      ["Internal Edition", "適用企業內部資安團隊，強化日常事件調查與管理報告產出。", ["FortiGate log 分析", "Keyword Timeline", "基本 Dashboard"]],
      ["Professional Edition", "給進階 SOC / IR 團隊，支援更完整 investigation 與交付流程。", ["Attack Story", "SIEM-friendly Export", "Case Notes / Handoff"]],
      ["Enterprise / MSSP Edition", "面向 MSSP 與大型企業，支援多案場、多客戶與標準化報告需求。", ["MITRE Mapping", "Dual View Reporting", "部署與合作整合支援"]],
    ],
    contact: {
      title: "聯絡我們",
      desc: "需要產品示範、導入評估、客戶現場部署或 MSSP 合作方案，歡迎直接聯絡。",
      demoBtn: "申請 Demo",
      partnerBtn: "洽詢部署與合作",
    },
    footerLine: "Built for security teams who need investigation speed and reporting clarity.",
  },
  en: {
    htmlLang: "en",
    pageTitle: "FortiTrace IR - FortiGate DFIR Investigation Platform",
    navContact: "Contact",
    navDemo: "Request Demo",
    heroTag: "DFIR / Incident Response for FortiGate",
    heroTitle: "FortiTrace IR",
    heroSubtitle: "Turn FortiGate logs into investigation stories and executive-ready reporting.",
    heroDesc:
      "Built for security teams to reconstruct attack timelines, keyword timelines, and attack stories quickly. Export management dashboards, technical details, and SIEM-friendly data in one workflow.",
    ctaDemo: "Request Demo",
    ctaContact: "Contact Us",
    trustBadges: ["FortiGate-focused workflow", "Analyst + Executive dual view", "Offline-first deployment", "SOC handoff friendly"],
    what: {
      kicker: "What It Is",
      title: "Not just a parser, not a SIEM replacement - it closes the investigation-to-delivery gap",
      desc: "FortiTrace IR transforms raw logs into keyword attack stories and readable timelines, then outputs management-ready dashboards, SIEM-friendly exports, and case handoff artifacts.",
      points: [
        "Built for cyber security firms, MSSP/SOC teams, IR teams, and enterprise security groups.",
        "More context than pure search: from keyword trace to full attack narrative.",
        "More deliverable than raw firewall events: report clearly to managers, clients, and SOC.",
      ],
    },
    featuresTitle: "Key Features",
    features: [
      ["Keyword Attack Story", "Convert scattered events into a readable attack narrative with clear turning points."],
      ["Keyword Timeline", "Track suspicious keywords over time from IOC to correlated behavior."],
      ["Management Dashboard", "Summarize status, risk hotspots, and progress for faster decision-making."],
      ["SIEM-friendly Export", "Export structured data for smooth integration with Splunk, ELK, and SIEM workflows."],
      ["Case Notes / Handoff", "Preserve analyst notes and evidence context for consistent SOC handoff."],
      ["Massive Log Triage", "Quickly filter large FortiGate logs and focus on high-risk events."],
      ["MITRE Mapping", "Map findings to MITRE ATT&CK for standardized response reporting."],
      ["Executive / Technical Dual View", "Switch between technical depth and executive readability from the same dataset."],
    ],
    ui: {
      kicker: "UI Showcase",
      title: "Interface Showcase",
      desc: "These screenshots present the FortiGate Incident Workbench GUI for product introduction.",
      items: [
        ["Main Investigation Workspace", "Unified view of logs, alerts, and correlated events for first-pass triage.", "/screenshots/main-analysis.svg"],
        ["Attack Story View", "Transform key events into clear, reportable incident narratives.", "/screenshots/attack-story.svg"],
        ["Management Dashboard", "Visualize risk and response KPIs for stakeholder briefings.", "/screenshots/management-dashboard.svg"],
        ["Keyword Timeline Investigation", "Follow suspicious keywords on a timeline to reconstruct attack flow.", "/screenshots/keyword-timeline.svg"],
      ],
    },
    workflow: {
      title: "Workflow",
      steps: ["Import FortiGate logs", "Fast analysis and detection", "Build timelines and attack story", "Export dashboard / story / SIEM data", "Deliver to management / SOC / clients"],
    },
    matters: ["Faster than manual log review.", "More contextual than simple search.", "More deliverable than firewall events alone.", "Fits analyst, manager, MSSP, and client-facing reporting needs."],
    integration: "Integration",
    integrationItems: ["Splunk-friendly", "ELK-friendly", "Generic SIEM export", "Offline-first deployment", "Works for internal, on-site, and SOC handoff environments"],
    target: "Target Customers",
    targetItems: ["MSSP", "SOC teams", "Incident Response teams", "Firewall / Network Security teams", "Enterprise internal security teams"],
    pricing: "Pricing",
    pricingDesc: "Plans are placeholders and can be adjusted by deployment model and team scale.",
    plans: [
      ["Internal Edition", "For internal security teams focused on investigation speed and reporting.", ["FortiGate log analysis", "Keyword Timeline", "Core Dashboard"]],
      ["Professional Edition", "For advanced SOC/IR teams with stronger investigation and handoff needs.", ["Attack Story", "SIEM-friendly Export", "Case Notes / Handoff"]],
      ["Enterprise / MSSP Edition", "For MSSP and large enterprises across multi-case, multi-client operations.", ["MITRE Mapping", "Dual View Reporting", "Deployment & integration support"]],
    ],
    contact: {
      title: "Contact Us",
      desc: "For demo requests, deployment planning, and MSSP partnership opportunities.",
      demoBtn: "Request Demo",
      partnerBtn: "Deployment & Partnership",
    },
    footerLine: "Built for security teams who need investigation speed and reporting clarity.",
  },
};

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90 md:text-sm">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      {desc ? <p className="mt-4 text-base text-slate-300 md:text-lg">{desc}</p> : null}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("zh");
  const [lightbox, setLightbox] = useState({ open: false, src: "", title: "" });
  const t = i18n[lang];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.pageTitle;
  }, [t]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightbox((prev) => ({ ...prev, open: false }));
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.18),transparent_30%)]"></div>

      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <p className="text-lg font-semibold text-white">FortiTrace IR</p>
          <div className="flex items-center gap-3">
            <div className="flex rounded-lg border border-slate-700 p-1">
              <button
                type="button"
                onClick={() => setLang("zh")}
                className={`rounded px-2 py-1 text-xs font-medium ${lang === "zh" ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:text-white"}`}
              >
                繁中
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded px-2 py-1 text-xs font-medium ${lang === "en" ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:text-white"}`}
              >
                EN
              </button>
            </div>
            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-slate-500"
            >
              {t.navContact}
            </a>
            <a
              href="#demo"
              className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              {t.navDemo}
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="section-shell grid gap-12 pb-20 pt-20 md:grid-cols-2 md:items-center">
          <div className="fade-up">
            <p className="chip">
              {t.heroTag}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-4 text-xl font-semibold text-slate-100 md:text-3xl">
              {t.heroSubtitle}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              {t.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                id="demo"
                href="#contact"
                className="btn-primary"
              >
                {t.ctaDemo}
              </a>
              <a
                href="#contact"
                className="btn-secondary"
              >
                {t.ctaContact}
              </a>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-2 text-xs text-slate-300">
              {t.trustBadges.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-slate-800 bg-slate-900/80 px-3 py-2"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up fade-delay-1 panel-card p-5 shadow-glow glow-pulse">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
              <span>Product Interface Preview</span>
              <span>GUI Screenshot</span>
            </div>
            <button
              type="button"
              onClick={() => setLightbox({ open: true, src: "/screenshots/main-analysis.svg", title: "Main Analysis GUI" })}
              className="w-full rounded-xl"
            >
              <img
                src="/screenshots/main-analysis.svg"
                alt="FortiGate Incident Workbench main analysis GUI"
                className="h-80 w-full rounded-xl border border-slate-700 object-cover transition hover:border-cyan-400/40"
              />
            </button>
          </div>
        </section>

        <section className="section-shell">
          <SectionTitle
            kicker={t.what.kicker}
            title={t.what.title}
            desc={t.what.desc}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.what.points.map((item, idx) => (
              <div
                key={item}
                className={`fade-up panel-card p-5 text-slate-300 ${idx === 1 ? "fade-delay-1" : ""} ${idx === 2 ? "fade-delay-2" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionTitle kicker="Key Features" title={t.featuresTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {t.features.map(([title, desc], idx) => (
              <article
                key={title}
                className={`fade-up feature-card flex min-h-[190px] flex-col ${idx % 4 === 1 ? "fade-delay-1" : ""} ${idx % 4 === 2 ? "fade-delay-2" : ""} ${idx % 4 === 3 ? "fade-delay-3" : ""}`}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-lg">
                  {icons[idx]}
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionTitle
            kicker={t.ui.kicker}
            title={t.ui.title}
            desc={t.ui.desc}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.ui.items.map(([title, desc, image], idx) => (
              <figure
                key={title}
                className={`fade-up panel-card p-4 ${idx % 2 === 1 ? "fade-delay-1" : ""}`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full border border-slate-700 bg-slate-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-cyan-300">
                    {idx === 2 ? "Executive View" : idx === 1 ? "Investigation" : idx === 3 ? "Timeline" : "Technical View"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLightbox({ open: true, src: image, title })}
                  className="w-full rounded-lg"
                >
                  <img
                    src={image}
                    alt={`${title} screenshot`}
                    className="screenshot-frame h-52 w-full object-cover transition duration-300 hover:border-cyan-400/30"
                  />
                </button>
                <figcaption className="mt-4">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-slate-300">{desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionTitle kicker="Workflow" title={t.workflow.title} />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {t.workflow.steps.map((step, index) => (
              <div
                key={step}
                className="fade-up panel-card p-5 transition duration-300 hover:border-cyan-400/30"
              >
                <p className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-xs font-semibold text-cyan-300">
                  {index + 1}
                </p>
                <p className="mt-2 text-sm text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionTitle kicker="Why It Matters" title={lang === "zh" ? "為什麼值得用" : "Why It Matters"} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.matters.map((item, idx) => (
              <div
                key={item}
                className={`fade-up panel-card p-5 text-slate-200 ${idx % 2 === 1 ? "fade-delay-1" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionTitle kicker="Integration" title={t.integration} />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {t.integrationItems.map((item, idx) => (
              <div
                key={item}
                className={`fade-up panel-card p-5 text-sm font-medium text-slate-200 ${idx > 1 ? "fade-delay-1" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionTitle kicker="Target Customers" title={t.target} />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {t.targetItems.map((target, idx) => (
              <div
                key={target}
                className={`fade-up panel-card p-5 text-sm font-medium text-slate-100 ${idx > 1 ? "fade-delay-1" : ""}`}
              >
                {target}
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionTitle
            kicker="Pricing"
            title={t.pricing}
            desc={t.pricingDesc}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.plans.map(([name, summary, items], idx) => (
              <article
                key={name}
                className={`fade-up panel-card p-6 transition duration-300 hover:border-cyan-400/40 ${idx === 1 ? "fade-delay-1" : ""} ${idx === 2 ? "fade-delay-2" : ""}`}
              >
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="mt-2 text-sm text-slate-300">{summary}</p>
                <p className="mt-4 text-2xl font-bold text-cyan-300">
                  {lang === "zh" ? "請聯絡查詢" : "Contact for pricing"}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="fade-up rounded-2xl border border-cyan-300/25 bg-slate-900/70 p-8 shadow-glow">
            <SectionTitle
              kicker="Contact"
              title={t.contact.title}
              desc={lang === "zh" ? "歡迎聯絡安排示範、部署諮詢與合作洽談。" : "Contact us for demo scheduling, deployment consultation, and partnerships."}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Email</p>
                <p className="mt-2 text-lg font-semibold text-white">cwastesting2018@gmail.com</p>
              </article>
              <article className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">WhatsApp</p>
                <p className="mt-2 text-lg font-semibold text-white">+852-XXXX-XXXX</p>
              </article>
              <article className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Telegram</p>
                <p className="mt-2 text-lg font-semibold text-white">@your_handle</p>
              </article>
              <article className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Phone</p>
                <p className="mt-2 text-lg font-semibold text-white">+852-XXXX-XXXX</p>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:cwastesting2018@gmail.com"
                className="btn-primary"
              >
                {t.contact.demoBtn}
              </a>
              <a
                href="mailto:cwastesting2018@gmail.com"
                className="btn-secondary"
              >
                {t.contact.partnerBtn}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <p className="font-semibold text-slate-200">FortiTrace IR</p>
            <p className="mt-1">
              {t.footerLine}
            </p>
          </div>
          <div className="space-y-1 text-left md:text-right">
            <p>© 2026 FortiTrace IR. All rights reserved.</p>
            <p>Email: cwastesting2018@gmail.com</p>
            <p>
              <a className="text-cyan-300 hover:text-cyan-200" href="#demo">
                Demo
              </a>{" "}
              /{" "}
              <a className="text-cyan-300 hover:text-cyan-200" href="#contact">
                Contact
              </a>
            </p>
          </div>
        </div>
      </footer>

      {lightbox.open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-6"
          onClick={() => setLightbox((prev) => ({ ...prev, open: false }))}
        >
          <div className="w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-200">{lightbox.title}</p>
              <button
                type="button"
                onClick={() => setLightbox((prev) => ({ ...prev, open: false }))}
                className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:border-slate-500"
              >
                Close
              </button>
            </div>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-h-[82vh] w-full rounded-xl border border-slate-700 bg-slate-900 object-contain"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
