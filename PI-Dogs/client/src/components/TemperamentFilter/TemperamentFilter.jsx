import { useSelector, useDispatch } from 'react-redux';
import {temperamentFilter } from '../../redux/actions';
import React from 'react';
import style from './TemperamentFilter.module.css';


const TemperamentFilter = () => {
    const dispatch = useDispatch();
    const temperament = useSelector(state => state.temperament);

    const handleTemperament = (event) => {
        dispatch(temperamentFilter(event.target.value))
    }

    return (
        <>
            <div></div>
            <div></div>

            <div className={style.temperament}>
                <select name ='temperament' onChange={handleTemperament}>
                    <option value="all">All</option>
                    {temperament?.map((temp) => <option key={temp.id} value={temp.name}>{temp.name}</option>)}
                </select>
            </div>
            
        </>
    )
}


export default TemperamentFilter;