import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ChevronDown, ChevronRight } from "lucide-react";
import { formatINR } from "../utils/formatters";

interface WhyThisTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhyThisTradeModal({ isOpen, onClose }: WhyThisTradeModalProps) {
  const [showPayload, setShowPayload] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-3xl p-8"
        style={{
          backgroundColor: "#1A2B3C",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-white mb-2">
            Why did this trade happen?
          </DialogTitle>
          <p className="text-sm text-gray-400">Plain-English explanation</p>
        </DialogHeader>

        {/* What we sold / bought */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* What we sold */}
          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: "rgba(255, 77, 77, 0.08)",
              borderLeft: "3px solid #FF4D4D",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-wide text-gray-400">
                What we sold
              </span>
            </div>
            <div className="mb-3">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xl font-semibold text-white">NIFTYBEES</span>
                <span className="text-sm" style={{ color: "#FF4D4D" }}>
                  {formatINR(18400)}
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-1">
                Target 40% → Actual 57.4%
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              NIFTYBEES outpaced other holdings, creating a 17.4% drift from target.
            </p>
          </div>

          {/* What we bought */}
          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: "rgba(0, 245, 160, 0.08)",
              borderLeft: "3px solid #00F5A0",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-wide text-gray-400">
                What we bought
              </span>
            </div>
            <div className="mb-3">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xl font-semibold text-white">Tata Ethical</span>
                <span className="text-sm" style={{ color: "#00F5A0" }}>
                  {formatINR(9200)}
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-1">
                Target 30% → Actual 22.6%
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Buying Tata Ethical restores your Hybrid Shariah balance.
            </p>
          </div>
        </div>

        {/* Raw API Payload */}
        <div className="mt-6">
          <button
            onClick={() => setShowPayload(!showPayload)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-3"
          >
            {showPayload ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            <span className="uppercase tracking-wide">Raw API Payload</span>
          </button>
          {showPayload && (
            <div
              className="p-4 rounded-lg font-mono text-xs overflow-x-auto"
              style={{
                backgroundColor: "#0A0F1A",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <pre className="text-gray-300">
                {`{
  "tradingsymbol": "NIFTYBEES",
  "exchange": "NSE",
  "transaction_type": "SELL",
  "order_type": "MARKET",
  "quantity": 184,
  "product": "CNC"
}

{
  "tradingsymbol": "TATAETHICAL",
  "exchange": "BSE",
  "transaction_type": "BUY",
  "order_type": "MARKET",
  "quantity": 92,
  "product": "CNC"
}`}
              </pre>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-8">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-6 rounded-full font-semibold transition-all"
            style={{
              backgroundColor: "#00F5A0",
              color: "#0D1B2A",
            }}
          >
            Got it
          </button>
          <button
            className="flex-1 py-3 px-6 rounded-full font-semibold transition-all"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#FFFFFF",
            }}
          >
            View all trades →
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
