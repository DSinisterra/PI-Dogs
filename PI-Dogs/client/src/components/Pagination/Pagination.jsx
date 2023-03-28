import React from 'react';
import style from 'Pagination.module.css';

const Pagination = ({firstHandler, prevHandler, nextHandler, lastHandler, pagination, totalDogs, dogsPerPage, currentPage, pageNumberLimit, maxPageNumberLimit, minPageNumberLimit}) => {
    let pages = [];
    let firstPage = 1;
    let lastPage = 1;

    for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
        lastPage = i;
        pages.push(i);
    }

    return (
        <div className={style.pagination}>
            <button onClick={() => firstHandler(firstPage)} className={currentPage === firstPage ? style.active : style.first}>First</button>
            <button onClick={prevHandler} className={style.prev}>Prev</button>
            {pages.map((page) => {
                return (
                    <button id={page} key={page} onClick={() => {pagination(page)}} className={page === currentPage ? style.active : ""} >{page}</button>
                )
            })}
            <button onClick={nextHandler} className={style.next}>Next</button>
            <button onClick={() => lastHandler(lastPage)} className={currentPage === lastPage ? style.active : style.last}>Last</button>
        </div>
    )
}


export default Pagination;