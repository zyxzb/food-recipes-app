import { Link, useLocation } from 'react-router-dom';
import React, {useState} from 'react';
import Sidebar from './Sidebar';
import { faHome, faList, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isNightMode, setIsNightMode] = useState(false);
    const {toggle, toggleFunction} = useContext(ThemeContext);
    
    const location = useLocation();

    // const handleOnClick = () =>{
    //     setIsOpen(!isOpen)        
    // }

    const setThemeMode = () => {
         
        setIsNightMode(!isNightMode);
        toggleFunction()
        

        // !nightMode ? document.documentElement.style.setProperty('--background-color', '#0A0A0A') : document.documentElement.style.setProperty('--background-color', '#fff')

    }

    const links = [
    {
        name: 'Home',
        path: '/',
        icon: faHome,
    },
    {
        name: 'Recipes',
        path: '/recipes',
        icon: faList,
    }]

    const closeSidebar = () => {
        setIsOpen(false)
    }

   
    return (
        <>
        <div className={toggle ?  'navbar container dark' : 'navbar container'}

        // style={toggle ? {backgroundColor: "#0A0A0A"} : {}}
        >
            <Link to='/' href='#!' className='logo'>FoodRecipes</Link>
            <div className="nav-links">
                {links.map(link => (
                    <Link to={link.path}
                      href='#!' 
                      className={location.pathname === link.path ? 'nav-links active' : 'nav-links'}
                      key={link.path}>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className='theme-mode' onClick={setThemeMode}>
                {isNightMode ? 
                <FontAwesomeIcon icon={faMoon}/> 
                : 
                <FontAwesomeIcon icon={faSun}/>}
            </div>
           
            <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'sidebar-btn open' : 'sidebar-btn'} >
                <div className='btn'></div>
            </div>
        </div>
        {isOpen && <Sidebar closeSidebar={closeSidebar} links={links}/>}
        </>
    );
}

export default Navbar;
