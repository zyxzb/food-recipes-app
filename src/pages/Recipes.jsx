import React,{useState} from 'react';
import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//images, copy and paste from another component ;/

import img21 from '../img/gallery/img_1.jpg';
import img22 from '../img/gallery/img_2.jpg';
import img23 from '../img/gallery/img_3.jpg';
import img24 from '../img/gallery/img_4.jpg';
import img25 from '../img/gallery/img_5.jpg';
import img26 from '../img/gallery/img_6.jpg';
import img27 from '../img/gallery/img_7.jpg';
import img28 from '../img/gallery/img_8.jpg';
import img29 from '../img/gallery/img_9.jpg';

import img32 from '../img/top-chiefs/img_1.jpg';
import img33 from '../img/top-chiefs/img_2.jpg';
import img34 from '../img/top-chiefs/img_3.jpg';
import img35 from '../img/top-chiefs/img_4.jpg';
import img36 from '../img/top-chiefs/img_5.jpg';
import img37 from '../img/top-chiefs/img_6.jpg';


const Recipes = () => {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: img21,
            authorImg: img32,

        },
        {
            title: "Soup",
            image: img22,
            authorImg: img33,

        },
        {
            title: "Chicken Pan Pizza",
            image: img23,
            authorImg: img34,

        },
        {
            title: "Lasagne",
            image: img24,
            authorImg: img35,

        },
        {
            title: "Chicken Pan Pizza",
            image: img25,
            authorImg: img36,

        },
        {
            title: "Chicken Pan Pizza",
            image: img26,
            authorImg: img37,

        },
        {
            title: "Pudding",
            image: img27,
            authorImg: img32,

        },
        {
            title: "Burger",
            image: img22,
            authorImg: img33,

        },
        {
            title: "Soup 2",
            image: img28,
            authorImg: img34,

        },
        {
            title: "Pudding 2 Elo",
            image: img23,
            authorImg: img35,

        },
        {
            title: "Lasagne 2",
            image: img28,
            authorImg: img36,

        },
        {
            title: "Lasagne 4",
            image: img29,
            authorImg: img37,

        },
    ];

    const {toggle} = useContext(ThemeContext);
    const [searchText,
        setSearchText] = useState('');

    return (
        <div className={toggle ? 'recipes container dark' : 'recipes container'}>
            <PreviousSearches setSearchText={setSearchText}/>
            <div className="recipes">

            {/* disabled map and added filter method */}

                 {/* {recipes.map((recipe,index) => (
                    <RecipeCard key={index} recipe={recipe}/>
                ))} */}
                <RecipeCard recipes={recipes.filter((el) => el.title.toLowerCase().includes(searchText))}/>
            </div>
        </div>
    );
}

export default Recipes;
