import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// ExpenseTotal component
const ExpenseTotal = () => {
  // Access the 'expenses' array from the AppContext using 'useContext'
  const { expenses } = useContext(AppContext);

  // Calculate the total expense using 'reduce'
  const total = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  // Rendering the total expense in an alert component
  return (
    <div className='alert alert-primary p-4'>
      <span>Total Expense: ${total}</span>
    </div>
  );
}

export default ExpenseTotal;
