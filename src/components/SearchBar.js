import React from 'react';

class SearchBar extends React.Component{

    onInputChange(event) {
        // Contains value of user input
        console.log(event.target.value);
    }

    render() {
        return(
            <div className='ui segment'>
                <form className='ui form'>
                    <label>Image Search</label>
                    <input onChange= {this.onInputChange} type='text' className='field' />
                </form>
            </div>
        ) 
    }
};

export default SearchBar;