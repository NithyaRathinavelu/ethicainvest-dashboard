import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  changePercent?: string;
  isPositive?: boolean;
  trend?: "up" | "down" | "neutral";
}

export function StatCard({ label, value, change, changePercent, isPositive = true, trend }: StatCardProps) {
  const color = isPositive ? '#00F5A0' : '#FF4757';
  
  return (
    <div 
      className="p-6 rounded-xl"
      style={{
        backgroundColor: '#1A2B3C',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="text-sm text-gray-400 mb-2">{label}</div>
      <div className="text-3xl font-semibold mb-1" style={{ color }}>
        {value}
      </div>
      {(change || changePercent) && (
        <div className="flex items-center gap-1 text-sm" style={{ color }}>
          {trend === "up" && <ArrowUp className="w-4 h-4" />}
          {trend === "down" && <ArrowDown className="w-4 h-4" />}
          <span>{change}</span>
          {changePercent && <span>/ {changePercent}</span>}
        </div>
      )}
    </div>
  );
}
