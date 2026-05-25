import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 7777;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'EthicaInvest backend is running' });
});

// Sample portfolio endpoint
app.get('/api/portfolio', (req, res) => {
  res.json({
    totalValue: 250000,
    dailyChange: 2500,
    dailyChangePercent: 1.02,
    holdings: [
      {
        id: 1,
        name: 'Sustainable Energy Fund',
        symbol: 'SENRG',
        value: 75000,
        shares: 150,
        price: 500,
        change: 2.5
      },
      {
        id: 2,
        name: 'Green Tech Corp',
        symbol: 'GTEC',
        value: 60000,
        shares: 400,
        price: 150,
        change: 1.8
      },
      {
        id: 3,
        name: 'Ethical Innovation ETF',
        symbol: 'EIEI',
        value: 55000,
        shares: 1000,
        price: 55,
        change: 0.5
      },
      {
        id: 4,
        name: 'Clean Water Initiative',
        symbol: 'CWTR',
        value: 45000,
        shares: 300,
        price: 150,
        change: -0.3
      },
      {
        id: 5,
        name: 'Renewable Resources Corp',
        symbol: 'RRSC',
        value: 15000,
        shares: 250,
        price: 60,
        change: 0.8
      }
    ]
  });
});

// Sample ESG metrics endpoint
app.get('/api/esg-metrics', (req, res) => {
  res.json({
    environmental: 8.5,
    social: 8.2,
    governance: 7.9,
    overall: 8.2,
    benchmarkComparison: 1.2
  });
});

// Sample transactions endpoint
app.get('/api/transactions', (req, res) => {
  res.json({
    transactions: [
      {
        id: 1,
        date: '2026-05-20',
        type: 'buy',
        symbol: 'SENRG',
        shares: 10,
        price: 495,
        total: 4950
      },
      {
        id: 2,
        date: '2026-05-18',
        type: 'sell',
        symbol: 'GTEC',
        shares: 5,
        price: 148,
        total: 740
      },
      {
        id: 3,
        date: '2026-05-15',
        type: 'buy',
        symbol: 'CWTR',
        shares: 20,
        price: 149,
        total: 2980
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`✅  EthicaInvest backend running → http://localhost:${PORT}`);
});
