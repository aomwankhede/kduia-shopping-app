import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const SpentSoFar = () => {
    const {expenses, Location} = useContext(AppContext);
    var totalExpenses = expenses.reduce((total, item) =>{
        return(total += (item.unitprice * item.quantity));
    }, 0);
    return (
        <div className='alert alert-primary'>
        <span>SpentSoFar: {Location}{totalExpenses}</span>
        </div>
    );
};
export default SpentSoFar;