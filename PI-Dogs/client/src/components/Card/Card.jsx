import style from './Card.module.css';

const Card = (props) => {
    return (
        <div className={style.card}>
            <img />
            <h3>Name: {props.name}</h3>
            <h6>Temperament: {props.temperament}</h6>
        </div>
    )
}


export default Card;