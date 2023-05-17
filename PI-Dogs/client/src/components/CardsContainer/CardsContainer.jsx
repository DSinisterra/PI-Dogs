import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import usePagination from "../Pagination/Pagination";

const CardsContainer = () => {
   const dispatch = useDispatch();
   const allDogs = useSelector((state) => state.dogs);
   const { currentItems, pages, currentPage, setCurrentPage } = usePagination(
      allDogs,
      9
    );

   let pagesToShow = [];
   
   if (currentPage <= 3) {
      pagesToShow = [1, 2, 3, 4, 5]
   } else {
      for (let page = currentPage - 2; page <= currentPage + 2 ; page++) {
         pagesToShow.push(page);
      }
   }
   

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
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
               ◄
            </button>
            {pagesToShow.map((page) => {
               return (
                  <button
                     key={page}
                     onClick={() => setCurrentPage(page)}
                     className={page === currentPage ? style.active : ""}
                  >
                     {page}
                  </button>
               );
            })}

            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pages}>
               ►
            </button>
         </div>
      </>
   )

}


export default CardsContainer;