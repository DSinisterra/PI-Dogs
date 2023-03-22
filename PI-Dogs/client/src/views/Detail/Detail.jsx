import style from './Detail.module.css';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById, cleanDetail } from '../../redux/actions';


const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {name, minWeight, maxWeight, minHeight, maxHeight, maxLifeSpan, temperament, image } = useSelector(state => state.dogDetail);
    
    useEffect(()=>{
        dispatch(getById(id))
        return ()=> dispatch(cleanDetail())
    }, [])


    return (
        <div>
            <div>
                <img />
            </div>
            <div>
                <h1>{name}</h1>

            </div>
        </div>
    )
}


export default Detail;