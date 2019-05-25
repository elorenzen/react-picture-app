import React from 'react';

class SearchBar extends React.Component{
    render() {
        return(
            <div className='ui segment'>
                <form className='ui form'>
                    <input type='text' className='field' />
                </form>
            </div>
        ) 
    }
};

export default SearchBar;