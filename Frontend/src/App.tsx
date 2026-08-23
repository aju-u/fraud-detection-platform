import { useState } from "react";
import { ShieldAlert, Search, FolderSearch } from "lucide-react";
import AlertsDashboard from "./pages/AlertsDashboard";
import CaseInvestigation from "./pages/CaseInvestigation";


type Screen = "home" | "screen1" | "screen2";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");

  if (screen === "screen1") return <AlertsDashboard />;
  if (screen === "screen2") return <CaseInvestigation />;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-2 justify-center">
          <ShieldAlert className="w-6 h-6 text-emerald-400" />
          <span className="text-slate-400 text-sm tracking-wide uppercase">Fraud Detection Platform</span>
        </div>
        <h1 className="text-2xl font-semibold text-slate-50 text-center mb-10">Choose a screen</h1>

        <div className="space-y-3">
          <button
            onClick={() => setScreen("screen1")}
            className="w-full flex items-center gap-4 bg-slate-900 border border-slate-800 hover:border-emerald-500/60 hover:bg-slate-900/80 rounded-xl px-5 py-4 text-left transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
              <Search className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-slate-50 font-medium">Screen 1</div>
              <div className="text-slate-400 text-sm">Alerts Dashboard</div>
            </div>
          </button>

          <button
            onClick={() => setScreen("screen2")}
            className="w-full flex items-center gap-4 bg-slate-900 border border-slate-800 hover:border-amber-500/60 hover:bg-slate-900/80 rounded-xl px-5 py-4 text-left transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
              <FolderSearch className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-slate-50 font-medium">Screen 2</div>
              <div className="text-slate-400 text-sm">Case Investigation</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function PlaceholderScreen({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <p className="text-slate-500 text-sm uppercase tracking-wide mb-2">Placeholder</p>
      <h2 className="text-slate-50 text-xl font-semibold mb-8">{title}</h2>
      <button
        onClick={onBack}
        className="text-slate-400 hover:text-slate-100 text-sm border border-slate-800 hover:border-slate-600 rounded-lg px-4 py-2 transition-colors"
      >
        ← Back to home
      </button>
    </div>
  );
}