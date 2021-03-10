import React from 'react';

const BookItem = ({ book, setBook }) => {
    return (
        <div onClick={setBook} className="col-3" role="button">
            <h3>{book.title}</h3>
            <img className="img-thumbnail" src={book.image} alt={book.title} />
            
        </div>
    );
};

export default BookItem;