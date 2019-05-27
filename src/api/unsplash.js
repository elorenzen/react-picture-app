import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 4e221512209efa45588b5f4ba69507ad2d52abcf50948839f29eee2a9af4b83b'
    }
})