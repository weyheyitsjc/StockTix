import React from 'react';
import './NavBar.css'

interface NavBarProps {
    brandName: string;
    imageSrc: string;
    navItems: string[];
}

// { brandName, imageSrc, navItems }: NavBarProps

const NavBar = () => {
    return (
        // fill in links and images
        <nav className='navbar'>
            <div className='logo'>
                <a href='#'><img alt="LOGO" /></a>
            </div>
            <div className='items'>
                <ol>
                    <li><a href='#'>Cities</a></li>
                    <li><a href='#'>Events</a></li>
                </ol> 
            </div>
            <div className='login'>
                <a href='#'>Log In 
                    <span className="arrow">&rarr;</span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;

