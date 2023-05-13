import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import usePagination from "../Pagination/Pagination";
import Filters from "../TemperamentFilter/TemperamentFilter";

const CardsContainer = () => {
   const dispatch = useDispatch();
   const allDogs = useSelector((state) => state.dogs);
   const { currentItems, pages, currentPage, setCurrentPage } = usePagination(
      allDogs,
      9
    );
   

   useEffect(() => {
      dispatch(getDogs());
   }, []);


   return (
      <>
         <ul className={style.container}>
            {currentItems.length 
            ? (currentItems.map((dog) => {
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
         
         <div className={style.pages}>

         </div>
      </>
   )

}


export default CardsContainer;