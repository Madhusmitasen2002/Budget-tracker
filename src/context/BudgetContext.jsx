import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

export function useBudgets() {
  return useContext(BudgetContext);
}

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  function addBudget({ name, max }) {
    setBudgets(prev => [...prev, { id: Date.now(), name, max }]);
  }

  function addExpense({ name, amount }) {
    setExpenses(prev => [...prev, { id: Date.now(), name, amount }]);
  }

  return (
    <BudgetContext.Provider value={{ budgets, addBudget, expenses, addExpense }}>
      {children}
    </BudgetContext.Provider>
  );
};
