import React from 'react';

// ViewBudget component
const ViewBudget = (props) => {
  // Rendering the budget value and an edit button
  return (
    <>
      <span>Budget: ${props.budget}</span>
      <button className="btn btn-primary" type="button" onClick={props.handleEditClick}>
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
