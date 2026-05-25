import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";

export function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isOnCaseStudy = location.pathname === "/case-study";
  const activeTab = isOnCaseStudy ? "case-study" : "application";

  const handleTabChange = (tab: string) => {
    if (tab === "case-study") {
      navigate("/case-study");
    } else {
      // Navigate to onboarding if on case study, otherwise stay on current application route
      if (location.pathname === "/case-study") {
        navigate("/onboarding");
      }
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D1B2A" }}>
      {/* Global Navigation Bar */}
      <div
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "#1A2B3C",
          borderColor: "rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-8 h-16">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#00F5A0" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="#0D1B2A"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">
                EthicaInvest
              </span>
            </div>

            {/* Tab Navigation */}
            <div className="flex-1 flex items-center gap-2">
              <button
                onClick={() => handleTabChange("application")}
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all relative"
                style={{
                  backgroundColor:
                    activeTab === "application"
                      ? "rgba(0, 245, 160, 0.15)"
                      : "transparent",
                  color: activeTab === "application" ? "#00F5A0" : "#8899AA",
                }}
              >
                1. Live Application
                {activeTab === "application" && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "#00F5A0" }}
                  />
                )}
              </button>
              <button
                onClick={() => handleTabChange("case-study")}
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all relative"
                style={{
                  backgroundColor:
                    activeTab === "case-study"
                      ? "rgba(0, 245, 160, 0.15)"
                      : "transparent",
                  color: activeTab === "case-study" ? "#00F5A0" : "#8899AA",
                }}
              >
                2. UX Case Study
                {activeTab === "case-study" && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "#00F5A0" }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <Outlet />
    </div>
  );
}
