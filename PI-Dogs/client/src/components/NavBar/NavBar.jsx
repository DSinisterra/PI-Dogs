import {Link} from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { FaDog } from 'react-icons/fa';

const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            <FaDog />
            <Link to="/home">Breeds</Link>
            <SearchBar />
            <Link to="/create">Create your Breed</Link>
            <Link to="/">Exit</Link>
        </div>
    )
}


export default NavBar;