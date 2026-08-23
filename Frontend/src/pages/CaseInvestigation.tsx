export default function CaseInvestigation({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-slate-950 p-6 text-slate-50">

      <button
        onClick={onBack}
        className="text-slate-400 hover:text-slate-100 text-sm border border-slate-800 hover:border-slate-600 rounded-lg px-4 py-2 mb-6 transition-colors"
      >

        Back to home

      </button>

      <h1 className="text-xl font-semibold mb-6">Case Investigation</h1>
      {/* TODO: transaction details, explanation panel, notes, resolve buttons */}
    </div>
  );
}


