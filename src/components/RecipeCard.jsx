import React from 'react';
import RecipeCardFiltered from './RecipeCardFiltered';


const RecipeCard = ({recipes}) => {

    return (
        <>
         {recipes.map((recipe, index) => <RecipeCardFiltered recipe={recipe} key={index}/> )} 
        </>

    // disabled map and added filter method , also created new component here - "RecipeCartFiltered"

    //     <div className={toggle ? 'recipe-card dark' : 'recipe-card'}>
    //         <CustomImages imgSrc={recipe.image} />
    //         <div className="recipe-card-info">
    //             <img className='author-img' src={recipe.authorImg} alt="" />
    //             <p className={toggle ? 'recipe-title dark' : 'recipe-title'}>{recipe.title}</p>
    //             <p className='recipe-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    //             <a className='view-btn' href="#!">VIEW RECIPE</a>
    //         </div>
    //     </div>
    // );
    );
}

export default RecipeCard;
