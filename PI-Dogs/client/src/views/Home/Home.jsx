import CardsContainer from '../../components/CardsContainer/CardsContainer';
import NavBar from '../../components/NavBar/NavBar';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../redux/actions';
import style from './Home.module.css';
import { getTemperament } from '../../redux/actions';

const Home = () => {

    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);
    const temperament = useSelector(state => state.temperament);


    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperament());
    }, [dispatch])

    return (
        <div>
            <div className={style.nav}>
                <h1>Dog Breeds</h1>
                {/* <NavBar /> */}
            </div>
            <div className='mainContainer'>
                {/* <Pagination firstHandler={firstHandler} prevHandler={prevHandler} nextHandler={nextHandler} lastHandler={lastHandler} pagination={pagination} totalDogs={dogs.length} dogsPerPage={dogsPerPage} currentPage={currentPage} pageNumberLimit={pageNumberLimit} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} />
                <br /> */}

                <CardsContainer />

                {/* <Pagination firstHandler={firstHandler} prevHandler={prevHandler} nextHandler={nextHandler} lastHandler={lastHandler} pagination={pagination} totalDogs={dogs.length} dogsPerPage={dogsPerPage} currentPage={currentPage} pageNumberLimit={pageNumberLimit} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} />
                <br /> */}

{/* <Pagination
        currentPage={currentPage}
        totalDogs={storedDogs.length}
        dogsPerPage={dogsPerPage}
        setCurrentPage={setCurrentPage}
      /> */}
            </div>
        </div>
    )
}


export default Home;