import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const {expenses} = useContext(AppContext);
  const expenseTotal = expenses.reduce((total, expense) => {
    return total + expense.cost
  }, 0);
  return (
    <div className='alert alert-primary p-4'>
        <span>Spent so far: ${expenseTotal}</span>
    </div>
  );
};

export default ExpenseTotal;