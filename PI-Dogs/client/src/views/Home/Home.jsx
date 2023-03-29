import CardsContainer from '../../components/CardsContainer/CardsContainer';
import NavBar from '../../components/NavBar/NavBar';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, getTemperament, cleanDetail } from '../../redux/actions';
import style from './Home.module.css';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {

    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);
    const dogsPerPage = 12;
    const temperament = useSelector(state => state.temperament);
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperament());
        dispatch(cleanDetail())
    }, [dispatch])

    const firstHandler = (firstPage) => {
        setCurrentPage(firstPage)
    }

    const prevHandler = () => {
        const prevPage = (currentPage-1);
        setCurrentPage(prevPage)
    }

    const nextHandler = () => {
        const nextPage = (currentPage+1);
        setCurrentPage(nextPage)
    }

    const lastHandler = (lastPage) => {
        setCurrentPage(lastPage)
    }

    const pagination = (page) => {
        setCurrentPage(page)
    }


    return (
        <>
            <div className={style.nav}>
                <h1>Dog Breeds</h1>
                <NavBar />
            </div>
            <div className='mainContainer'>

                <CardsContainer />

                <Pagination 
                    firstHandler={firstHandler} 
                    prevHandler={prevHandler} 
                    nextHandler={nextHandler} 
                    lastHandler={lastHandler} 
                    pagination={pagination} 
                    totalDogs={dogs.length} 
                    dogsPerPage={dogsPerPage} 
                    currentPage={currentPage} 
                />

            </div>
        </>
    )
}


export default Home;