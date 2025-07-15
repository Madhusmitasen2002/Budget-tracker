export default function BudgetCard({ name, amount, max, onAddExpenseClick }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg">{name}</h2>
        <span className="text-sm font-medium">
          ₹{amount} / ₹{max}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${(amount / max) * 100}%` }}
        />
      </div>
      <button
        onClick={onAddExpenseClick}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        + Add Expense
      </button>
    </div>
  );
}
