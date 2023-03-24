import style from './Landing.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

    
const Landing = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.start}>
                
                <h1>Dog Breeds</h1>
                <hr />
                <Link to="/home"><button>START</button></Link>

                <div className={style.icons}>
                    <a href='https://www.linkedin.com/in/denis-sinisterra-9bb49b218/'> <FaLinkedin /> </a>
                    <a href='https://github.com/DSinisterra'> <FaGithub /> </a>
                </div> 

            </div>
        </div>
    )
}


export default Landing;