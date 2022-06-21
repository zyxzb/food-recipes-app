import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PreviousSearches = () => {
    const searches = ['pizza', 'burger', 'juice', 'soup', 'pudding', 'salad', 'lasagne', 'ice cream']
    return (
        <div>
             <div className="previous-searches section">
                <h2>Previous Searches</h2>
                <div className='previous-searches-container'>
                    {searches.map((search, index) => (
                        <div key={index} className='search-item' style={{animationDelay: index * 0.1 + 's'}}>{search}</div>
                    ))}
                </div>
                <div className='search-box'>
                    <input 
                    type="text"
                    placeholder='Search...'
                     />
                     <button className='btn'><FontAwesomeIcon icon={faSearch}/></button>
                </div>
            </div>
        </div>
    );
}

export default PreviousSearches;
