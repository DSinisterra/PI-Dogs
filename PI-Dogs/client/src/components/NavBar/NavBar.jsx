import {Link} from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import TemperamentFilter from '../TemperamentFilter/TemperamentFilter';


const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            🐶
            <Link to="/home" className={style.link}>Breeds</Link>
            <SearchBar />
            <TemperamentFilter />
            <Link to="/create" className={style.link}>Create your Breed</Link>
            <Link to="/" className={style.link}>Exit</Link>
        </div>
    )
}


export default NavBar;