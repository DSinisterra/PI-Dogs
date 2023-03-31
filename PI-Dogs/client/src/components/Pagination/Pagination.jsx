import React from 'react';
import style from './Pagination.module.css';

const Pagination = ({allDogs, dogsPerPage, pagination}) => {
    let pages = [];
    let firstPage = 1;
    let lastPage = 1;

    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        lastPage = i;
        pages.push(i);
    }

    return (
        <>
            <nav>
                <ul className='pages'>
                    {pages?.map(page => (
                        <li key={page} className={page === pagination.page? style.active : ''}>
                            <button onClick={() => pagination(page)} > {page} </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}


export default Pagination;