import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(budget)
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })

        setName('');
        setBudget('');
    }
  return (
    <form onSubmit={handleSubmit} className='row'>
        <div className='col-sm col-lg-4'>
            <label htmlFor='name'>Name</label>
            <input
                type='text'
                required='required'
                className='form-control'
                name='name'
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
        </div>
        <div className='col-sm col-lg-4'>
            <label htmlFor='cost'>Cost</label>
            <input
                type='number'
                required='required'
                className='form-control'
                name='cost'
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
            />
        </div>
        
        <div className='row mt-3 mb-3'>
            <div className='col-sm'>
                <button type='submit' className='btn btn-primary'>Save</button>
            </div>
        </div>
    </form>
    
  );
};

export default AddExpenseForm;