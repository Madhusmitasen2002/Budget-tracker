import { useState } from "react";
import BudgetCard from "./components/Budget";
import AddBudgetModal from "./components/AddBudgetModal";
import { useBudgets } from "./context/BudgetContext";


function App(){
    const [showModal, setShowModal] = useState(false);
    const { budgets, expenses, addExpense} = useBudgets();
    const totalBudget = budgets.reduce((total, b) => total + b.max, 0);
    const spentAmount = expenses.reduce((total, exp) => total + exp.amount, 0);
    const remainingAmount = totalBudget - spentAmount;
  return(
    <div className='h-screen flex items-start justify-center bg-gray-200 p-4'>
      <div className='w-screen p-5'>
        <h1 className='text-3xl font-bold text-start text-blue-800'>
          Budget Tracker</h1>
        <button
  onClick={() => setShowModal(true)}
  className='bg-blue-800 text-white px-4 py-2 rounded hover:bg-fuchsia-100 hover:text-blue-800 my-4'
>
  + Add Budget
</button>

          {/*other budget summary section*/}
          <div className='bg-fuchsia-100 p-4 justify-center rounded shadow m-4'>
              <h2 className='text-xl font-sans-semibold'>
                Total Budget: ₹{totalBudget}</h2>
                <p>Remaining amt: ₹{remainingAmount} | Spent amt: ₹{spentAmount}</p>
          </div>
          {/*Expense list*/}
          <ul className='space-y-2'>
                {expenses.map((exp) => (
                  <li key={exp.id} className='flex justify-between'>
                    <span>{exp.name}</span>
                    <span>₹{exp.amount}</span>
                  </li>))}
          </ul>

          {/*expense form*/}
           <div className='bg-gray-100 p-4 m-4 rounded shadow'>
            <h2 className='text-xl font-extrabold'>Add Expense</h2>
            <form
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const amount = parseFloat(form.amount.value);

    if (!name || !amount) return;

    addExpense({ name, amount });
    form.reset(); // clear form
  }}
  className='space-y-2'
>
  <input
    name="name"
    type='text'
    placeholder='Expense name'
    className='w-full border rounded p-2'
    required
  />
  <input
    name="amount"
    type='number'
    placeholder='Expense amount'
    className='w-full border rounded p-2'
    required
  />
  <button
    type='submit'
    className='bg-blue-800 text-white p-2 rounded hover:bg-fuchsia-100 hover:text-blue-800'
  >
    Add Expense
  </button>
</form>
           </div>
           <AddBudgetModal show={showModal} handleClose={() => setShowModal(false)} />
      </div>
    </div>
    
  )
}

export default App
