import React, {createContext, useReducer} from "react";
import {v4 as uuidv4} from 'uuid';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload] 
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => {
                    return expense.id !== action.payload
                })
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload
            };
        default: 
            return state;
    }
}

const initialState = {
    budget: 7000,
    expenses: [
        { id: uuidv4(), name: 'Processing Charges', cost: 3421 },
        { id: uuidv4(), name: 'Repairs and Maintenance', cost: 105 },
        { id: uuidv4(), name: 'Recovery of Doubtful Debts', cost: 6 },
        { id: uuidv4(), name: 'Loss on Sale of Assets', cost: 52 },
        { id: uuidv4(), name: 'Business Process OutSourcing Exp.', cost: 73 },
        { id: uuidv4(), name: 'Rent', cost: 1184 },
        { id: uuidv4(), name: 'Power and Fuel', cost: 143 },
        { id: uuidv4(), name: 'Directors Commission', cost: 55 },
        { id: uuidv4(), name: 'Legal and Professional Exp.', cost: 73 },
        { id: uuidv4(), name: 'Communication Cost', cost: 44 },
        { id: uuidv4(), name: 'Royalty Paid', cost: 23 },
        { id: uuidv4(), name: 'Travelling and Conveyance', cost: 32 },
        { id: uuidv4(), name: 'Trade Incentives', cost: 39 },
        { id: uuidv4(), name: 'Insurance', cost: 57 }
    ]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};