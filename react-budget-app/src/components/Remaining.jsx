import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const {expenses, budget} = useContext(AppContext);
  const expenseTotal = expenses.reduce((total, expense) => {
    return total + expense.cost
  }, 0);
  const alertType = (budget - expenseTotal) < 0 ? 'alert-danger' : 'alert-success';
  return (
    <div className={`alert ${alertType} p-4`}>
        <span>Remaining: ${budget - expenseTotal}</span>
    </div>
  )
}

export default Remaining