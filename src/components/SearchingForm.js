import React, {useState} from 'react';

const SearchingForm = ({filterBook}) => {


    const [search, setSearch] = useState("")

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        filterBook(search)
        setSearch('')
    }

    return (
        <div>
            <form onSubmit={onSubmit} action="">
                <div className="form-group d-flex">
                    <input value={search} onChange={onChange} className="form-control mr-4" name="search" id="search"/>
                    <button className="btn btn-primary">Search</button>
                </div>
            </form>
            
        </div>
    );
};

export default SearchingForm;