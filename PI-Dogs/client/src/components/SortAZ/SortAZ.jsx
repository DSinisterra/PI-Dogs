import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByName } from "../../redux/actions";
import style from "./SortAZ.module.css";

const SortAZ = () => {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs)

    const handleSort = (event) => {
        dispatch(orderByName([...dogs], event.target.value))
    }

    return (
        <select onChange={handleSort} className={style.sortName}>
            <option value="default">Alphabetical Order:</option>
            <option value="Ascendent">Ascendent</option>
            <option value="Descendent">Descendent</option>
        </select>
    )
}


export default SortAZ;