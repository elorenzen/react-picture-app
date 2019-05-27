import React from 'react';

const ImageList = props => {
    
    const images = props.images.map(image => {
        return (
            <div>
                <img src={image.urls.regular} alt={image.alt_description} />
                <p>{image.description}</p>
            </div>
        )
    });

    return (
        <div>{images}</div>
    )
};

export default ImageList;