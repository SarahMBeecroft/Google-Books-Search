import React from 'react';
import './style.css';

const Search = props => {
    return (
        <form>
            <div className='form-group'>
                <label className='bookSearch'><h3>Search for books:</h3></label>
                <br></br>
                <input className='col-12 form-control'
                    value={props.search}
                    type='text'
                    name="searchBook"
                    placeholder="Enter book's name here"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type='submit' className='submitBtn btn btn-primary' onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default Search