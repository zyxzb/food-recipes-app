import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const PreviousSearches = ({setSearchText}) => {

    const searches = ['pizza', 'burger', 'juice', 'soup', 'pudding', 'salad', 'lasagne', 'ice cream'];
    const {toggle} = useContext(ThemeContext);

    const handleOnChange = (e) => {
        setSearchText(e.target.value)
        
    }
    

    return (
        <div>
             <div className="previous-searches section">
                <h2 className={toggle && 'dark'}>Previous Searches</h2>
                <div className='previous-searches-container'>
                    {searches.map((search, index) => (
                        <div key={index} className={toggle ? 'search-item dark' : 'search-item'} style={{animationDelay: index * 0.1 + 's'}}>{search}</div>
                    ))}
                </div>
                <div className={'search-box'}>
                    <input 
                    className={toggle && 'dark'}
                    type="text"
                    placeholder='Search...'
                    onChange={handleOnChange}
                     />
                     <button className='btn'><FontAwesomeIcon icon={faSearch}/></button>
                </div>
            </div>
        </div>
    );
}

export default PreviousSearches;
