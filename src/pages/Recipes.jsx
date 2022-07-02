import React,{useState} from 'react';
import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Recipes = () => {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",

        },
        {
            title: "Soup",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",

        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_3.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",

        },
        {
            title: "Lasagne",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg",

        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",

        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",

        },
        {
            title: "Pudding",
            image: "/img/gallery/img_7.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",

        },
        {
            title: "Burger",
            image: "/img/gallery/img_8.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",

        },
        {
            title: "Soup 2",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",

        },
        {
            title: "Pudding 2 Elo",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",

        },
        {
            title: "Lasagne 2",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg",

        },
        {
            title: "Lasagne 4",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg",

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
