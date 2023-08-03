import React, { useState } from 'react';

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
        <input 
            type='number'
            className='form-control'
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
        <button type='button btn' className='btn btn-primary' onClick={() => props.handleSaveClick(value)}>Save</button>
    </>
  );
};

export default EditBudget;