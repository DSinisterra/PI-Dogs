import {Link} from 'react-router-dom';
import style from './NavBar.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            🐶
            <Link to="/home" className={style.link}>Breeds</Link>
            <Link to="/create" className={style.link}>Create your Breed</Link>
            <LanguageSwitcher />
            <Link to="/" className={style.link}>Exit 🐾</Link>
        </div>
    )
}


export default NavBar;