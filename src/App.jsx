import { useState } from 'react'

function App(){
  return(
    <div className='h-screen flex items-start justify-center bg-gray-200 p-4'>
      <div className='w-screen p-5'>
        <h1 className='text-3xl font-bold text-start text-blue-800'>
          Budget Tracker</h1>

          {/*other budget summary section*/}
          <div className='bg-fuchsia-100 p-4 justify-center rounded shadow m-4'>
            <h2 className='text-xl font-sans-semibold'>Total Budget:$1,000</h2>
            <p>Remaining amt: $8000 | Spent amt: $2000</p>
          </div>

          {/*Expense list*/}
          <div className='bg-white p-4 rounded shadow m-4'>
            <h2 className='font-extrabold text-2xl p-2'>Expenses</h2>
            <ul className='space-y-2'>
              <li className='flex justify-between'>
                <span>Groceries</span>
                <span>$120</span>
              </li>
              <li className='flex justify-between'>
                <span>Investments</span>
                <span>$120</span>
              </li>
              <li className='flex justify-between'>
                <span>Subscription/Rent</span>
                <span>$120</span>
              </li>
              <li className='flex justify-between'>
                <span>Misceleneous</span>
                <span>$120</span>
              </li>
            </ul>
          </div>

          {/*expense form*/}
           <div className='bg-gray-100 p-4 m-4 rounded shadow'>
            <h2 className='text-xl font-extrabold'>Add Expense</h2>
            <form className='space-y-2'>
              <input type='text' placeholder='Expense name' className='w-full border rounded p-2'></input>
              <input type='number' placeholder='Expense amount' className='w-full border rounded p-2'></input>
              <button className='bg-blue-800 text-white p-2 rounded hover:bg-fuchsia-100 hover:text-blue-800'>Add Expense</button>

            </form>
           </div>
      </div>
    </div>
  )
}

export default App
