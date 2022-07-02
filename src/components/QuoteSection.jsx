import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
const QuoteSection = () => {
    return (
        <>
            <p className='quote-text'>
                <FontAwesomeIcon icon={faQuoteLeft}/>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eaque assumenda, porro ipsum fugit, exercitationem fuga iure consectetur veritatis officiis quia laboriosam illum temporibus soluta impedit quo repudiandae. Deserunt, libero!</p>
            <p className='quote-author'> -Adam Małysz</p>
        </>
    );
}

export default QuoteSection;
