import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./SortWeight.module.css";
import { orderByWeight } from "../../redux/actions";

const SortWeight = () => {
    const dogs = useSelector(state => state.dogs)
    const dispatch = useDispatch();

    const handleWeightFilter = (event) => {
        dispatch(orderByWeight([...dogs], event.target.value))
    }

    return (
        <select onChange={handleWeightFilter} className={style.sortWeight}>
            <option value="default">Order by Weight:</option>
            <option value="Low-High">Ascendent</option>
            <option value="High-Low">Descendent</option>
        </select>
    )
}


export default SortWeight;