import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Section1 = () => {

    const list = [

        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet"
];

const {toggle} = useContext(ThemeContext);

    return (
        <>
            <div className="col pr">
                <img src="/img/gallery/img_10.jpg" alt="" srcset="" />
            </div>
            <div className="col">
                    <h2 className={toggle ? 'title dark' : 'title'}> Section 1</h2>
                    {list.map((item, index) => (
                        <p className='info item' key={index}>{item}</p>
                    ))}
                    <button className={toggle ? 'btn-main dark' : 'btn-main'}>Button</button>
            </div>
           
        </>
    );
}

export default Section1;
