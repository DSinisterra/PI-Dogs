import { useSelector, useDispatch } from 'react-redux';
import {temperamentFilter, getTemperament } from '../../redux/actions';
import {useEffect} from 'react';
import style from './HeightFilter.module.css';


const HeightFilter = () => {
    const dispatch = useDispatch();
    const temperament = useSelector(state => state.temperament);

    const handleTemperament = (event) => {
        dispatch(temperamentFilter(event.target.value))
    }

    useEffect(() => {
        dispatch(getTemperament())
    }, [])

    return (
        <>
            <select name ='temperament' onChange={handleTemperament} className={style.temperamentContainer}>
                <option value="all">All Temperaments</option>
                {temperament?.map((temp) => <option key={temp.id} value={temp.name}>{temp.name}</option>)}
            </select>
        </>
    )
}


export default HeightFilter;