import React from 'react';
import CustomImages from './CustomImages';
import Section1 from './Section1';
import QuoteSection from './QuoteSection';
import ChiefsSection from './ChiefsSection';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//images
import img1 from '../img/gallery/img_1.jpg';
import img2 from '../img/gallery/img_2.jpg';
import img3 from '../img/gallery/img_3.jpg';
import img4 from '../img/gallery/img_4.jpg';
import img5 from '../img/gallery/img_5.jpg';
import img6 from '../img/gallery/img_6.jpg';
import img7 from '../img/gallery/img_7.jpg';
import img8 from '../img/gallery/img_8.jpg';
import img9 from '../img/gallery/img_9.jpg';

const Main = () => {

    const images = [
        
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
       
    ];
    
    const {toggle} = useContext(ThemeContext);

    return (
        <div className={toggle ? 'main container dark' :'main container'}>
            <div className="section">
                <div className="col pr">
                    <h1 className={toggle ? 'title dark' : 'title'}>Main Dishes</h1>
                    <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam totam magni ullam ipsa sapiente esse, at tempore reprehenderit distinctio sint laboriosam. Rerum, mollitia hic maxime sint quis nemo quasi.</p>
                    <button className={toggle ? 'btn-main dark' : 'btn-main'}>Button</button>
                </div>
                <div className="col gallery">
                    {images.map((img, index) => (
                        <CustomImages imgSrc={img} key={index} />
                    ))}
                </div>
            </div>
            <div className="section section-1">
                  <Section1/>          
            </div>
            <div className="section quote">
                <QuoteSection/>
            </div>
            <div className="section chiefs">
                <ChiefsSection/>
            </div>
        </div>
    );
}

export default Main;
