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
                <div className="loader" style={style}>
         <div className="dog" style={style}>
            <div className="dog-body" style={style}>
               <div className="dog-tail" style={style}>
                  <div className="dog-tail" style={style}>
                     <div className="dog-tail" style={style}>
                        <div className="dog-tail" style={style}>
                           <div className="dog-tail" style={style}>
                              <div className="dog-tail" style={style}>
                                 <div className="dog-tail" style={style}>
                                    <div className="dog-tail" style={style}></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="dog-torso" style={style}></div>
            <div className="dog-head" style={style}>
               <div className="dog-ears" style={style}>
                  <div className="dog-ear" style={style}></div>
                  <div className="dog-ear" style={style}></div>
               </div>
               <div className="dog-eyes" style={style}>
                  <div className="dog-eye" style={style}></div>
                  <div className="dog-eye" style={style}></div>
               </div>
               <div className="dog-muzzle" style={style}>
                  <div className="dog-tongue" style={style}></div>
               </div>
            </div>
         </div>
      </div>
            </>)}
        </div>
    )
}


export default CardsContainer;