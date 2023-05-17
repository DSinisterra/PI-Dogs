import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, temperament }) => {

    return (
        <div className={style.card}>
            <Link to={`/home/${id}`}>
                <img className={style.img} src={image} alt={name} />
                <h3 className={style.name}>{name}</h3>
                <p className={style.temperament}>Temperament: {temperament}</p>
            </Link>
        </div>
    )
}


export default Card;