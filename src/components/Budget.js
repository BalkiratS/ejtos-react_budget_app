import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
        
    const handleBudgetBlur = (event) => {
        const newVal = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
                    return (total += item.cost);
                }, 0);

        if (newVal > 20000){
            alert("The value cannot exceed the max 20000");
            setNewBudget("");
        }
        else if (newVal < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending")
        }
        else {
            setNewBudget(newVal)
            dispatch({
                type: "SET_BUDGET",
                payload: newVal
            })
        }
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange} onBlur={handleBudgetBlur}></input>
</div>
    );
};
export default Budget;