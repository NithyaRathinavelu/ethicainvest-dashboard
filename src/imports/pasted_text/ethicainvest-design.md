Design a premium dark-mode fintech web application called 
"EthicaInvest" — an ethical robo-advisor. 

COLOR SYSTEM:
- Page background: #0D1B2A (deep navy)
- Card background: #1A2B3C (slightly lighter navy)
- Primary accent / gains: #00F5A0 (electric green)
- Warning / drift alerts: #F5A623 (amber)
- Danger / losses: #FF4D4D (red)
- Info / neutral: #00C2FF (teal blue)
- Text primary: #FFFFFF
- Text secondary: #8899AA
- Card borders: 1px solid rgba(255,255,255,0.07)
- Font: Space Grotesk (headers) + Inter (body)
- Vibe: Robinhood meets Bloomberg terminal — 
  data-dense, premium, trustworthy

Design these 5 screens at 1440px desktop width:

---

SCREEN 1 — ONBOARDING QUIZ

Full page centered layout, max-width 560px card.
Top: "EthicaInvest" logo (leaf + upward chart icon, 
electric green) + tagline "Invest with your values."

3-step progress pill at top of card 
(Step 1 active, 2 and 3 gray).

Step 1 — "What is your investment horizon?"
4 pill buttons in a 2x2 grid: 
"< 1 Year" / "1–3 Years" / "3–7 Years" / "7+ Years"
Selected state: electric green border + subtle green fill.

Step 2 — "How do you feel about volatility?"
Horizontal slider 1–10. Left label: "Avoid risk." 
Right label: "Embrace risk." Show current value 
as a large number (e.g. "7") above the thumb.

Step 3 — "Select your ethical filter"
3 tall toggle cards side by side:
  - "ESG" — leaf icon, "Environmentally & socially 
    screened funds"
  - "Halal" — crescent icon, "Shariah-compliant 
    equities only"
  - "Hybrid" — balance scale icon, "Best of both 
    frameworks"

Step 4 (NEW) — "Set your investment goal"
Two inputs side by side: 
  - "Target amount" — dollar input with $ prefix
  - "Target date" — month/year date picker
Below: "Projected monthly contribution needed: $142"
(calculated estimate, shown in electric green)

CTA at bottom: "Build My Portfolio →" 
(full-width, electric green button, Space Grotesk 500)

---

SCREEN 2 — MAIN DASHBOARD

Top nav bar:
- Left: EthicaInvest logo small
- Center: "Paper Portfolio" pill badge (amber outline)
- Right: Bell icon + user avatar circle

HERO ROW — 5 stat cards in a row:
1. "Portfolio Value" → $12,450.00 (large, white)
2. "Today's Return" → +$142.30 / +1.15% (green, up arrow)
3. "vs S&P 500" → Outperforming +0.43% (green)
4. "Risk Score" → 6/10 Moderate (amber semi-circle gauge)
5. "Goal Progress" (NEW) → 
   Progress bar 34% filled in green.
   "$12,450 of $36,000 · On track for Dec 2026"

MAIN AREA — 3 column layout (40% / 35% / 25%):

LEFT COLUMN:
  - Donut chart: SPUS 50% (green) / HLAL 50% (teal)
    With legend below showing ticker, name, 
    current weight, drift %
  - Holdings table (4 columns):
    Ticker | Allocation | Drift | Status
    SPUS | 50% | +2.3% | green "Aligned" pill
    HLAL | 50% | +1.8% | green "Aligned" pill

MIDDLE COLUMN:
  - 30-day P&L sparkline chart (NEW):
    Area chart, green fill below the line, 
    showing last 30 days of portfolio value.
    Hover tooltip showing date + value.
  - Below: "Rebalancing History" (NEW):
    3 timeline entries with date, action 
    (e.g. "Auto-rebalanced: SPUS oversold"), 
    and outcome ("+$42 recovered")

RIGHT COLUMN:
  - "Portfolio Health" card:
    Large circular drift meter (speedometer style).
    Needle in green zone labeled "Aligned".
    Below needle: "Last checked: 2 min ago"
  - "ESG Impact Score" card (NEW):
    Large circular badge showing "A+" in electric green.
    Subtext: "Your portfolio avoids 94% of 
    high-emission companies"
  - Quick Actions: 
    Two small buttons: "Deposit $100" (green outline) 
    + "Recurring: Weekly" (teal outline)

