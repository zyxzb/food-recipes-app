import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ChiefsSection = () => {

    const chiefs = [
        {
            name: "Chief Name",
            img: "/img/top-chiefs/img_1.jpg",
            recipes: "10",
            cuisine: "Mexican",
         },
        {
            name: "Chief Name",
            img: "/img/top-chiefs/img_2.jpg",
            recipes: "11",
            cuisine: "Mexican",
         },
        {
            name: "Chief Name",
            img: "/img/top-chiefs/img_3.jpg",
            recipes: "9",
            cuisine: "Mexican",
         },
        {
            name: "Chief Name",
            img: "/img/top-chiefs/img_4.jpg",
            recipes: "14",
            cuisine: "Mexican",
         },
        {
            name: "Chief Name",
            img: "/img/top-chiefs/img_5.jpg",
            recipes: "21",
            cuisine: "Mexican",
         },
        {
            name: "Chief Name",
            img: "/img/top-chiefs/img_6.jpg",
            recipes: "10",
            cuisine: "Mexican",
         },
    ]

    return (
        <>
            <h2 className='title'>Chiefs Sections</h2>
            <div className='top-chiefs-container'>
                {chiefs.map((chief, index) => (
                   <div className='chief-card'key={index} >
                    <div className='chief-card-image'>
                        <img src={chief.img} alt=""/>
                    </div>
                    <div className="chief-card-info">
                        <h3 className='chief-card-info-name'>{chief.name}</h3>
                        <p className='chief-card-info-desctription'>Recipes: <b>{chief.recipes} </b></p>
                        <p className='chief-card-info-desctription'>Cuisine: <b>{chief.cuisine}</b></p>
                        <p className='chief-icons'>
                        <FontAwesomeIcon className='buzz' icon={faFacebook}/>
                        <FontAwesomeIcon className='buzz' icon={faTwitter}/>
                        <FontAwesomeIcon className='buzz' icon={faInstagram}/>
                        </p>
                    </div>
                </div> 
                ))}
                
            </div>
        </>
    );
}

export default ChiefsSection;
