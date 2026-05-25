import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "../components/Logo";
import { Progress } from "../components/ui/progress";
import { Slider } from "../components/ui/slider";
import { Input } from "../components/ui/input";
import { Leaf, Shield, Zap, IndianRupee, Calendar, TrendingUp } from "lucide-react";
import { formatINR, formatSIP, formatIndianNumber } from "../utils/formatters";

type InvestmentHorizon = "Less than 1 year" | "1–3 years" | "3–7 years" | "7+ years" | null;
type EthicalFilter = "ESG India" | "Shariah" | "Hybrid" | null;
type GoalType = "Retirement" | "Home" | "Education" | "Wealth" | null;

export function OnboardingQuiz() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [horizon, setHorizon] = useState<InvestmentHorizon>(null);
  const [sipAmount, setSipAmount] = useState([5000]);
  const [riskTolerance, setRiskTolerance] = useState([5]);
  const [ethicalFilter, setEthicalFilter] = useState<EthicalFilter>(null);
  const [goalType, setGoalType] = useState<GoalType>(null);
  const [targetAmount, setTargetAmount] = useState("360000");
  const [targetYear, setTargetYear] = useState("2026");

  const progressValue = (step / 5) * 100;

  const getSEBIRiskCategory = (score: number) => {
    if (score <= 3) return "Low to Moderate Risk";
    if (score <= 5) return "Moderate Risk";
    if (score <= 7) return "Moderately High Risk";
    return "High Risk";
  };

  const calculateRequiredSIP = () => {
    const amount = parseFloat(targetAmount) || 0;
    const year = parseInt(targetYear) || new Date().getFullYear();
    const today = new Date();
    const target = new Date(year, 11, 31);
    const monthsRemaining = Math.max(1, Math.floor((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24 * 30)));
    const monthlyRequired = Math.round(amount / monthsRemaining);
    return monthlyRequired;
  };

  const handleComplete = () => {
    navigate("/dashboard");
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{ 
        backgroundColor: '#0D1B2A',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <Logo />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold mb-3 text-white">
            Invest smarter. Invest ethically.
          </h1>
          <p className="text-gray-400">Complete these steps to get started</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-400">Step {step} of 5</span>
            <span className="text-gray-400">{Math.round(progressValue)}%</span>
          </div>
          <Progress value={progressValue} className="h-2 bg-[#1A2B3C]">
            <div 
              className="h-full transition-all duration-300"
              style={{ 
                width: `${progressValue}%`,
                backgroundColor: '#00F5A0'
              }}
            />
          </Progress>
        </div>

        {/* Step Cards */}
        <div 
          className="p-8 rounded-xl mb-6"
          style={{
            backgroundColor: '#1A2B3C',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">
                What is your investment horizon?
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {["Less than 1 year", "1–3 years", "3–7 years", "7+ years"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setHorizon(option as InvestmentHorizon);
                      setTimeout(() => setStep(2), 300);
                    }}
                    className="px-6 py-4 rounded-full transition-all duration-200 text-base"
                    style={{
                      backgroundColor: horizon === option ? '#00F5A0' : 'rgba(255, 255, 255, 0.05)',
                      color: horizon === option ? '#0D1B2A' : '#FFFFFF',
                      border: `1px solid ${horizon === option ? '#00F5A0' : 'rgba(255, 255, 255, 0.1)'}`,
                      fontWeight: horizon === option ? '600' : '400'
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">
                What is your monthly SIP capacity?
              </h2>
              <div className="px-4">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#00F5A0' }}>
                    {formatSIP(sipAmount[0])}
                  </div>
                  <div className="text-sm text-gray-400">Systematic Investment Plan</div>
                </div>
                <Slider
                  value={sipAmount}
                  onValueChange={setSipAmount}
                  max={100000}
                  min={500}
                  step={500}
                  className="mb-6"
                />
                <div className="flex justify-between text-xs text-gray-400 mb-6">
                  <span>₹500</span>
                  <span>₹1,00,000</span>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[500, 2000, 5000, 10000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSipAmount([amount])}
                      className="px-3 py-2 rounded-full text-sm transition-all"
                      style={{
                        backgroundColor: sipAmount[0] === amount ? 'rgba(0, 245, 160, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        color: sipAmount[0] === amount ? '#00F5A0' : '#FFFFFF',
                        border: `1px solid ${sipAmount[0] === amount ? '#00F5A0' : 'rgba(255, 255, 255, 0.1)'}`
                      }}
                    >
                      ₹{formatIndianNumber(amount)}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(3)}
                  className="w-full py-4 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: '#00F5A0',
                    color: '#0D1B2A',
                    fontWeight: '600'
                  }}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">
                How do you feel about market volatility?
              </h2>
              <div className="px-4">
                <Slider
                  value={riskTolerance}
                  onValueChange={setRiskTolerance}
                  max={10}
                  min={1}
                  step={1}
                  className="mb-6"
                />
                <div className="flex justify-between text-sm mb-6">
                  <span className="text-gray-400">Avoid risk</span>
                  <span className="font-semibold" style={{ color: '#00F5A0' }}>
                    {riskTolerance[0]}/10
                  </span>
                  <span className="text-gray-400">Grow fast</span>
                </div>
                <div
                  className="p-4 rounded-lg mb-6 text-center"
                  style={{
                    backgroundColor: 'rgba(245, 166, 35, 0.1)',
                    border: '1px solid rgba(245, 166, 35, 0.3)'
                  }}
                >
                  <p className="text-sm text-gray-400 mb-1">Based on your score:</p>
                  <p className="font-semibold" style={{ color: '#F5A623' }}>
                    {getSEBIRiskCategory(riskTolerance[0])} (SEBI)
                  </p>
                </div>
                <button
                  onClick={() => setStep(4)}
                  className="w-full py-4 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: '#00F5A0',
                    color: '#0D1B2A',
                    fontWeight: '600'
                  }}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Select your ethical framework
              </h2>
              <div className="space-y-4 mb-6">
                <button
                  onClick={() => setEthicalFilter("ESG India")}
                  className="w-full p-6 rounded-xl text-left transition-all duration-200 flex items-start gap-4"
                  style={{
                    backgroundColor: ethicalFilter === "ESG India" ? 'rgba(0, 245, 160, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                    border: `2px solid ${ethicalFilter === "ESG India" ? '#00F5A0' : 'rgba(255, 255, 255, 0.08)'}`,
                  }}
                >
                  <Leaf className="w-8 h-8 flex-shrink-0" style={{ color: '#00F5A0' }} />
                  <div>
                    <h3 className="font-semibold mb-1 text-white text-lg">ESG India</h3>
                    <p className="text-sm text-gray-400">
                      Funds screened for environment, social & governance by SEBI guidelines
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setEthicalFilter("Shariah")}
                  className="w-full p-6 rounded-xl text-left transition-all duration-200 flex items-start gap-4"
                  style={{
                    backgroundColor: ethicalFilter === "Shariah" ? 'rgba(0, 245, 160, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                    border: `2px solid ${ethicalFilter === "Shariah" ? '#00F5A0' : 'rgba(255, 255, 255, 0.08)'}`,
                  }}
                >
                  <Shield className="w-8 h-8 flex-shrink-0" style={{ color: '#00C2FF' }} />
                  <div>
                    <h3 className="font-semibold mb-1 text-white text-lg">Shariah</h3>
                    <p className="text-sm text-gray-400">
                      TASIS-certified Shariah-compliant Indian funds. No interest, alcohol, or tobacco exposure.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setEthicalFilter("Hybrid")}
                  className="w-full p-6 rounded-xl text-left transition-all duration-200 flex items-start gap-4"
                  style={{
                    backgroundColor: ethicalFilter === "Hybrid" ? 'rgba(0, 245, 160, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                    border: `2px solid ${ethicalFilter === "Hybrid" ? '#00F5A0' : 'rgba(255, 255, 255, 0.08)'}`,
                  }}
                >
                  <Zap className="w-8 h-8 flex-shrink-0" style={{ color: '#F5A623' }} />
                  <div>
                    <h3 className="font-semibold mb-1 text-white text-lg">Hybrid</h3>
                    <p className="text-sm text-gray-400">
                      Combines ESG + broad market exposure
                    </p>
                  </div>
                </button>
              </div>
              {ethicalFilter && (
                <button
                  onClick={() => setStep(5)}
                  className="w-full py-4 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: '#00F5A0',
                    color: '#0D1B2A',
                    fontWeight: '600'
                  }}
                >
                  Continue →
                </button>
              )}
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Set your financial goal
              </h2>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-3">Goal Type</label>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {(["Retirement", "Home", "Education", "Wealth"] as GoalType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setGoalType(type)}
                      className="px-3 py-2 rounded-full text-sm transition-all"
                      style={{
                        backgroundColor: goalType === type ? 'rgba(0, 245, 160, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        color: goalType === type ? '#00F5A0' : '#FFFFFF',
                        border: `1px solid ${goalType === type ? '#00F5A0' : 'rgba(255, 255, 255, 0.1)'}`
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Target Amount</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="number"
                      value={targetAmount}
                      onChange={(e) => setTargetAmount(e.target.value)}
                      className="pl-10 py-3 text-white border-0 focus:ring-2 focus:ring-[#00F5A0]"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Target Year</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="number"
                      value={targetYear}
                      onChange={(e) => setTargetYear(e.target.value)}
                      min="2026"
                      max="2050"
                      className="pl-10 py-3 text-white border-0 focus:ring-2 focus:ring-[#00F5A0]"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="p-4 rounded-lg mb-6 text-center"
                style={{
                  backgroundColor: 'rgba(0, 245, 160, 0.08)',
                  border: '1px solid rgba(0, 245, 160, 0.2)'
                }}
              >
                <p className="text-sm text-gray-400 mb-1">Estimated SIP needed:</p>
                <p className="text-2xl font-semibold" style={{ color: '#00F5A0' }}>
                  {formatSIP(calculateRequiredSIP())}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        {step === 5 && (
          <button
            onClick={handleComplete}
            className="w-full py-5 rounded-full transition-all duration-200 text-lg shadow-lg"
            style={{
              backgroundColor: '#00F5A0',
              color: '#0D1B2A',
              fontWeight: '600'
            }}
          >
            Build My Portfolio →
          </button>
        )}

        {/* Back Button */}
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="w-full mt-4 py-3 text-gray-400 hover:text-white transition-colors"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
