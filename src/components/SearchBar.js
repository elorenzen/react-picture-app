import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };

    render() {
        return(
            <div className='ui segment'>
                <form className='ui form'>
                    <label>Image Search</label>
                    <input 
                        value={this.state.term}
                        onChange={(event) => 
                            this.setState({ term: event.target.value })
                        } 
                        type='text' 
                        className='field' 
                    />
                </form>
            </div>
        ) 
    }
};

export default SearchBar;