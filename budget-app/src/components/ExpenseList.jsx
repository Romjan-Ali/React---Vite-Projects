import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

// ExpenseList component
function ExpenseList() {
  // Access the 'expenses' array from the AppContext using 'useContext'
  const { expenses } = useContext(AppContext);

  // State to store the filtered expenses based on search input
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  // useEffect to update the filteredExpenses when 'expenses' changes
  useEffect(() => {
    // Set 'filteredExpenses' to the original 'expenses' when 'expenses' changes
    setFilteredExpenses(expenses);
  }, [expenses]);

  // Function to handle changes in the search input field
  const handleChange = (event) => {
    // Filter the 'expenses' array based on the search input
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    // Update the 'filteredExpenses' state with the search results
    setFilteredExpenses(searchResults);
  }

  // Rendering the list of expenses with a search input field
  return (
    <>
      <input type='text' className='form-control mb-2 mr-sm-2' placeholder='Type to search...' onChange={handleChange} />
      <ul className='list-group'>
        {
          // Map through 'filteredExpenses' and render each 'ExpenseItem' component
          filteredExpenses.map((expense) =>
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          )
        }
      </ul>
    </>
  );
}

export default ExpenseList;