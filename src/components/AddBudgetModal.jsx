import { useRef } from "react";
import { useBudgets } from "../context/BudgetContext";

export default function AddBudgetModal({ show, handleClose }) {
  const maxRef = useRef();
  const { addBudget } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: "My Budget", // default name since we're not asking
      max: parseFloat(maxRef.current.value),
    });
    handleClose(); // close modal after adding
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Enter Budget Amount</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            ref={maxRef}
            placeholder="Enter amount"
            className="w-full border p-2 rounded"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleClose}
              className="text-gray-600 px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
