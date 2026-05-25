import { useEffect, useRef } from "react";

interface LogEntry {
  timestamp: string;
  message: string;
  type: "success" | "warning" | "error" | "info";
}

interface RebalancingLogProps {
  entries: LogEntry[];
  isLive?: boolean;
}

export function RebalancingLog({ entries, isLive = false }: RebalancingLogProps) {
  const logEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [entries]);
  
  const getIcon = (type: string) => {
    switch (type) {
      case "success": return "✓";
      case "warning": return "⚠";
      case "error": return "🔴";
      case "info": return "⚡";
      default: return "•";
    }
  };
  
  const getColor = (type: string) => {
    switch (type) {
      case "success": return "#00F5A0";
      case "warning": return "#F5A623";
      case "error": return "#FF4757";
      case "info": return "#00C2FF";
      default: return "#FFFFFF";
    }
  };
  
  return (
    <div 
      className="p-4 rounded-xl font-mono text-sm overflow-y-auto"
      style={{
        backgroundColor: '#0D1B2A',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        maxHeight: '240px'
      }}
    >
      {entries.map((entry, index) => (
        <div 
          key={index} 
          className="mb-1 flex gap-2"
          style={{ 
            color: getColor(entry.type),
            opacity: isLive && index === entries.length - 1 ? 1 : 0.8
          }}
        >
          <span className="text-gray-500">[{entry.timestamp}]</span>
          <span>{getIcon(entry.type)}</span>
          <span className="flex-1">{entry.message}</span>
        </div>
      ))}
      {isLive && entries.length > 0 && (
        <div className="inline-block w-2 h-4 ml-1 animate-pulse" style={{ backgroundColor: '#00F5A0' }} />
      )}
      <div ref={logEndRef} />
    </div>
  );
}
