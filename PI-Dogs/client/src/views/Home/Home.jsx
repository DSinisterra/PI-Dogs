import CardsContainer from '../../components/CardsContainer/CardsContainer';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortAZ from '../../components/SortAZ/SortAZ';
import SortWeight from '../../components/SortWeight/SortWeight';
import TemperamentFilter from '../../components/TemperamentFilter/TemperamentFilter';
import style from './Home.module.css';


const Home = () => {

   return (
    <>
        <NavBar />
        <div className={style.filters}>
            <SearchBar />
            <TemperamentFilter />
            <SortAZ />
            <SortWeight />
        </div>
        <CardsContainer />
    </>
   )
}


export default Home;