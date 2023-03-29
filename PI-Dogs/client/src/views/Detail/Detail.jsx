import style from './Detail.module.css';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById, cleanDetail } from '../../redux/actions';


const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {name, minWeight, maxWeight, minHeight, maxHeight, minLifeSpan, maxLifeSpan, temperament, image } = useSelector(state => state.dogDetail);
    
    useEffect(()=>{
        dispatch(getById(id))
        return ()=> dispatch(cleanDetail())
    }, [])


    return (
        <>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <h5>Weight: </h5> <p>{minWeight} - {maxWeight} kg</p>
                <h5>Height: </h5> <p>{minHeight} - {maxHeight} cm</p>
                <h5>Life Span: </h5> <p>{minLifeSpan} - {maxLifeSpan} </p>
                <h5>Temperament: </h5> <p>{temperament ? temperament.join(", ") : "there is no information"}</p>
            </div>
        </>
    )
}


export default Detail;