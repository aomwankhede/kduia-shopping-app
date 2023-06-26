import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { FaPlusCircle,FaMinusCircle } from 'react-icons/fa';
const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);
    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };
        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };
    const handleDeleteItemBy10 = () => {
        const item = {
            name: props.name,
        };
        dispatch({
            type: 'DELETE_ITEMBY10',
            payload: item,
        });
    };
    const handleIncreaseItemBy10 = () => {
        const item = {
            name: props.name,
        };
        dispatch({
            type: 'INC_ITEMBY10',
            payload: item,
        });
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncreaseItemBy10}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDeleteItemBy10}></FaMinusCircle></td>
        <td><FaTimesCircle size='2.2em' color="grey" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};
export default ExpenseItem;