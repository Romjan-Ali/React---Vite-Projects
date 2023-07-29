// Importing necessary components and dependencies
import React, { useState, useContext } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { AppContext } from "../context/AppContext";

// Budget component
const Budget = () => {
    // Using useContext hook to access 'budget' and 'dispatch' from AppContext
    const { budget, dispatch } = useContext(AppContext);

    // State to handle the editing mode
    const [isEditing, setIsEditing] = useState(false);

    // Function to handle the edit button click
    const handleEditClick = () => {
        setIsEditing(true);
    }

    // Function to handle the save button click
    const handleSaveClick = (value) => {
        // Dispatching a 'SET_BUDGET' action to update the budget in the context
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });

        // Exiting the editing mode after saving the budget
        setIsEditing(false);
    }

    // Conditional rendering to show 'EditBudget' or 'ViewBudget' based on 'isEditing'
    return (
        <div className="alert alert-secondary p3 d-flex align-items-center justify-content-between">
            {
                // If 'isEditing' is true, show 'EditBudget' component; else show 'ViewBudget' component
                isEditing ? (<EditBudget handleSaveClick={handleSaveClick} budget={budget} />) : (<ViewBudget handleEditClick={handleEditClick} budget={budget} />)
            }
        </div>
    );
}

export default Budget;