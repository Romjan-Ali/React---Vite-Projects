import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

// ExpenseItem component
const ExpenseItem = (props) => {
    // Access the 'dispatch' function from the AppContext using 'useContext'
    const { dispatch } = useContext(AppContext);

    // Function to handle the delete button click
    const handleDeleteExpense = () => {
        // Dispatch the 'DELETE_EXPENSE' action to remove the expense with the given ID
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    // Rendering an individual expense item with its name, cost, and delete button
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge bg-primary badge-pill mr-3'>${props.cost}</span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense} />
            </div>
        </li>
    );
};

export default ExpenseItem;