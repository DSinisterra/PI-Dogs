import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import {useSelector} from 'react-redux';


const CardsContainer = ({dogs}) => {
    const loading = useSelector(state => state.loading);
    
    return (
        <div className={style.container}>
            {loading ? (<>
                {dogs.length > 0 ? (
                    <>
                        {dogs.map((dog) => {
                            return <Card 
                                key = {dog.id}
                                id = {dog.id}
                                name = {dog.name}
                                image = {dog.image}
                                temperament = {dog.temperament}
                            />
                        })}
                    </>
                ) : (<>
                        <Card
                            key = "no-info"
                            id = "no-info"
                            name = "Breed not found"
                           image = "https://st.depositphotos.com/10614052/56431/i/600/depositphotos_564315362-stock-photo-cute-french-bulldog-and-question.jpg"
                           temperament = "There is no information"
                        />
                    </>)}
            </>) : (<>
                    <div className={style.loader}>
                    <div className={style.dog}>
                        <div className={style.dog-body}>
                        <div className={style.dog-tail}>
                            <div className={style.dog-tail}>
                                <div className={style.dog-tail}>
                                    <div className={style.dog-tail}>
                                    <div className={style.dog-tail}>
                                        <div className={style.dog-tail}>
                                            <div className={style.dog-tail}>
                                                <div className={style.dog-tail}></div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="dog-torso"></div>
                        <div class="dog-head">
                        <div class="dog-ears">
                            <div class="dog-ear"></div>
                            <div class="dog-ear"></div>
                        </div>
                        <div class="dog-eyes">
                            <div class="dog-eye"></div>
                            <div class="dog-eye"></div>
                        </div>
                        <div class="dog-muzzle">
                            <div class="dog-tongue"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </>)}
        </div>
    )
}


export default CardsContainer;