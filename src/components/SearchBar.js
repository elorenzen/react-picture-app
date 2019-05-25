import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };

    onFormSubmit(event) {
        // Prevents form from submitting on automatic refresh
        event.preventDefault();
    }

    render() {
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
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