import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByName } from "../../redux/actions";
import style from "SortAZ.module.css";

const SortAZ = () => {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs)

    const handleSort = (event) => {
        const value = event.target.value;
        dispatch(orderByName(dogs, value))
    }

    return (
        <div className={style.container}>
           <span>Alphabetical Order</span> 
            <select onChange={handleSort}>
                <option value="asc" defaultValue selected>Ascendent</option>
                <option value="des">Descendent</option>
            </select>

        </div>
    )
}


export default SortAZ;