import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//images

import img12 from '../img/top-chiefs/img_1.jpg';
import img13 from '../img/top-chiefs/img_2.jpg';
import img14 from '../img/top-chiefs/img_3.jpg';
import img15 from '../img/top-chiefs/img_4.jpg';
import img16 from '../img/top-chiefs/img_5.jpg';
import img17 from '../img/top-chiefs/img_6.jpg';



const ChiefsSection = () => {

    const chiefs = [
        {
            name: "Chief Name",
            img: img12,
            recipes: "10",
            cuisine: "Mexican",
         },
        {
            name: "Chief Name",
            img: img13,
            recipes: "11",
            cuisine: "Mexican",
         },
        {
            name: "Chief Name",
            img: img14,
            recipes: "9",
            cuisine: "Mexican",
         },
        {
            name: "Chief Name",
            img: img15,
            recipes: "14",
            cuisine: "Mexican",
         },
        {
            name: "Chief Name",
            img: img16,
            recipes: "21",
            cuisine: "Mexican",
         },
        {
            name: "Chief Name",
            img: img17,
            recipes: "10",
            cuisine: "Mexican",
         },
    ];

    const {toggle} = useContext(ThemeContext);

    return (
        <>
            <h2 className={ toggle ? 'title dark' : 'title'}>Chiefs Sections</h2>
            <div className='top-chiefs-container'>
                {chiefs.map((chief, index) => (
                   <div className={toggle ? 'chief-card dark' : 'chief-card'} key={index} >
                    <div className='chief-card-image'>
                        <img src={chief.img} alt=""/>
                    </div>
                    <div className="chief-card-info">
                        <h3 className={toggle ? 
                            'chief-card-info-name dark' : 
                            'chief-card-info-name'}>
                                {chief.name}
                            </h3>
                        <p className={toggle ? 
                            'chief-card-info-desctription dark' : 'chief-card-info-desctription'}>
                                Recipes: <b>{chief.recipes} </b>
                                </p>
                        <p className={toggle ?'chief-card-info-desctription dark' :
                        'chief-card-info-desctription'}>
                                Cuisine: <b>{chief.cuisine}</b>
                            </p>
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
