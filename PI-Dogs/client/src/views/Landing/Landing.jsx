import style from './Landing.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";

    
const Landing = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.start}>
                
                <h1>Dog Breeds</h1>
                <hr />
                <button>START</button>

                <div className={style.icons}>
                    <FaLinkedin />
                    <FaGithub />
                </div> 

            </div>
        </div>
    )
}


export default Landing;