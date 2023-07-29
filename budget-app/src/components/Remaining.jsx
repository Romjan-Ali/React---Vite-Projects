import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Remaining component
function Remaining() {
  // Access the 'budget' and 'expenses' arrays from the AppContext using 'useContext'
  const { budget, expenses } = useContext(AppContext);

  // Calculate the total expenses using 'reduce'
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  // Determine the alert type based on whether expenses exceed the budget
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  // Rendering the remaining budget or overspent amount in an alert component
  return (
    <div className={`alert ${alertType} p-4`}>
      <span>
        {totalExpenses > budget
          ? `Overspent: $${totalExpenses - budget}`
          : `Remaining: $${budget - totalExpenses}`}
      </span>
    </div>
  );
};

export default Remaining;
