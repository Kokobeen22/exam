import React from 'react';
import BookItem from './BookItem';


const BookList = ({ books, setBook}) => {
    return ( 
        <div className="row">
            {books.map((book, index) => (
                <BookItem setBook={setBook(index)} key={book.title} book={book} />
            ))}

        </div>
    );
};

export default BookList;