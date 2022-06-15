import React from 'react';

const Section1 = () => {

    const list = [

        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet"
]


    return (
        <>
            <div className="col pr">
                <img src="/img/gallery/img_10.jpg" alt="" srcset="" />
            </div>
            <div className="col">
                    <h2 className='title'> Section 1</h2>
                    {list.map((item, index) => (
                        <p className='info item' key={index}>{item}</p>
                    ))}
                    <button className='btn-main'>Button</button>
            </div>
           
        </>
    );
}

export default Section1;
