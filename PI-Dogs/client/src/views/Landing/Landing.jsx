import style from './Landing.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

    
const Landing = () => {
    return (
        <div className={style.mainContainer}>
            <video className={style.bg} autoPlay muted loop >
                <source src='/video.mp4' type="video/mp4" />
            </video>

            <div className={style.box}>
                <h1>Dog Breeds</h1>
                <hr />
                <Link to="/home">
                    <button className={style.button}>
                        Start
                    </button>
                </Link>

                <div className={style.icons}>
                    <a href='https://www.linkedin.com/in/denis-sinisterra-9bb49b218/' target='_blank' className={style.linkedin}> 
                        <FaLinkedin /> 
                    </a>

                    <a href='https://github.com/DSinisterra' target='_blank' className={style.github}> 
                        <FaGithub /> 
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Landing;