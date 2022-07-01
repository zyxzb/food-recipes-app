import React from 'react';
import CustomImages from './CustomImages';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const RecipeCardFiltered = ({recipe}) => {
    const {toggle} = useContext(ThemeContext);
    return (
        <div
            className={toggle
            ? 'recipe-card dark'
            : 'recipe-card'}>
            <CustomImages imgSrc={recipe.image}/>
            <div className="recipe-card-info">
                <img className='author-img' src={recipe.authorImg} alt=""/>
                <p
                    className={toggle
                    ? 'recipe-title dark'
                    : 'recipe-title'}>{recipe.title}</p>
                <p className='recipe-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a className='view-btn' href="#!">VIEW RECIPE</a>
            </div>
        </div>

    );
}

export default RecipeCardFiltered;
