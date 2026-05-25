import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Logo } from "../components/Logo";
import { StatCard } from "../components/StatCard";
import { DriftMeter } from "../components/DriftMeter";
import { RebalancingLog } from "../components/RebalancingLog";
import { WhyThisTradeModal } from "../components/WhyThisTradeModal";
import { Avatar } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "motion/react";
import { TrendingUp, Leaf, BarChart3 } from "lucide-react";
import { formatINR, formatCompactINR, formatIndianNumber } from "../utils/formatters";

interface Holding {
  ticker: string;
  name: string;
  type: string;
  allocation: number;
  currentWeight: number;
  drift: number;
  color: string;
}

interface LogEntry {
  timestamp: string;
  message: string;
  type: "success" | "warning" | "error" | "info";
}

export function Dashboard() {
  const navigate = useNavigate();
  const [isShocked, setIsShocked] = useState(false);
  const [portfolioValue, setPortfolioValue] = useState(124500);
  const [todayReturn, setTodayReturn] = useState(1420);
  const [selectedScenario, setSelectedScenario] = useState<string>("-25%");
  const [beforeSnapshot, setBeforeSnapshot] = useState({ value: 124500, nifty: 40 });
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [holdings, setHoldings] = useState<Holding[]>([
    { ticker: "NIFTYBEES", name: "Nippon India ETF Nifty BeES", type: "Equity", allocation: 40, currentWeight: 42.1, drift: 2.1, color: "#00F5A0" },
    { ticker: "MIRAE_ESG", name: "Mirae Asset ESG Sector Leaders ETF", type: "ESG", allocation: 30, currentWeight: 31.4, drift: 1.4, color: "#00C2FF" },
    { ticker: "TATA_ETH", name: "Tata Ethical Fund", type: "Shariah", allocation: 30, currentWeight: 26.5, drift: -3.5, color: "#FF9933" },
  ]);
  const [logEntries, setLogEntries] = useState<LogEntry[]>([
    { timestamp: "09:42:11", message: "NIFTYBEES position evaluated — drift: 2.1%", type: "success" },
    { timestamp: "09:42:13", message: "Mirae ESG position evaluated — drift: 1.4%", type: "success" },
    { timestamp: "09:40:00", message: "Portfolio rebalanced successfully", type: "success" },
  ]);

  // 30-day NAV data
  const plData = Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    value: 110000 + Math.random() * 20000 + (i * 500),
  }));

  // SIP history
  const sipHistory = [
    { date: "15 Jan", action: "₹5,000 SIP · 4.2 units NIFTYBEES", outcome: "" },
    { date: "15 Dec", action: "₹5,000 SIP · 4.5 units Mirae ESG", outcome: "" },
    { date: "15 Nov", action: "₹5,000 SIP · 3.8 units Tata Ethical", outcome: "" },
  ];

  const maxDrift = Math.max(...holdings.map(h => Math.abs(h.drift)));
  const todayReturnPercent = ((todayReturn / portfolioValue) * 100).toFixed(2);

  const chartData = holdings.map(h => ({
    name: h.ticker,
    value: h.currentWeight,
    color: h.color,
  }));

  const COLORS = ['#00F5A0', '#00C2FF', '#FF9933'];

  const handleMarketShock = () => {
    setIsShocked(true);
    setBeforeSnapshot({ value: portfolioValue, spus: 50 });

    // Update portfolio value based on selected scenario
    const shockMultiplier = selectedScenario === "-10%" ? 0.9 : selectedScenario === "-25%" ? 0.75 : 1.2;
    const shockValue = portfolioValue * shockMultiplier;
    setPortfolioValue(shockValue);
    setTodayReturn(portfolioValue * (shockMultiplier - 1));
    
    // Update holdings with shocked drift
    const shockedHoldings = holdings.map(h => ({
      ...h,
      drift: h.ticker === "NIFTYBEES" ? -27.4 : h.ticker === "MIRAE_ESG" ? -24.1 : -22.8,
    }));
    setHoldings(shockedHoldings);

    // Simulate rebalancing log
    const newLogs: LogEntry[] = [
      ...logEntries,
      { timestamp: getCurrentTime(), message: "Shock: NSE −25.00% injected", type: "info" },
    ];
    setLogEntries(newLogs);

    setTimeout(() => {
      setLogEntries(prev => [...prev,
        { timestamp: getCurrentTime(), message: "🔴 DRIFT: NIFTYBEES 27.4% > 5% threshold", type: "error" }
      ]);
    }, 1000);

    setTimeout(() => {
      setLogEntries(prev => [...prev,
        { timestamp: getCurrentTime(), message: "↑ SELL NIFTYBEES · ₹18,400 notional", type: "warning" }
      ]);
    }, 2000);

    setTimeout(() => {
      setLogEntries(prev => [...prev,
        { timestamp: getCurrentTime(), message: "✓ Kite Connect confirmed · order_id #KT8821", type: "success" }
      ]);
    }, 3000);

    setTimeout(() => {
      setLogEntries(prev => [...prev,
        { timestamp: getCurrentTime(), message: "↓ BUY Tata Ethical · ₹9,200 ▌", type: "info" }
      ]);
    }, 4000);
  };

  const handleReset = () => {
    setIsShocked(false);
    setPortfolioValue(124500);
    setTodayReturn(1420);
    setHoldings([
      { ticker: "NIFTYBEES", name: "Nippon India ETF Nifty BeES", type: "Equity", allocation: 40, currentWeight: 42.1, drift: 2.1, color: "#00F5A0" },
      { ticker: "MIRAE_ESG", name: "Mirae Asset ESG Sector Leaders ETF", type: "ESG", allocation: 30, currentWeight: 31.4, drift: 1.4, color: "#00C2FF" },
      { ticker: "TATA_ETH", name: "Tata Ethical Fund", type: "Shariah", allocation: 30, currentWeight: 26.5, drift: -3.5, color: "#FF9933" },
    ]);
    setLogEntries([
      { timestamp: "09:42:11", message: "NIFTYBEES position evaluated — drift: 2.1%", type: "success" },
      { timestamp: "09:42:13", message: "Mirae ESG position evaluated — drift: 1.4%", type: "success" },
      { timestamp: "09:40:00", message: "Portfolio rebalanced successfully", type: "success" },
    ]);
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  };

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: '#0D1B2A',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
      {/* Alert Banner */}
      {isShocked && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full py-4 px-8 flex items-center justify-center gap-2"
          style={{ backgroundColor: '#FF4D4D' }}
        >
          <span className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
            ⚡ NSE Circuit Breaker Simulated · −25% Drop · Rebalancing Engine Triggered
          </span>
        </motion.div>
      )}

      {/* Top Navigation */}
      <div className="px-8 py-6 flex items-center justify-between border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
        <Logo />
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              backgroundColor: 'rgba(0, 245, 160, 0.15)',
              color: '#00F5A0',
              border: '1px solid #00F5A0'
            }}
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/insights")}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#8899AA',
              border: '1px solid rgba(255, 255, 255, 0.1)'
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
              backgroundColor: 'rgba(245, 166, 35, 0.2)',
              color: '#F5A623',
              border: '1px solid #F5A623'
            }}
          >
            Paper Portfolio · NSE/BSE
          </Badge>
          <Avatar className="w-10 h-10" style={{ backgroundColor: '#1A2B3C' }}>
            <div className="w-full h-full flex items-center justify-center text-sm" style={{ color: '#00F5A0' }}>
              JD
            </div>
          </Avatar>
        </div>
      </div>

      <div className="px-8 pb-8">
        {/* Hero Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <StatCard
            label="Portfolio Value"
            value={formatINR(portfolioValue)}
            isPositive={!isShocked}
          />
          <StatCard
            label="Today's Return"
            value={`${todayReturn >= 0 ? '+' : ''}${formatINR(todayReturn)}`}
            changePercent={`${todayReturn >= 0 ? '+' : ''}${todayReturnPercent}%`}
            isPositive={todayReturn >= 0}
            trend={todayReturn >= 0 ? "up" : "down"}
          />
          <StatCard
            label="vs Nifty 50"
            value="+0.43%"
            change="outperforming"
            isPositive={true}
          />
          <StatCard
            label="Risk Category"
            value="7/10"
            change="Mod. High"
            isPositive={true}
          />
          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: '#1A2B3C',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4" style={{ color: '#00F5A0' }} />
              <span className="text-xs text-gray-400 uppercase tracking-wide">Goal Progress</span>
            </div>
            <div className="mb-2">
              <Progress value={34} className="h-2 bg-[#0D1B2A]">
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    width: '34%',
                    backgroundColor: '#00F5A0'
                  }}
                />
              </Progress>
            </div>
            <div className="text-xs text-gray-400">
              {formatCompactINR(124500)} of {formatCompactINR(360000)}
            </div>
            <div className="text-xs mt-1" style={{ color: '#00F5A0' }}>
              On track for Dec 2026
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column (40%) */}
          <div className="col-span-5 space-y-6">
            {/* Donut Chart */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: '#1A2B3C',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Fund Allocation</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend
                      verticalAlign="middle"
                      align="right"
                      layout="vertical"
                      iconType="circle"
                      formatter={(value, entry: any) => (
                        <span style={{ color: '#FFFFFF', marginLeft: '8px', fontSize: '12px' }}>
                          {value} ({entry.payload.value.toFixed(1)}%)
                        </span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

          {/* Middle Column (35%) */}
          <div className="col-span-4 space-y-6">
            {/* 30-day P&L Chart */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: '#1A2B3C',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">30-Day Performance</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={plData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00F5A0" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00F5A0" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" hide />
                    <YAxis hide domain={['dataMin', 'dataMax']} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1A2B3C',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: '#FFF'
                      }}
                      formatter={(value: number) => [`$${value.toFixed(2)}`, 'Value']}
                    />
                    <Area type="monotone" dataKey="value" stroke="#00F5A0" strokeWidth={2} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* SIP History */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: '#1A2B3C',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">SIP History</h3>
              <div className="space-y-4">
                {sipHistory.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00F5A0' }} />
                    <div className="flex-1">
                      <div className="text-xs text-gray-400 mb-1">{event.date}</div>
                      <div className="text-sm text-white">{event.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Holdings Table */}
            <div
              className="p-6 rounded-xl overflow-hidden"
              style={{
                backgroundColor: '#1A2B3C',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Holdings</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                      <th className="text-left py-3 px-2 text-xs text-gray-400 font-medium">Fund Name</th>
                      <th className="text-center py-3 px-2 text-xs text-gray-400 font-medium">Type</th>
                      <th className="text-right py-3 px-2 text-xs text-gray-400 font-medium">Allocation</th>
                      <th className="text-right py-3 px-2 text-xs text-gray-400 font-medium">Drift</th>
                      <th className="text-center py-3 px-2 text-xs text-gray-400 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding) => {
                      const driftColor = Math.abs(holding.drift) > 5
                        ? '#FF4757'
                        : holding.drift > 0
                          ? '#00F5A0'
                          : '#F5A623';

                      return (
                        <tr
                          key={holding.ticker}
                          className="border-b"
                          style={{ borderColor: 'rgba(255, 255, 255, 0.04)' }}
                        >
                          <td className="py-3 px-2">
                            <div className="font-semibold text-white text-xs">{holding.ticker}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{holding.name}</div>
                          </td>
                          <td className="py-3 px-2 text-center">
                            <span
                              className="px-2 py-1 rounded text-xs"
                              style={{
                                backgroundColor: holding.type === 'Equity' ? 'rgba(0, 245, 160, 0.15)' : holding.type === 'ESG' ? 'rgba(0, 194, 255, 0.15)' : 'rgba(255, 153, 51, 0.15)',
                                color: holding.type === 'Equity' ? '#00F5A0' : holding.type === 'ESG' ? '#00C2FF' : '#FF9933'
                              }}
                            >
                              {holding.type}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right text-white font-medium text-xs">
                            {holding.allocation}%
                          </td>
                          <td
                            className="py-3 px-2 text-right font-semibold text-xs"
                            style={{ color: driftColor }}
                          >
                            {holding.drift > 0 ? '+' : ''}{holding.drift.toFixed(1)}%
                          </td>
                          <td className="py-3 px-2 text-center">
                            <span
                              className="px-2 py-0.5 rounded-full text-xs font-medium"
                              style={{
                                backgroundColor: Math.abs(holding.drift) > 5 ? 'rgba(255, 77, 77, 0.2)' : 'rgba(0, 245, 160, 0.2)',
                                color: Math.abs(holding.drift) > 5 ? '#FF4D4D' : '#00F5A0',
                              }}
                            >
                              {Math.abs(holding.drift) > 5 ? 'Alert' : 'Aligned'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column (25%) */}
          <div className="col-span-3 space-y-6">
            {/* Portfolio Health */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: '#1A2B3C',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">Portfolio Health</h3>
              <DriftMeter drift={maxDrift} isShocked={isShocked} />
            </div>

            {/* ESG Impact Score */}
            <div
              className="p-6 rounded-xl text-center"
              style={{
                backgroundColor: '#1A2B3C',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Leaf className="w-5 h-5" style={{ color: '#00F5A0' }} />
                <h3 className="text-lg font-semibold text-white">ESG Impact</h3>
              </div>
              <div
                className="w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-3"
                style={{
                  backgroundColor: 'rgba(0, 245, 160, 0.15)',
                  border: '3px solid #00F5A0'
                }}
              >
                <span className="text-4xl font-bold" style={{ color: '#00F5A0' }}>A+</span>
              </div>
              <p className="text-sm text-gray-400">
                Your portfolio avoids 94% of high-emission companies
              </p>
            </div>

            {/* Before/After Snapshot (only show when shocked) */}
            {isShocked && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: '#1A2B3C',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <h3 className="text-lg font-semibold mb-4 text-white text-center">Before / After</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(255, 77, 77, 0.1)' }}
                  >
                    <div className="text-xs text-gray-400 mb-2">BEFORE</div>
                    <div className="text-sm text-white mb-1">
                      {formatINR(beforeSnapshot.value)}
                    </div>
                    <div className="text-xs text-gray-400">NIFTYBEES 57.4%</div>
                  </div>
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(0, 245, 160, 0.1)' }}
                  >
                    <div className="text-xs text-gray-400 mb-2">AFTER</div>
                    <div className="text-sm text-white mb-1">
                      {formatINR(portfolioValue)}
                    </div>
                    <div className="text-xs text-gray-400">NIFTYBEES 40%</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="text-sm font-semibold" style={{ color: todayReturn > 0 ? '#00F5A0' : '#FF4D4D' }}>
                    Recovery: {todayReturn > 0 ? '+' : ''}{formatINR(Math.abs(todayReturn))} realigned
                  </span>
                </div>
              </motion.div>
            )}

            {/* Rebalancing Log */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: '#0A0F1A',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Rebalancing Log</h3>
                <button
                  onClick={() => setShowTradeModal(true)}
                  className="text-xs px-3 py-1 rounded-full transition-all"
                  style={{
                    backgroundColor: 'rgba(0, 245, 160, 0.1)',
                    color: '#00F5A0',
                    border: '1px solid rgba(0, 245, 160, 0.3)'
                  }}
                >
                  Why?
                </button>
              </div>
              <RebalancingLog entries={logEntries} isLive={isShocked} />
            </div>

            {/* Quick Actions */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: '#1A2B3C',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <h3 className="text-sm font-semibold mb-3 text-white uppercase tracking-wide">Quick Actions</h3>
              <div className="space-y-2">
                <button
                  className="w-full py-2 px-3 rounded-lg text-sm transition-all"
                  style={{
                    backgroundColor: 'rgba(0, 245, 160, 0.1)',
                    border: '1px solid #00F5A0',
                    color: '#00F5A0'
                  }}
                >
                  Invest ₹5,000 now
                </button>
                <button
                  className="w-full py-2 px-3 rounded-lg text-sm transition-all"
                  style={{
                    backgroundColor: 'rgba(0, 194, 255, 0.1)',
                    border: '1px solid #00C2FF',
                    color: '#00C2FF'
                  }}
                >
                  Edit SIP schedule
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="mt-8 text-center">
          {!isShocked ? (
            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Select Scenario:</p>
                <div className="flex items-center justify-center gap-3">
                  {["-10%", "-25%", "+15%"].map((scenario) => (
                    <button
                      key={scenario}
                      onClick={() => setSelectedScenario(scenario)}
                      className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                      style={{
                        backgroundColor: selectedScenario === scenario
                          ? scenario.startsWith("+") ? 'rgba(0, 245, 160, 0.2)' : 'rgba(255, 77, 77, 0.2)'
                          : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${selectedScenario === scenario
                          ? scenario.startsWith("+") ? '#00F5A0' : '#FF4D4D'
                          : 'rgba(255, 255, 255, 0.1)'}`,
                        color: selectedScenario === scenario
                          ? scenario.startsWith("+") ? '#00F5A0' : '#FF4D4D'
                          : '#FFFFFF'
                      }}
                    >
                      {scenario === "-10%" && "−10% Correction"}
                      {scenario === "-25%" && "−25% Crash"}
                      {scenario === "+15%" && "Nifty +15% Rally"}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-4 text-center">
                Simulates NSE circuit-breaker scenario
              </p>
              <button
                onClick={handleMarketShock}
                className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: selectedScenario.startsWith("+") ? '#00F5A0' : '#FF4757',
                  color: selectedScenario.startsWith("+") ? '#0D1B2A' : '#FFFFFF'
                }}
              >
                ⚡ Simulate Market Shock
              </button>
              <p className="mt-3 text-sm text-gray-400">
                Demo Mode — triggers rebalancing engine
              </p>
            </div>
          ) : (
            <button
              onClick={handleReset}
              className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg animate-pulse"
              style={{
                backgroundColor: '#00F5A0',
                color: '#0D1B2A'
              }}
            >
              ✓ Recovery Complete — Reset Demo
            </button>
          )}
        </div>
      </div>

      {/* Why This Trade Modal */}
      <WhyThisTradeModal isOpen={showTradeModal} onClose={() => setShowTradeModal(false)} />
    </div>
  );
}
