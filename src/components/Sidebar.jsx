import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({links, closeSidebar}) => {
    const [navbar, setNavbar] = useState(false);

    const handleOnClick = () => {
        setNavbar(!navbar)
    }
    return (
        <div onClick={handleOnClick} className={navbar ? 'sidebar open' : 'sidebar'}>
            {links.map(link => (
                    <a href='#!' 
                        key={link.path} 
                        onClick={closeSidebar}
                        className='sidebar-link'>
                        <FontAwesomeIcon icon={link.icon} />
                        {link.name}
                    </a>
                ))}
                
        </div>
    );
}

export default Sidebar;
