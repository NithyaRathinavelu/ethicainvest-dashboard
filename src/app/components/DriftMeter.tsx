interface DriftMeterProps {
  drift: number;
  isShocked?: boolean;
}

export function DriftMeter({ drift, isShocked = false }: DriftMeterProps) {
  // Calculate needle angle: -90deg (left/green) to +90deg (right/red)
  // drift ranges from 0 (aligned) to 30+ (out of range)
  const maxDrift = 30;
  const angle = Math.min((drift / maxDrift) * 180 - 90, 90);
  
  const getStatus = () => {
    if (drift < 5) return { text: "Aligned", color: "#00F5A0" };
    if (drift < 15) return { text: "Minor Drift", color: "#F5A623" };
    return { text: "Out of Range", color: "#FF4757" };
  };
  
  const status = getStatus();
  
  return (
    <div className="flex flex-col items-center py-6">
      <div className="relative w-64 h-32 mb-4">
        {/* Meter Arc Background */}
        <svg className="w-full h-full" viewBox="0 0 200 100">
          {/* Green Zone */}
          <path
            d="M 20 90 A 80 80 0 0 1 60 25"
            fill="none"
            stroke="#00F5A0"
            strokeWidth="12"
            opacity="0.3"
          />
          {/* Yellow Zone */}
          <path
            d="M 60 25 A 80 80 0 0 1 100 10"
            fill="none"
            stroke="#F5A623"
            strokeWidth="12"
            opacity="0.3"
          />
          {/* Red Zone */}
          <path
            d="M 100 10 A 80 80 0 0 1 180 90"
            fill="none"
            stroke="#FF4757"
            strokeWidth="12"
            opacity="0.3"
          />
          
          {/* Center Pivot */}
          <circle cx="100" cy="90" r="6" fill="#FFFFFF" />
          
          {/* Needle */}
          <line
            x1="100"
            y1="90"
            x2="100"
            y2="20"
            stroke={status.color}
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${angle} 100 90)`}
            style={{ 
              transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transformOrigin: '100px 90px'
            }}
          />
        </svg>
        
        {/* Labels */}
        <div className="absolute bottom-0 left-0 text-xs" style={{ color: '#00F5A0' }}>
          Aligned
        </div>
        <div className="absolute bottom-0 right-0 text-xs" style={{ color: '#FF4757' }}>
          Critical
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-2xl font-semibold mb-1" style={{ color: status.color }}>
          {status.text}
        </div>
        <div className="text-sm text-gray-400">
          Max Drift: {drift.toFixed(1)}%
        </div>
      </div>
    </div>
  );
}
