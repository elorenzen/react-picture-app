import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {

    async onSearchSubmit(term) {
        /* 
        Axios get request takes 2 parameters: 
            • request address
            • object containing request customizations
        */
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 4e221512209efa45588b5f4ba69507ad2d52abcf50948839f29eee2a9af4b83b'
        
            }
        });
        console.log(response.data.results);
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}   

export default App;