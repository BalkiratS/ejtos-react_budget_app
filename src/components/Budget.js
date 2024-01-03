import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
        
    const handleBudgetBlur = (event) => {
        const newVal = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
                    return (total += item.cost);
                }, 0);

        if (newVal > remaining){
            alert("The value cannot exceed remaining funds  £"+remaining);
            setNewBudget("");
        }
        else if (newVal < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending")
        }
        else {
            setNewBudget(newVal)
        }
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange} onBlur={handleBudgetBlur}></input>
</div>
    );
};
export default Budget;