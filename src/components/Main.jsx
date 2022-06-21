import React from 'react';
import CustomImages from './CustomImages';
import Section1 from './Section1';
import QuoteSection from './QuoteSection';
import ChiefsSection from './ChiefsSection';


const Main = () => {

    const images = [

        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg",
    ]

    return (
        <div className='main container'>
            <div className="section">
                <div className="col pr">
                    <h1 className='title'>Food</h1>
                    <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam totam magni ullam ipsa sapiente esse, at tempore reprehenderit distinctio sint laboriosam. Rerum, mollitia hic maxime sint quis nemo quasi.</p>
                    <button className='btn-main'>Button</button>
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