Bottom bar (full width, subtle):
"⚡ Simulate Market Shock" button — large, 
centered, red outline with amber glow.
Below it: Scenario pills (NEW):
"–10% Mild Dip" | "–25% Crash" | "+20% Bull Run"
Currently "–25% Crash" selected with red outline.

---

SCREEN 3 — MARKET SHOCK STATE

Same layout as Screen 2 but alert mode:

Full-width top banner (red/amber gradient edge):
"⚡ Market Shock: –25% injected · 
Rebalancing engine activated · 
Recovery in progress..."
With a subtle pulsing animation dot (amber).

Drift meter needle pointing deep into red zone 
labeled "Out of Range". 
Holdings table rows all red: 
SPUS –27.4% | HLAL –24.1%

Middle column bottom half shows live rebalancing 
terminal (NEW visual treatment):
Dark #0A0F1A background panel, monospace font.
5 log lines with timestamps and color-coded 
status icons (red for triggers, green for confirms):
[10:15:02] ⚡ Shock injected –25.00%
[10:15:03] 🔴 DRIFT: SPUS 27.4% > threshold
[10:15:04] ↑ SELL SPUS notional $1,840
[10:15:05] ✓ Alpaca confirmed — order filled
[10:15:06] ↓ BUY HLAL notional $1,840 ▌ (blinking)

Right column: NEW "Before / After Snapshot" card:
Two mini stat columns side by side:
BEFORE (red tint): Value $12,450 / SPUS 50%
AFTER (green tint): Value $13,200 / SPUS 50%
With a thin divider and "Recovery: +$750" 
in bold green at the bottom.

---

SCREEN 4 — INSIGHTS (new screen)

Page title: "Insights & Analytics"
Two-column layout (60% / 40%):

LEFT:
  - Large area chart: "Portfolio vs S&P 500"
    3 month view. Two lines: green (EthicaInvest), 
    gray dashed (S&P 500). Green area fill.
    Date range tabs: 1M / 3M / 6M / 1Y
  - Below: "Rebalancing Events" timeline:
    Vertical timeline with 4 events, each showing 
    date, trigger reason, and net impact in green/red.

RIGHT:
  - "Goal Projection" card:
    Upward curved line chart showing projected 
    portfolio growth to $36,000 goal by Dec 2026.
    Shaded confidence band around the line.
    Key milestones on the line (25%, 50%, 75%).
  - "ETF Impact Scores" (NEW):
    3 cards stacked — SPUS, HLAL, BND.
    Each shows: ticker, name, ESG letter grade 
    (A+/A/B+), and 1-line impact summary.
    Grade badges use green/teal/amber color coding.

---

SCREEN 5 — WHY THIS TRADE (modal overlay, NEW)

Modal centered on blurred dashboard bg.
Title: "Why did this trade happen?"
Subtitle: "Plain-English explanation"

Top section — two cards side by side:
  "What we sold" (red left border):
    SPUS · $1,840 · Target: 50% → Actual: 57.4%
    "SPUS grew faster than HLAL, 
    pushing it 7.4% over target weight."
  "What we bought" (green left border):
    HLAL · $1,840 · Target: 50% → Actual: 42.6%
    "Buying HLAL restores your 
    50/50 Hybrid balance."

Middle section — "Raw API Payload" 
collapsible panel (closed by default):
Dark terminal block showing JSON:
{ "symbol": "SPUS", "qty": null, 
  "notional": 1840, "side": "sell", 
  "type": "market" }

Bottom: Two buttons:
"Got it" (green, closes modal) + 
"View all trades →" (ghost button)

---

GLOBAL DESIGN NOTES:
- All stat numbers use count-up animation on load
- Cards have subtle background: #1A2B3C, 
  border: 1px solid rgba(255,255,255,0.07)
- Hover states: border brightens to rgba(0,245,160,0.3)
- All charts use electric green (#00F5A0) as primary 
  data color, teal (#00C2FF) as secondary
- Donut chart center shows total value on hover
- All badges/pills are small-caps, 11px, 
  letter-spacing 0.5px
- Mobile-responsive implied but design for 1440px first
- Navigation: Top nav only, no sidebar
- Empty/loading states: pulsing skeleton loaders 
  in #1A2B3C
- Success toasts: bottom-right, green border, 
  "Trade executed" message