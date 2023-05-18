import { useSelector, useDispatch } from 'react-redux';
import {temperamentFilter, getTemperament } from '../../redux/actions';
import {useEffect} from 'react';
import style from './TemperamentFilter.module.css';


const TemperamentFilter = () => {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs)
    const temperament = useSelector(state => state.temperament);

    const handleTemperament = (event) => {
        dispatch(temperamentFilter(dogs, event.target.value))
    }

    useEffect(() => {
        dispatch(getTemperament());
        dispatch(temperamentFilter(dogs, ""));
    }, [dispatch])

    return (
        <>
            <select name ='temperament' onChange={handleTemperament} className={style.temperamentContainer}>
                <option value="all">All Temperaments</option>
                {temperament?.map((temp) => <option key={temp.id} value={temp.name}>{temp.name}</option>)}
            </select>
        </>
    )
}


export default TemperamentFilter;