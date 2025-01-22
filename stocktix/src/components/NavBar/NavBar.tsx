import React from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {
    brandName: string;
    imageSrc: string;
    navItems: string[];
}

// { brandName, imageSrc, navItems }: NavBarProps

const NavBar = () => {
    return (
        // fill in links and images
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href='#'><img alt="LOGO" /></a>
            </div>
            <div className={styles.items}>
                <ol>
                    <li><a href='#'>Cities</a></li>
                    <li><a href='#'>Events</a></li>
                </ol> 
            </div>
            <div className={styles.login}>
                <a href='/login'>Log In 
                    <span className={styles.arrow}>&rarr;</span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;

