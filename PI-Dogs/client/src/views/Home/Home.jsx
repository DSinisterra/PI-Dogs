import CardsContainer from '../../components/CardsContainer/CardsContainer';
import NavBar from '../../components/NavBar/NavBar';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../redux/actions';
import style from './Home.module.css';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getAllTemperaments());
    }, [dispatch])

    return (
        <div>
            <div className={style.nav}>
                <h1>Dog Breeds</h1>
                <NavBar />
            </div>
            
            <CardsContainer />
        </div>
    )
}


export default Home;