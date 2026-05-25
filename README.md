
  # EthicaInvest Fintech Dashboard

A full-stack fintech dashboard application showcasing ethical and sustainable investment options. Built with React, TypeScript, Tailwind CSS, and Express.js.

**Original Design**: https://www.figma.com/design/ZPPDAKbdp1P0H0vaGz3Va7/EthicaInvest-Fintech-Dashboard

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Running the Application

**Terminal 1 - Frontend (Port 5173):**
```bash
npm run dev
```

**Terminal 2 - Backend (Port 7777):**
```bash
cd backend
npm run dev
```

Visit: http://localhost:5173/

## 📊 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Additional**: Material-UI, Emotion, Recharts

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: Mock data (ready for SQLite integration)

### Testing & Deployment
- **E2E Testing**: Playwright
- **Version Control**: Git

## 📁 Project Structure

```
.
├── src/                      # Frontend source
│   ├── app/
│   │   ├── components/      # React components
│   │   ├── screens/         # Page components
│   │   ├── layouts/         # Layout components
│   │   └── utils/           # Utility functions
│   └── styles/              # Global styles
├── backend/                  # Express backend
│   ├── server.ts            # Main server file
│   └── package.json
├── tests/                    # Playwright tests
│   └── app.spec.ts
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/portfolio` | GET | Portfolio holdings and values |
| `/api/esg-metrics` | GET | ESG sustainability scores |
| `/api/transactions` | GET | Transaction history |

## 🧪 Testing

Run Playwright E2E tests:
```bash
npm run test:e2e
```

Run tests with interactive UI:
```bash
npm run test:e2e:ui
```

## 🌐 Public URLs (with localtunnel)

Create public URLs for sharing:

**Frontend:**
```bash
npx localtunnel --port 5173
```

**Backend:**
```bash
npx localtunnel --port 7777
```

## 📤 Push to GitHub

### First Time Setup

1. **Create a repository on GitHub**
   - Go to https://github.com/new
   - Name: `ethicainvest-dashboard`
   - Description: `Full-stack fintech dashboard with ethical investments`
   - Choose public or private
   - Click "Create repository"

2. **Connect to remote**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ethicainvest-dashboard.git
   git branch -M main
   git push -u origin main
   ```

### Regular Updates

```bash
# Make changes, then:
git add .
git commit -m "Your commit message"
git push origin main
```

### Common Git Commands

```bash
# Check status
git status

# View commit history
git log

# Create a new branch
git checkout -b feature/new-feature

# Merge branch
git merge feature/new-feature

# View remote
git remote -v
```

## 📝 Environment Variables

Create a `.env.local` file (if needed):
```
VITE_API_URL=http://localhost:7777
```

## 🛠️ Development Tips

- **Frontend hot reload**: Changes auto-reload at http://localhost:5173
- **Backend auto-restart**: tsx watch restarts on file changes
- **Debug frontend**: Use Chrome DevTools at localhost:5173
- **Debug backend**: Add console.log() statements, check terminal output

## 📦 Build for Production

```bash
# Build frontend
npm run build

# Build backend
cd backend && npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is based on a Figma design and is available under the MIT License.

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Express.js](https://expressjs.com)
- [Playwright Testing](https://playwright.dev)

## ✨ Features

- 📊 Dashboard with portfolio overview
- 💰 Holdings and valuation tracking
- 🌱 ESG metrics and sustainability scores
- 📈 Transaction history
- 🎯 Ethical investment recommendations
- 📱 Responsive design
- ♿ Accessible UI components
- 🧪 Comprehensive test coverage
  