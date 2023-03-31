import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import Loader from "../Loader/Loader";
import Pagination from '../../components/Pagination/Pagination';
import Filters from "../TemperamentFilter/TemperamentFilter";

const CardsContainer = () => {
   const dispatch = useDispatch();
   const allDogs = useSelector((state) => state.dogs);
   const [currentPage, setCurrentPage] = useState(1);
   const [dogsPerPage, setDogsPerPage] = useState(9);
   const indexOfLastDog = currentPage * dogsPerPage;
   const indexOfFirstDog = indexOfLastDog - dogsPerPage;
   const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

   useEffect(() => {
      dispatch(getDogs());
   }, []);

   const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);
  }

   return (
      <>
         <ul className={style.container}>
            {currentDogs.length 
            ? (currentDogs.map((dog) => {
               return (
                  <li key={dog.id}>
                     <Card 
                        key={dog.id} 
                        id={dog.id} 
                        name={dog.name}
                        image={dog.image}
                        temperament={dog.temperament}
                     />
                  </li>)
            }))
            : null
            }
         </ul>

         <Pagination
            allDogs={allDogs.length}
            dogsPerPage={dogsPerPage}
            pagination={pagination} 
        />

      </>
   )

}


export default CardsContainer;