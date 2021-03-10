import React from 'react';

const Pagination = ({setPage, pages}) => {
    return ( 
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map((item, index) => (
                <li key={index} className="page-item"><span role="button" onClick={setPage(index)} className="page-link">{index+1}</span></li>
            ))}
        </ul>


    </nav>
    );
};

export default Pagination;