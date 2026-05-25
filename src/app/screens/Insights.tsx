import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "../components/Logo";
import { Avatar } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { Leaf, TrendingUp, LayoutDashboard, BarChart3 } from "lucide-react";
import { formatINR, formatCompactINR } from "../utils/formatters";

export function Insights() {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState("3M");

  // Portfolio vs Nifty 50 data
  const comparisonData = Array.from({ length: 90 }, (_, i) => ({
    date: `Day ${i + 1}`,
    ethica: 100 + Math.random() * 15 + i * 0.4,
    nifty: 100 + Math.random() * 12 + i * 0.35,
  }));

  // Goal projection data
  const goalProjection = Array.from({ length: 20 }, (_, i) => ({
    month: `M${i}`,
    projected: 124500 + i * 12000,
    low: 124500 + i * 10000,
    high: 124500 + i * 14000,
  }));

  // Rebalancing events
  const rebalancingEvents = [
    {
      date: "May 24, 2026",
      trigger: "Nifty fell 8.2%",
      impact: formatINR(4200),
      isPositive: true,
    },
    {
      date: "May 18, 2026",
      trigger: "NIFTYBEES drift exceeded +5% threshold",
      impact: formatINR(2800),
      isPositive: true,
    },
    {
      date: "May 12, 2026",
      trigger: "Quarterly rebalance (scheduled)",
      impact: "₹0",
      isPositive: true,
    },
    {
      date: "Apr 30, 2026",
      trigger: "Market volatility - auto rebalance",
      impact: formatINR(1560),
      isPositive: true,
    },
  ];

  // Fund Impact Cards
  const fundScores = [
    {
      ticker: "NIFTYBEES",
      name: "Nippon India ETF Nifty BeES",
      risk: "Very High Risk",
      grade: "B+",
      impact: "Broad Nifty 50 market exposure",
      color: "#00F5A0",
    },
    {
      ticker: "MIRAE_ESG",
      name: "Mirae Asset ESG Sector Leaders ETF",
      risk: "High Risk",
      grade: "A+",
      impact: "Highest ESG-rated equity fund on NSE",
      color: "#00C2FF",
    },
    {
      ticker: "TATA_ETH",
      name: "Tata Ethical Fund",
      risk: "High Risk",
      grade: "A",
      impact: "TASIS Shariah-certified, 0% financials",
      color: "#FF9933",
    },
  ];

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
      {/* Top Navigation */}
      <div className="px-8 py-6 flex items-center justify-between border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
        <Logo />
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#8899AA',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </button>
          <button
            onClick={() => navigate("/insights")}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            style={{
              backgroundColor: 'rgba(0, 245, 160, 0.15)',
              color: '#00F5A0',
              border: '1px solid #00F5A0'
            }}
          >
            <BarChart3 className="w-4 h-4" />
            Insights
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Badge
            className="px-4 py-2 text-sm font-semibold"
            style={{
              backgroundColor: "rgba(245, 166, 35, 0.2)",
              color: "#F5A623",
              border: "1px solid #F5A623",
            }}
          >
            Paper Portfolio · NSE/BSE
          </Badge>
          <Avatar className="w-10 h-10" style={{ backgroundColor: "#1A2B3C" }}>
            <div
              className="w-full h-full flex items-center justify-center text-sm"
              style={{ color: "#00F5A0" }}
            >
              JD
            </div>
          </Avatar>
        </div>
      </div>

      <div className="px-8 pb-8">
        {/* Page Title */}
        <h1 className="text-3xl font-semibold mb-8 text-white">
          Insights & Analytics
        </h1>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column (60%) */}
          <div className="col-span-2 space-y-6">
            {/* Portfolio vs Nifty 50 */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "#1A2B3C",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  My Portfolio vs Nifty 50
                </h3>
                <Tabs value={timeRange} onValueChange={setTimeRange}>
                  <TabsList
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {["1M", "3M", "6M", "1Y"].map((range) => (
                      <TabsTrigger
                        key={range}
                        value={range}
                        className="text-xs"
                        style={{
                          color: timeRange === range ? "#00F5A0" : "#8899AA",
                        }}
                      >
                        {range}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={comparisonData}>
                    <defs>
                      <linearGradient id="colorEthica" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00F5A0" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#00F5A0" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" hide />
                    <YAxis
                      domain={["dataMin - 5", "dataMax + 5"]}
                      tick={{ fill: "#8899AA", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1A2B3C",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                        color: "#FFF",
                      }}
                      formatter={(value: number) => [`${value.toFixed(2)}`, ""]}
                    />
                    <Area
                      type="monotone"
                      dataKey="ethica"
                      stroke="#00F5A0"
                      strokeWidth={2}
                      fill="url(#colorEthica)"
                      name="EthicaInvest"
                    />
                    <Line
                      type="monotone"
                      dataKey="nifty"
                      stroke="#8899AA"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                      name="Nifty 50"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-6 mt-4 justify-center">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#00F5A0" }}
                  />
                  <span className="text-sm text-gray-400">EthicaInvest</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-1 rounded"
                    style={{ backgroundColor: "#8899AA" }}
                  />
                  <span className="text-sm text-gray-400">Nifty 50</span>
                </div>
              </div>
            </div>

            {/* Rebalancing Events */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "#1A2B3C",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">
                Rebalancing Events
              </h3>
              <div className="space-y-6">
                {rebalancingEvents.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: event.isPositive ? "#00F5A0" : "#FF4D4D",
                        }}
                      />
                      {idx < rebalancingEvents.length - 1 && (
                        <div
                          className="w-0.5 h-12 mt-2"
                          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-start justify-between mb-1">
                        <div className="text-sm text-gray-400">{event.date}</div>
                        <div
                          className="text-sm font-semibold"
                          style={{
                            color: event.isPositive ? "#00F5A0" : "#FF4D4D",
                          }}
                        >
                          {event.impact}
                        </div>
                      </div>
                      <div className="text-sm text-white">{event.trigger}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (40%) */}
          <div className="space-y-6">
            {/* Goal Projection */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "#1A2B3C",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5" style={{ color: "#00F5A0" }} />
                <h3 className="text-lg font-semibold text-white">
                  Goal Projection
                </h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={goalProjection}>
                    <defs>
                      <linearGradient id="colorProjection" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00F5A0" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#00F5A0" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" hide />
                    <YAxis hide domain={["dataMin", "dataMax"]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1A2B3C",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                        color: "#FFF",
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "Projected"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="high"
                      stroke="none"
                      fill="rgba(0, 245, 160, 0.1)"
                      name="High"
                    />
                    <Area
                      type="monotone"
                      dataKey="low"
                      stroke="none"
                      fill="#0D1B2A"
                      name="Low"
                    />
                    <Line
                      type="monotone"
                      dataKey="projected"
                      stroke="#00F5A0"
                      strokeWidth={2}
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm text-gray-400 mb-1">Target: {formatCompactINR(360000)}</div>
                <div className="text-xs" style={{ color: "#00F5A0" }}>
                  At current SIP of ₹5,000/month
                </div>
              </div>
            </div>

            {/* Fund Impact Cards */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "#1A2B3C",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5" style={{ color: "#00F5A0" }} />
                <h3 className="text-lg font-semibold text-white">
                  Fund Impact Cards
                </h3>
              </div>
              <div className="space-y-3">
                {fundScores.map((fund) => (
                  <div
                    key={fund.ticker}
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold text-white mb-1 text-sm">
                          {fund.ticker}
                        </div>
                        <div className="text-xs text-gray-400 mb-1">{fund.name}</div>
                        <div className="text-xs" style={{ color: '#F5A623' }}>{fund.risk}</div>
                      </div>
                      <div
                        className="px-3 py-1 rounded-full font-bold text-sm"
                        style={{
                          backgroundColor:
                            fund.grade === "A+" || fund.grade === "A"
                              ? "rgba(0, 245, 160, 0.2)"
                              : "rgba(245, 166, 35, 0.2)",
                          color: fund.color,
                        }}
                      >
                        {fund.grade}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {fund.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
