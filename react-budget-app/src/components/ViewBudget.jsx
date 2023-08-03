import React from 'react';

const ViewBudget = (props) => {
  return (
    <>
        Budget: ${ props.budget }
        <button type='button btn' className='btn btn-primary' onClick={props.handleEditClick}>Edit</button>
    </>
    
  );
};

export default ViewBudget;