import React, { useState } from 'react';
import initialBooks from '../data';
import BookList from './BookList';
import ReadingPlace from './ReadingPlace';
import SearchingForm from './SearchingForm';


const App = () => {


    const [books, setbooks] = useState(initialBooks)
    const [current, setCurrent] = useState({ book: 0, page: 0 })


    const filterBook = (search) => {
        const filteredBooks = initialBooks.filter((book) => {
            return book.title.toLowerCase().includes(search.toLowerCase());
        })
        setbooks([...filteredBooks])
    }

    const setBook = (index) => () => {
        setCurrent({ book: index, page: 0 })
    }

    const setPage = (index) => () => {
        setCurrent({ ...current, page: index })
    }

    return (

        <div className="container border shadow mt-5 p-4" >

            <h1 className="text-center" >Library</h1>
            <SearchingForm filterBook={filterBook} />
            {books.length === 0 && <p>Kitep jok</p>}
            {books.length > 0 &&
            <BookList setBook={setBook} books={books.slice(0, 4)} />}
            {books.length > 0 && <ReadingPlace setPage={setPage} book={books[current.book]} page={current.page} />}
        </div>
    );
};

export default App;