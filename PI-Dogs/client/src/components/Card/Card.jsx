import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, temperament }) => {

    return (
        <Link to={`/home/${id}`}>
            <div className={style.card}>
                <img className={style.img} src={image} alt={name} />
                <h3 className={style.name}>Name: {name}</h3>
                <p className={style.temperament}>Temperament: {temperament}</p>
            </div>
        </Link>
    )
}


export default Card;