'use client'
import DropDown from '../dropdown/dropdown';
import styles from './header.module.css';
import Link from 'next/link';
import { useState } from 'react';





 function Header() {


    const [type, setType] = useState('');


    function teste() {
        if (type === '') {
            setType(true);
        } else {
            setType('');
        }
    }
    

    return (
        <header className={styles.mainContainer}>
            <nav className={styles.nav}>

                <div onClick={teste} className={styles.menu}>
                    <div className={styles.menuLine}></div>
                    <div className={styles.menuLine}></div>
                    <div className={styles.menuLine}></div>
                </div>

                <DropDown type={type} />

                <Link className={styles.logo} href="/">OCTOPUS</Link>
                
            </nav>

        </header>
    );
}




export default Header;