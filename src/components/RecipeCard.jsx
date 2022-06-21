import React from 'react';
import CustomImages from './CustomImages';

const RecipeCard = () => {
    return (
        <div className='recipe-card'>
            <CustomImages imgSrc='/img/gallery/img_1.jpg' />
            <div className="recipe-card-info">
                <img className='author-img' src='/img/top-chiefs/img_1.jpg' alt="" />
                <p className='recipe-title'> Chicken Pan Pizza</p>
                <p className='recipe-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a className='view-btn' href="#!">VIEW RECIPE</a>
               
            </div>
        </div>
    );
}

export default RecipeCard;
