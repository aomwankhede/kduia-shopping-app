import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const TB = () => {
  const {dispatch } = useContext(AppContext);

    const changeTB = (val)=>{
            dispatch({
                type: 'CHG_TB',
                payload: val,
            })
    }
    const { expenses, Location ,TB,Remaining} = useContext(AppContext);
    var totalExpenses = expenses.reduce((total, item) =>{
      return(total += (item.unitprice * item.quantity));
  }, 0);
    if(TB < totalExpenses){
      alert("Budget cant become less than already allocated spending")
    }
    const styles={width:'100px',height:'25px'}
  return (
        <div className='alert alert-secondary'> TotalBudget {Location}
        <input style={styles} type="number" name='TB' id="TB" max='20000' step='10' onChange={event=>changeTB(event.target.value)}></input>
    </div>
    );
};
export default TB;