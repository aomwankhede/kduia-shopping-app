import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const Remainings = () => {
    const { dispatch } = useContext(AppContext);
    var { expenses, Location, TB, Remaining } = useContext(AppContext);
    var totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);
    useEffect(() => {
        if (TB - totalExpenses < 0) {
          alert(`The value cannot exceed the remaining fund: ${Remaining}`);
          // Adjust totalExpenses to fit within the remaining budget
          totalExpenses = TB;
        } else {
          const changeREM = (val) => {
            dispatch({
              type: 'CHG_REM',
              payload: val,
            });
          };
          changeREM(TB - totalExpenses);
        }
      }, [TB, totalExpenses, Remaining, dispatch]);
    return (
        <div className='alert alert-primary'>
            <span>Remaining: {Location}{TB - totalExpenses}</span>
        </div>
    );
};
export default Remainings;