import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {

    const {toggle} = useContext(ThemeContext);

    return (
        <div className={ toggle ? 'footer container dark' : 'footer container'}>
            <div className="footer-section">
                <p className='title'><a href="#!">Foodrecipes.com</a></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo possimus ipsum, repellat enim quasi.</p>
                <p>&copy; {new Date().getFullYear()} | All Right Reserved</p>
            </div>
            <div className="footer-section">
                <p className='title'>Contact Us</p>
                <p>foodrecipes@gmail.com</p>
                <p>+123 456 789</p>
                <p>00-000 Warsaw</p>
            </div>
            <div className="footer-section">
                <p className='title'>Social Media</p>
                <p>Facefook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    );
}

export default Footer;
