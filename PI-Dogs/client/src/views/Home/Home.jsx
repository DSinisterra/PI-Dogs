import CardsContainer from '../../components/CardsContainer/CardsContainer';
import HeightFilter from '../../components/HeightFilter/HeightFilter';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import TemperamentFilter from '../../components/TemperamentFilter/TemperamentFilter';
import style from './Home.module.css';


const Home = () => {

   return (
    <>
        <NavBar />
        <div className={style.filters}>
            <SearchBar />
            <TemperamentFilter />
            <HeightFilter />
        </div>
        <CardsContainer />
    </>
   )
}


export default Home;