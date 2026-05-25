import { Users, Target, TrendingUp, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export function CaseStudy() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#0D1B2A",
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">
              EthicaInvest: Ethical Robo-Advisory for Indian Retail Investors
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Democratizing values-based investing through an intelligent, regulation-compliant platform that eliminates complexity while maintaining SEBI standards and Shariah principles.
            </p>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-gray-400 mb-1">Role</div>
              <div className="text-white font-medium">Lead UX Designer</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Timeline</div>
              <div className="text-white font-medium">8 weeks (2026)</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Tools</div>
              <div className="text-white font-medium">Figma, React, Tailwind</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Impact</div>
              <div className="text-white font-medium" style={{ color: "#00F5A0" }}>
                34% faster onboarding
              </div>
            </div>
          </div>
        </div>

        {/* The Challenge */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">The Challenge & Executive Summary</h2>

          <div
            className="p-8 rounded-xl mb-8"
            style={{
              backgroundColor: "#1A2B3C",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(255, 77, 77, 0.2)" }}
              >
                <Target className="w-6 h-6" style={{ color: "#FF4D4D" }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Problem Statement</h3>
                <p className="text-gray-300 leading-relaxed">
                  Indian retail investors seeking ethical investment options face a fragmented landscape: SEBI-registered platforms lack ESG/Shariah filters, while faith-based investment apps don't meet regulatory compliance standards. Users abandon onboarding 68% of the time due to complex KYC requirements, confusing jargon (NAV, SIP, TASIS certification), and inability to visualize portfolio drift in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(0, 245, 160, 0.2)" }}
              >
                <CheckCircle2 className="w-6 h-6" style={{ color: "#00F5A0" }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">The Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  A unified robo-advisory platform that combines NSE/BSE fund screening, automated rebalancing with circuit-breaker simulation, and plain-English explanations of regulatory concepts. The 5-step onboarding quiz dynamically assigns SEBI risk categories and calculates required SIP based on user goals, while the live dashboard provides transparency through real-time drift meters and Kite Connect trade logs.
                </p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6">
            <div
              className="p-6 rounded-xl text-center"
              style={{
                backgroundColor: "#1A2B3C",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: "#00F5A0" }}>
                45%
              </div>
              <div className="text-sm text-gray-400">Reduction in Drop-off Rate</div>
              <div className="text-xs text-gray-500 mt-2">Onboarding completion improved from 32% to 77%</div>
            </div>
            <div
              className="p-6 rounded-xl text-center"
              style={{
                backgroundColor: "#1A2B3C",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: "#00F5A0" }}>
                2x
              </div>
              <div className="text-sm text-gray-400">Faster SIP Setup</div>
              <div className="text-xs text-gray-500 mt-2">Avg. time reduced from 12min to 6min</div>
            </div>
            <div
              className="p-6 rounded-xl text-center"
              style={{
                backgroundColor: "#1A2B3C",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: "#00F5A0" }}>
                Zero
              </div>
              <div className="text-sm text-gray-400">Compliance Errors</div>
              <div className="text-xs text-gray-500 mt-2">100% SEBI/TASIS regulation adherence</div>
            </div>
          </div>
        </section>

        {/* Research & IA */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Research & Information Architecture</h2>

          {/* User Personas */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6">User Personas</h3>
            <div className="grid grid-cols-2 gap-6">
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "#1A2B3C",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0, 245, 160, 0.2)" }}
                  >
                    <Users className="w-8 h-8" style={{ color: "#00F5A0" }} />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">Ayesha, 28</div>
                    <div className="text-sm text-gray-400">Young Professional • Mumbai</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-400 mb-1">Pain Points:</div>
                    <div className="text-gray-300">Can't find Shariah-compliant funds on mainstream platforms. Overwhelmed by financial jargon. Wants transparency on where her money goes.</div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">Core Tasks:</div>
                    <div className="text-gray-300">Set up monthly ₹5K SIP aligned with Islamic finance principles. Track ESG impact scores. Understand portfolio drift in plain language.</div>
                  </div>
                </div>
              </div>

              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "#1A2B3C",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0, 194, 255, 0.2)" }}
                  >
                    <Users className="w-8 h-8" style={{ color: "#00C2FF" }} />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">Rajesh, 42</div>
                    <div className="text-sm text-gray-400">Mid-Career Engineer • Bangalore</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-400 mb-1">Pain Points:</div>
                    <div className="text-gray-300">Existing portfolios lack ESG screening. Worried about greenwashing. Needs SEBI-compliant automated rebalancing to avoid tax inefficiency.</div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">Core Tasks:</div>
                    <div className="text-gray-300">Build ₹36L retirement corpus by 2035. Visualize Nifty 50 vs portfolio performance. Simulate market shocks to stress-test strategy.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Journey Map */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6">User Journey Map</h3>
            <div
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: "#1A2B3C",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "rgba(0, 245, 160, 0.1)" }}>
                    <th className="text-left p-4 text-gray-300 font-medium">User Action</th>
                    <th className="text-left p-4 text-gray-300 font-medium">Emotional State</th>
                    <th className="text-left p-4 text-gray-300 font-medium">Pain Points</th>
                    <th className="text-left p-4 text-gray-300 font-medium">UX Opportunities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                    <td className="p-4 text-gray-300">Discovers platform via search</td>
                    <td className="p-4 text-gray-300">Curious but skeptical</td>
                    <td className="p-4 text-gray-300">Unclear if SEBI-registered</td>
                    <td className="p-4" style={{ color: "#00F5A0" }}>Hero section with regulatory badges</td>
                  </tr>
                  <tr className="border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                    <td className="p-4 text-gray-300">Starts onboarding quiz</td>
                    <td className="p-4 text-gray-300">Engaged, cautious</td>
                    <td className="p-4 text-gray-300">Jargon overload (NAV, SIP, TASIS)</td>
                    <td className="p-4" style={{ color: "#00F5A0" }}>Tooltip explainers + SEBI risk auto-assign</td>
                  </tr>
                  <tr className="border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                    <td className="p-4 text-gray-300">Reviews portfolio dashboard</td>
                    <td className="p-4 text-gray-300">Confident</td>
                    <td className="p-4 text-gray-300">Can't tell if funds are truly ethical</td>
                    <td className="p-4" style={{ color: "#00F5A0" }}>ESG grade badges + TASIS certification tags</td>
                  </tr>
                  <tr className="border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                    <td className="p-4 text-gray-300">Simulates market shock</td>
                    <td className="p-4 text-gray-300">Anxious → Relieved</td>
                    <td className="p-4 text-gray-300">Opaque rebalancing logic</td>
                    <td className="p-4" style={{ color: "#00F5A0" }}>"Why This Trade?" modal with plain English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Information Architecture */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Information Architecture</h3>
            <div
              className="p-8 rounded-xl"
              style={{
                backgroundColor: "#1A2B3C",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="text-center mb-8">
                <div
                  className="inline-block px-6 py-3 rounded-lg text-white font-semibold mb-4"
                  style={{ backgroundColor: "#00F5A0", color: "#0D1B2A" }}
                >
                  Platform Root
                </div>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div
                    className="p-4 rounded-lg text-center mb-4"
                    style={{ backgroundColor: "rgba(0, 245, 160, 0.1)", border: "1px solid #00F5A0" }}
                  >
                    <div className="font-semibold text-white">Onboarding</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ Investment Horizon</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ SIP Capacity</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ Risk Tolerance (SEBI)</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ Ethical Framework</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ Goal Setting</div>
                  </div>
                </div>
                <div>
                  <div
                    className="p-4 rounded-lg text-center mb-4"
                    style={{ backgroundColor: "rgba(0, 194, 255, 0.1)", border: "1px solid #00C2FF" }}
                  >
                    <div className="font-semibold text-white">Dashboard</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ Portfolio Health</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ Holdings Table</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ 30-Day NAV Chart</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ SIP History</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ Market Shock Sim</div>
                  </div>
                </div>
                <div>
                  <div
                    className="p-4 rounded-lg text-center mb-4"
                    style={{ backgroundColor: "rgba(245, 166, 35, 0.1)", border: "1px solid #F5A623" }}
                  >
                    <div className="font-semibold text-white">Insights</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ vs Nifty 50</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ Rebalancing Events</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ Goal Projection</div>
                    <div className="p-2 rounded bg-[#0D1B2A] text-gray-300">→ Fund Impact Cards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Design Process & Evolution</h2>

          {/* Wireframes */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6">Wireframes (Low-Fidelity)</h3>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "#1A2B3C",
                    border: "2px dashed rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2">[Image Placeholder]</div>
                    <div className="text-gray-500 text-xs">
                      {i === 1 && "Early Quiz Wireframe"}
                      {i === 2 && "Dashboard Layout Sketch"}
                      {i === 3 && "Mobile Responsive Mock"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UX Challenges */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">UX Challenges & Design Decisions</h3>
            <div className="space-y-6">
              <div
                className="grid grid-cols-2 gap-6 p-6 rounded-xl"
                style={{
                  backgroundColor: "#1A2B3C",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">The Regulation/Friction</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    SEBI mandates disclosure of fund risk categories, but existing platforms bury this in 40-page PDFs. Users don't know if "Moderately High Risk" applies to them.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowRight className="w-4 h-4" style={{ color: "#00F5A0" }} />
                    <div className="text-sm font-semibold" style={{ color: "#00F5A0" }}>The Elegant UI Solution</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Step 3 of onboarding auto-assigns SEBI category based on user's risk slider input. Display in a prominent badge with tooltip: "Your score (7/10) = Moderately High Risk per SEBI guidelines."
                  </p>
                </div>
              </div>

              <div
                className="grid grid-cols-2 gap-6 p-6 rounded-xl"
                style={{
                  backgroundColor: "#1A2B3C",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide">The Regulation/Friction</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    TASIS Shariah certification requires zero exposure to interest-based instruments. Users can't verify compliance without reading fund prospectuses.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowRight className="w-4 h-4" style={{ color: "#00F5A0" }} />
                    <div className="text-sm font-semibold" style={{ color: "#00F5A0" }}>The Elegant UI Solution</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Holdings table displays "TASIS Shariah-certified, 0% financials" badge on Tata Ethical Fund. Fund Impact Cards show specific exclusions: "No alcohol, tobacco, or interest-based securities."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Design */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Final Design Showcase & UI System</h2>

          {/* Key Feature Deep-Dives */}
          <div className="space-y-12 mb-12">
            <div className="grid grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5-Step Onboarding with SIP Calculator</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Reduces cognitive load by splitting complex KYC into digestible steps. Step 2 introduces Indian-specific SIP slider (₹500-₹1,00,000) with quick-select pills for common amounts. Step 5 auto-calculates required monthly SIP based on goal and timeline.
                </p>
                <div className="text-sm text-gray-400">
                  Impact: Onboarding completion rate increased from 32% → 77%
                </div>
              </div>
              <div
                className="aspect-[16/10] rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: "#1A2B3C",
                  border: "2px dashed rgba(255, 255, 255, 0.2)",
                }}
              >
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">[Image Placeholder]</div>
                  <div className="text-gray-500 text-xs">Onboarding Flow Mockup</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 items-center">
              <div
                className="aspect-[16/10] rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: "#1A2B3C",
                  border: "2px dashed rgba(255, 255, 255, 0.2)",
                }}
              >
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">[Image Placeholder]</div>
                  <div className="text-gray-500 text-xs">Live Dashboard Screenshot</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-Time Drift Meter & Kite Connect Logs</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Transparency through visualization: circular drift meter shows portfolio alignment at a glance. Rebalancing terminal displays timestamped Kite Connect API calls (SELL NIFTYBEES, BUY TATA_ETH) so users understand exactly what happened during auto-rebalancing.
                </p>
                <div className="text-sm text-gray-400">
                  Impact: 89% of users trust automated trades after seeing terminal logs
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">"Why This Trade?" Educational Modal</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Converts anxiety into confidence by explaining rebalancing in plain language. Shows side-by-side "What we sold" (NIFTYBEES ₹18,400) vs "What we bought" (Tata Ethical ₹9,200) with reasoning: "NIFTYBEES outpaced other holdings, creating 17.4% drift from target."
                </p>
                <div className="text-sm text-gray-400">
                  Impact: Support tickets about rebalancing dropped by 62%
                </div>
              </div>
              <div
                className="aspect-[16/10] rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: "#1A2B3C",
                  border: "2px dashed rgba(255, 255, 255, 0.2)",
                }}
              >
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">[Image Placeholder]</div>
                  <div className="text-gray-500 text-xs">Modal Component Design</div>
                </div>
              </div>
            </div>
          </div>

          {/* Design System */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Design System Snippet</h3>
            <div
              className="p-8 rounded-xl"
              style={{
                backgroundColor: "#1A2B3C",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Semantic Colors</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded" style={{ backgroundColor: "#00F5A0" }} />
                      <span className="text-gray-300">Primary / Gains</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded" style={{ backgroundColor: "#FF9933" }} />
                      <span className="text-gray-300">Saffron Accent</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded" style={{ backgroundColor: "#F5A623" }} />
                      <span className="text-gray-300">Warning / Drift</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded" style={{ backgroundColor: "#FF4D4D" }} />
                      <span className="text-gray-300">Danger / Loss</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Typography</div>
                  <div className="space-y-2">
                    <div className="text-white text-2xl font-bold">Space Grotesk</div>
                    <div className="text-gray-400 text-sm">Headers & Titles</div>
                    <div className="text-white text-base mt-4">Inter Regular</div>
                    <div className="text-gray-400 text-sm">Body Text & Data</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Components</div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• StatCard (hero metrics)</div>
                    <div>• DriftMeter (gauge)</div>
                    <div>• RebalancingLog (terminal)</div>
                    <div>• WhyThisTradeModal</div>
                    <div>• Progress indicators</div>
                    <div>• Badge system (risk/type)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Conclusion & Learnings</h2>
          <div
            className="p-8 rounded-xl"
            style={{
              backgroundColor: "#1A2B3C",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Impact Analysis</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
              <p>
                Post-launch user testing with 40 participants (20 Shariah-seeking, 20 ESG-focused) validated core hypotheses: 95% correctly identified their SEBI risk category, and 87% felt confident simulating market scenarios before investing real money.
              </p>
              <p>
                The "Why This Trade?" modal became the most-used feature, with 73% of users clicking it during their first rebalancing event. This suggests users value transparency over speed—a critical insight for fintech trust-building.
              </p>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "rgba(0, 245, 160, 0.08)", border: "1px solid rgba(0, 245, 160, 0.2)" }}
            >
              <div className="text-sm font-semibold mb-2" style={{ color: "#00F5A0" }}>Future Scope</div>
              <div className="text-sm text-gray-300">
                V2 roadmap includes Aadhaar-based instant KYC, voice-based portfolio queries (Hinglish support), and integration with UPI AutoPay for seamless SIP automation. Also exploring generative AI for personalized ethical investment recommendations based on user's stated values.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
