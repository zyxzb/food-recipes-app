import React, {useState} from 'react';
import Sidebar from './Sidebar';
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () =>{
        setIsOpen(!isOpen)        
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
    },
    {
        name: 'Settings',
        path: '/settings',
        icon: faCog,
    }]

    const closeSidebar = () => {
        setIsOpen(false)
    }

    return (
        <>
        <div className='navbar container'>
            <a href='#!' className='logo'>FoodRecipes</a>
            <div className="nav-links">
                {links.map(link => (
                    <a href='#!' key={link.path}>{link.name}</a>
                ))}
                {/* <a href="#!">Home</a>
                <a href="#!">About</a>
                <a href="#!">Recipes</a> */}
            </div>
            <div onClick={handleOnClick} className={isOpen ? 'sidebar-btn open' : 'sidebar-btn'} >
                <div className='btn'></div>
            </div>
        </div>
        { isOpen && <Sidebar closeSidebar={closeSidebar} links={links}/>}

        </>
    );
}

export default Navbar;
