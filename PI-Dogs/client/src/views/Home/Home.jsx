import CardsContainer from '../../components/CardsContainer/CardsContainer';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../redux/actions';


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogs())
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <CardsContainer />
        </div>
    )
}


export default Home;