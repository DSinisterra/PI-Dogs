import {useEffect} from "react";
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

   if (pages.length <= 5) {
      for (let page = 1; page <= pages.length; page++) {
         pagesToShow.push(page);
      }
   } else {
      if (currentPage <= 3) {
         pagesToShow = [1, 2, 3, 4, 5]
      } else if (currentPage >= pages.length - 2) {      
         pagesToShow = [
            pages.length - 4,
            pages.length - 3,
            pages.length - 2,
            pages.length - 1,
            pages.length
         ];
      } else {
         pagesToShow = [
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
         ]
      }
   }

   useEffect(() => {
      dispatch(getDogs());
   }, [dispatch]);


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
            <button onClick={currentPage - 1 ? () => setCurrentPage(currentPage - 1) : undefined} disabled={currentPage === 1}>
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

            <button onClick={pages.includes(currentPage) ? () => setCurrentPage(currentPage + 1) : undefined} disabled={currentPage === pages}>
               ►
            </button>
         </div>
      </>
   )

}


export default CardsContainer;