import React,{useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({links, closeSidebar}) => {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    const handleOnClick = () => {
        setNavbar(!navbar)
    }
    return (
        <div onClick={handleOnClick} className={navbar ? 'sidebar open' : 'sidebar'}>
            {links.map(link => (
                    <Link href='#!' 
                        to={link.path}
                        key={link.path} 
                        onClick={closeSidebar}
                        className={location.pathname === link.path ? 'sidebar-link active' : 'sidebar-link'}
                        // className='sidebar-link'
                        >
                        <FontAwesomeIcon icon={link.icon} />
                        {link.name}
                    </Link>
                ))}
        </div>
    );
}

export default Sidebar;
