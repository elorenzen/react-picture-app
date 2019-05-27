import React from 'react';

const ImageList = props => {
    
    const images = props.images.map(({id, urls, alt_description, description}) => {
        return (
            <div key={id}>
                <img src={urls.regular} alt={alt_description} />
                <p>{description}</p>
            </div>
        )
    });

    return (
        <div>{images}</div>
    )
};

export default ImageList;