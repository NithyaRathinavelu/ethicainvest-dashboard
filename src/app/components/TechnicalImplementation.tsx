import { Brush, Code, CheckCircle, GitHub } from "@mui/icons-material";

const cards = [
  {
    icon: <Brush sx={{ fontSize: 28 }} />,
    iconBg: "rgba(0, 245, 160, 0.15)",
    iconColor: "#00F5A0",
    tag: "Design & Ideation",
    title: "Designed in Figma AI",
    content:
      "Fast-tracked early wireframing and responsive component slotting using AI-driven canvas generation to align cross-functional stakeholders quickly.",
  },
  {
    icon: <Code sx={{ fontSize: 28 }} />,
    iconBg: "rgba(0, 194, 255, 0.15)",
    iconColor: "#00C2FF",
    tag: "Code Engineering",
    title: "Developed with GitHub Copilot",
    content:
      "Leveraged pair-programming AI to accelerate boilerplates, manage application state hooks, and map complex UI data structures cleanly.",
  },
  {
    icon: <CheckCircle sx={{ fontSize: 28 }} />,
    iconBg: "rgba(245, 166, 35, 0.15)",
    iconColor: "#F5A623",
    tag: "Quality Assurance",
    title: "Tested with Playwright",
    content:
      "Implemented automated end-to-end (E2E) testing suites to simulate user workflows, validate role-based views, and catch edge-case regressions.",
  },
  {
    icon: <GitHub sx={{ fontSize: 28 }} />,
    iconBg: "rgba(255, 255, 255, 0.08)",
    iconColor: "#E2E8F0",
    tag: "Version Control & CI/CD",
    title: "GitHub Repository",
    content:
      "Managed through a secure git workflow with conventional commits, branch protection rules, and automated testing on every push.",
    cta: true,
  },
];

export function TechnicalImplementation() {
  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">
          Technical Implementation & Lifecycle
        </h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
          From concept to deployment — the tools, frameworks, and workflows that
          brought EthicaInvest from a Figma canvas to a production-ready full-stack
          application.
        </p>
      </div>

      {/* 4-Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border p-6 flex flex-col gap-4 transition-colors hover:border-white/20"
            style={{
              backgroundColor: "#1A2B3C",
              borderColor: "rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: card.iconBg, color: card.iconColor }}
            >
              {card.icon}
            </div>

            {/* Tag */}
            <div
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: card.iconColor }}
            >
              {card.tag}
            </div>

            {/* Title & Content */}
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-white font-semibold text-base leading-snug">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.content}</p>
            </div>

            {/* CTA for GitHub card */}
            {card.cta && (
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors hover:bg-white/10"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  color: "#E2E8F0",
                }}
              >
                <GitHub sx={{ fontSize: 16 }} />
                View GitHub Repo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
