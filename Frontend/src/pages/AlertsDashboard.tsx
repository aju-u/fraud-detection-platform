export default function AlertsDashboard({ onBack, }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-slate-950 p-6 text-slate-50">
      <button
        onClick={onBack}
        className="text-slate-400 hover:text-slate-100 text-sm border border-slate-800 hover:border-slate-600 rounded-lg px-4 py-2 mb-6 transition-colors"
      >
        ← Back to home
      </button>

      <h1 className="text-xl font-semibold mb-6">Alerts Dashboard</h1>
      <table id ="simple-board">
        <tbody>
          <tr id="row0">
            <th>Transaction</th>
            <th>Customer</th>
            <th>Merchant</th>
            <th>Amount</th>
            <th>Risk</th>
          </tr>
          <tr id="row1">
            <td>TXN1</td>
            <td>CUST1</td>
            <td>MERCHANT1</td>
            <td>£100</td>
            <td>High</td>
          </tr>
          <tr id="row2">
            <td>TXN2</td>
            <td>CUST2</td>
            <td>MERCHANT2</td>
            <td>£10</td>
            <td>Low</td>
          </tr>
          <tr id="row3">
            <td>TXN3</td>
            <td>CUST3</td>
            <td>MERCHANT3</td>
            <td>£70</td>
            <td>Medium</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}