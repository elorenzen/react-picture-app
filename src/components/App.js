import React from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        /* 
        Axios get request takes 2 parameters: 
            • request address
            • object containing request customizations
        */
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        
        this.setState({ images: response.data.results });   
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onSubmit={event => this.onSearchSubmit(event)} />
                Found: {this.state.images.length} images
            </div>
        )
    }
}   

export default App;