import React, { useState } from 'react';

// EditBudget component
const EditBudget = (props) => {
  // State to track the edited budget value
  const [value, setValue] = useState(props.budget);

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    // Update the 'value' state with the new value from the input field
    setValue(event.target.value);
  }

  // Function to handle the save button click
  const handleSaveButtonClick = () => {
    // Call the 'handleSaveClick' function from the parent component with the edited budget value
    props.handleSaveClick(value);
  }

  // Rendering the input field for editing the budget and the save button
  return (
    <>
      <input
        type='number'
        className='form-control mr-3'
        id='name'
        value={value}
        onChange={handleInputChange}
      />
      <button
        type='button'
        className='btn btn-primary'
        onClick={handleSaveButtonClick}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;