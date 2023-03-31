import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "SortWeight.module.css";
import { orderByWeight } from "../../redux/actions";

const SortWeight = () => {
    const dogs = useSelector(state => state.dogs)
    const dispatch = useDispatch();

    const handleWeightFilter = (event) => {
        const value = event.target.value;
        dispatch(orderByWeight(dogs, value))
    }

    return (
        <div className={style.container}>
            <span>Order by Weight</span>
            <select onChange={handleWeightFilter}>
                <option value="asc">Ascendent</option>
                <option value="des">Descendent</option>
            </select>
        </div>
    )
}


export default SortWeight;