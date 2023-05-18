import style from './Detail.module.css';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById, cleanDetail } from '../../redux/actions';
import NavBar from '../../components/NavBar/NavBar';


const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {name, minWeight, maxWeight, minHeight, maxHeight, minLifeSpan, maxLifeSpan, temperament, image } = useSelector(state => state.dogDetail);
    
    useEffect(()=>{
        dispatch(getById(id))
        return () => dispatch(cleanDetail())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <h3>{name}</h3>
            <img src={image} alt={name} className={style.image} />
            <div className={style.textContainer}>
                <div className={style.item}>
                    <h5>Weight</h5> 
                    <hr />
                    <p>
                        {minWeight} - {maxWeight} kg
                    </p>
                </div>

                <div className={style.item}>
                    <h5>Height</h5> 
                    <hr />
                    <p>
                        {minHeight} - {maxHeight} cm
                    </p>
                </div>

                <div className={style.item}>
                    <h5>Life Span</h5> 
                    <hr />
                    <p>
                        {minLifeSpan} - {maxLifeSpan} 
                    </p>
                </div>
                <h5 className={style.temperament}>Temperament</h5>
                <p className={style.temperament}>
                    {temperament ? temperament : "there is no information"}
                </p>
            </div>
        </>
    )
}


export default Detail;