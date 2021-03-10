import React from 'react';
import Pagination from './Pagination';

const ReadingPlace = ({book, page, setPage}) => {
    return ( 
        <div className="border p-4 mt-5 mb-5">
            <h2>{book.title}</h2>
            <hr/>
            <p>
                {book.pages[page]}
            </p>
        </div>
    );
};

export default ReadingPlace;