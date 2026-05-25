import { Leaf, TrendingUp } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Leaf className="w-6 h-6" style={{ color: '#00F5A0' }} />
        <TrendingUp 
          className="w-3 h-3 absolute -bottom-0.5 -right-0.5" 
          style={{ color: '#00C2FF' }} 
        />
      </div>
      <span className="text-xl font-semibold tracking-tight text-white">
        EthicaInvest
      </span>
    </div>
  );
}
