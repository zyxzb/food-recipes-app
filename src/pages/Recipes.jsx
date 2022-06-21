import React from 'react';
import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {

    return (
        <div className='recipes container'>
            <PreviousSearches/>
            <div className="recipes">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>
        </div>
    );
}

export default Recipes;
