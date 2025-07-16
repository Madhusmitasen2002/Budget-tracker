import { createContext, useContext, useState } from "react";
  import useLocalStorage from "../localstorage";

const BudgetContext = createContext();

export function useBudgets() {
  return useContext(BudgetContext);
}

export const BudgetProvider = ({ children }) => {


const [budgets, setBudgets] = useLocalStorage("budgets", []);
const [expenses, setExpenses] = useLocalStorage("expenses", []);


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
