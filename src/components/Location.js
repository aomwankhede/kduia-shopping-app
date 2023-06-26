import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    const {Location} = useContext(AppContext);
    const styles = { backgroundColor: '#90EE90',width:'100px',height:'25px',borderRadius:'10px'};
  return ( 
        <div className='alert alert-secondary'> Location {Location}
        <select style={styles} name='Location' id="Location" defaultValue='£' onChange={event=>changeLocation(event.target.value)}>
            <option value="$">$ Dollar</option>
            <option value="₹">₹ Ruppee</option>
            <option value="€">€ Euro</option>
            <option value="£">£ Pound</option>
        </select>
    </div>
    );
};
export default Location;