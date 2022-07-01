import React from 'react';

const CustomImages = ({imgSrc}) => {
    return (
        <div className='custom-image'>
            <img src={imgSrc} alt="food-img"/>
        </div>
    );
}

export default CustomImages;
