import React from 'react';

interface ProjectThumbnailProps {
  projectId: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ projectId }) => {
  switch (projectId) {
    case 'nexus':
      return (
        <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Zero-Shot TimesFM Pipeline
            </span>
            <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              FastAPI Serving
            </span>
          </div>

          {/* Diagram graphic */}
          <div className="relative z-10 my-auto py-2">
            <div className="flex items-center justify-between gap-1 text-[10px] font-medium text-slate-300">
              <div className="px-2 py-1 rounded bg-slate-800/90 border border-slate-700 text-center shadow">
                <span className="block text-[9px] text-slate-400">Input</span>
                30+ Days Sales
              </div>
              <span className="text-indigo-400 font-bold">&rarr;</span>
              <div className="px-2 py-1 rounded bg-indigo-900/60 border border-indigo-500/50 text-center text-indigo-200 shadow">
                <span className="block text-[9px] text-indigo-300">Router</span>
                Burn-in Check
              </div>
              <span className="text-indigo-400 font-bold">&rarr;</span>
              <div className="px-2 py-1 rounded bg-blue-900/60 border border-blue-500/50 text-center text-blue-200 shadow">
                <span className="block text-[9px] text-blue-300">Foundation</span>
                TimesFM
              </div>
              <span className="text-indigo-400 font-bold">&rarr;</span>
              <div className="px-2 py-1 rounded bg-emerald-900/60 border border-emerald-500/50 text-center text-emerald-200 shadow">
                <span className="block text-[9px] text-emerald-300">Forecast</span>
                PostgreSQL
              </div>
            </div>

            {/* Time series mini line graph */}
            <div className="mt-2 h-8 w-full flex items-end gap-1 px-1">
              {[25, 35, 30, 48, 42, 60, 55, 70, 68, 85, 92, 98].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end h-full">
                  <div
                    style={{ height: `${h}%` }}
                    className={`w-full rounded-t transition-all duration-300 ${
                      i >= 8 ? 'bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]' : 'bg-slate-700'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800/80 pt-1.5 font-mono">
            <span>Burn-in Latency: 0ms</span>
            <span className="text-indigo-300 font-semibold">Cold-Start Solved</span>
          </div>
        </div>
      );

    case 'stocklab':
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-blue-950/60 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Redis Caching & Fin-API
            </span>
            <span className="text-[10px] text-blue-400 font-mono">
              Flask Modular API
            </span>
          </div>

          {/* Visual Architecture */}
          <div className="relative z-10 my-auto py-2">
            <div className="flex items-center justify-around gap-2 text-[10px]">
              <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700 text-center">
                <div className="text-amber-400 font-bold">KOSPI / Market</div>
                <div className="text-[9px] text-slate-400">Financial API</div>
              </div>
              <div className="text-blue-400 font-bold">&harr;</div>
              <div className="p-2 rounded-lg bg-rose-950/50 border border-rose-600/40 text-center shadow-lg">
                <div className="text-rose-300 font-bold">Redis Cache</div>
                <div className="text-[9px] text-rose-400">High-speed Read</div>
              </div>
              <div className="text-blue-400 font-bold">&harr;</div>
              <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-600/40 text-center">
                <div className="text-emerald-300 font-bold">MariaDB</div>
                <div className="text-[9px] text-emerald-400">Indexed Storage</div>
              </div>
            </div>

            {/* Candlestick mockup */}
            <div className="mt-3 flex items-center justify-center gap-3 h-7">
              {[
                { h: 'h-4', top: true },
                { h: 'h-6', top: false },
                { h: 'h-5', top: true },
                { h: 'h-7', top: true },
                { h: 'h-6', top: false },
                { h: 'h-5', top: true }
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-0.5 h-1 bg-slate-500" />
                  <div className={`w-3 ${bar.h} rounded-xs ${bar.top ? 'bg-red-500' : 'bg-blue-500'}`} />
                  <div className="w-0.5 h-1 bg-slate-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800/80 pt-1.5 font-mono">
            <span>Query Bottleneck: Resolved</span>
            <span className="text-blue-300 font-semibold">Real-time Simulation</span>
          </div>
        </div>
      );

    case 'pearl-abyss-rag':
      return (
        <div className="w-full h-full bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
              GRU + ChromaDB RAG
            </span>
            <span className="text-[10px] text-purple-400 font-mono">
              Explainable AI (XAI)
            </span>
          </div>

          {/* Pipeline flow */}
          <div className="relative z-10 my-auto py-2">
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-1.5 rounded bg-slate-800/80 border border-slate-700">
                <span className="text-purple-300 font-bold block">News Scraping</span>
                <span className="text-[9px] text-slate-400">Dynamic/Static</span>
              </div>
              <div className="p-1.5 rounded bg-purple-900/60 border border-purple-500/50 shadow">
                <span className="text-purple-200 font-bold block">ChromaDB</span>
                <span className="text-[9px] text-purple-300">Vector Embedding</span>
              </div>
              <div className="p-1.5 rounded bg-indigo-900/60 border border-indigo-500/50 shadow">
                <span className="text-indigo-200 font-bold block">Ollama Gemma</span>
                <span className="text-[9px] text-indigo-300">Few-shot Prompt</span>
              </div>
            </div>

            <div className="mt-2 text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-purple-500/40 text-[10px] text-purple-200">
                <span className="text-emerald-400 font-semibold">GRU Time-series</span> + <span className="text-purple-300 font-semibold">RAG Report</span> &rarr; Automated Insights
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800/80 pt-1.5 font-mono">
            <span>Hallucination: 0%</span>
            <span className="text-purple-300 font-semibold">Gradio Dashboard</span>
          </div>
        </div>
      );

    case 'salary-prediction':
      return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-emerald-950/60 to-slate-900 p-4 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              XGBoost Regression
            </span>
            <span className="text-[10px] text-emerald-400 font-mono font-bold">
              R² = 0.9792
            </span>
          </div>

          <div className="relative z-10 my-auto py-2">
            <div className="space-y-1.5">
              <div className="flex items-center text-[10px]">
                <span className="w-20 text-slate-400">Linear Reg</span>
                <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-slate-500 h-full rounded-full w-[65%]" />
                </div>
                <span className="w-12 text-right text-slate-400 text-[9px]">0.65</span>
              </div>
              <div className="flex items-center text-[10px]">
                <span className="w-20 text-slate-400">Random Forest</span>
                <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full w-[88%]" />
                </div>
                <span className="w-12 text-right text-blue-300 text-[9px]">0.88</span>
              </div>
              <div className="flex items-center text-[10px]">
                <span className="w-20 font-bold text-emerald-400">XGBoost Tuned</span>
                <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full w-[98%] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </div>
                <span className="w-12 text-right font-bold text-emerald-300 text-[9px]">0.9792</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800/80 pt-1.5 font-mono">
            <span>Kaggle 250,000 Rows</span>
            <span className="text-emerald-300 font-semibold">GridSearchCV Optimized</span>
          </div>
        </div>
      );

    case 'msft-stock-prediction':
      return (
        <div className="w-full h-full bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              LSTM vs GRU Recurrent Net
            </span>
            <span className="text-[10px] text-cyan-400 font-mono">
              Sliding Window Lag
            </span>
          </div>

          <div className="relative z-10 my-auto py-2">
            <div className="flex items-center justify-center gap-3 text-[10px]">
              <div className="p-2 rounded bg-slate-800/90 border border-slate-700 text-center">
                <span className="text-slate-400 block text-[9px]">Features</span>
                <span className="font-semibold text-slate-200">OHLCV + VIX</span>
              </div>
              <span className="text-cyan-400 font-bold">&rarr;</span>
              <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500/50 text-center">
                <span className="text-cyan-300 block text-[9px]">RNN Architecture</span>
                <span className="font-semibold text-cyan-200">LSTM / GRU Layers</span>
              </div>
              <span className="text-cyan-400 font-bold">&rarr;</span>
              <div className="p-2 rounded bg-slate-800/90 border border-slate-700 text-center">
                <span className="text-slate-400 block text-[9px]">Evaluation</span>
                <span className="font-semibold text-slate-200">MSE & Residual</span>
              </div>
            </div>

            {/* Neural curve mockup */}
            <div className="mt-2 h-6 flex items-center justify-center">
              <svg className="w-full h-full text-cyan-400" viewBox="0 0 200 40" fill="none">
                <path
                  d="M0,25 Q30,5 60,20 T120,15 T160,30 T200,10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                <path
                  d="M0,28 Q30,10 60,22 T120,18 T160,28 T200,8"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800/80 pt-1.5 font-mono">
            <span>Early Stopping Applied</span>
            <span className="text-cyan-300 font-semibold">Plotly Interactive</span>
          </div>
        </div>
      );

    case 'java-crud-board':
      return (
        <div className="w-full h-full bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden select-none">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              3-Tier Layered Architecture
            </span>
            <span className="text-[10px] text-amber-400 font-mono">
              Java OOP & JDBC
            </span>
          </div>

          <div className="relative z-10 my-auto py-2">
            <div className="flex items-center justify-between gap-1 text-[10px]">
              <div className="flex-1 p-1.5 rounded bg-slate-800/90 border border-slate-700 text-center">
                <span className="text-amber-300 font-bold block">Controller</span>
                <span className="text-[9px] text-slate-400">User Input/CLI</span>
              </div>
              <span className="text-amber-400 font-bold">&rarr;</span>
              <div className="flex-1 p-1.5 rounded bg-amber-900/50 border border-amber-500/50 text-center shadow">
                <span className="text-amber-200 font-bold block">Service</span>
                <span className="text-[9px] text-amber-300">Biz Logic & Tx</span>
              </div>
              <span className="text-amber-400 font-bold">&rarr;</span>
              <div className="flex-1 p-1.5 rounded bg-slate-800/90 border border-slate-700 text-center">
                <span className="text-amber-300 font-bold block">Repository</span>
                <span className="text-[9px] text-slate-400">PreparedStatement</span>
              </div>
              <span className="text-amber-400 font-bold">&rarr;</span>
              <div className="p-1.5 rounded bg-emerald-950/60 border border-emerald-500/50 text-center">
                <span className="text-emerald-300 font-bold block">MySQL</span>
                <span className="text-[9px] text-emerald-400">Relational DB</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-800/80 pt-1.5 font-mono">
            <span>SQL Injection Prevention</span>
            <span className="text-amber-300 font-semibold">Clean Architecture</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
          Architecture Diagram
        </div>
      );
  }
};
