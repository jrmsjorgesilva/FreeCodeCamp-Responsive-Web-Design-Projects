import React, { useState, useEffect } from 'react'
import styles from '../styles/css/Nav.module.css'
import Link from 'next/link'
import { FaClosedCaptioning, FaTimes, FaBars } from 'react-icons/fa' 

const Nav = () => {

  const [toggleNav, setToggleNav] = useState(() => false);

  return (
    <nav className={styles.navbar}>

        <aside 
            className={styles.navbar__menu}
        >
            <a 
                onClick={() => setToggleNav(() => !toggleNav)}
            >
                <FaBars style={{ fontSize: '52px' }} />
            </a>
        </aside>

        <div className={toggleNav ? styles.is__active__navbar : styles.is__inactive__navbar}>
            
            <a 
                className={styles.navbar__close}
                onClick={() => setToggleNav(() => !toggleNav)}
            >
                <FaTimes 
                    style={{ 
                        position: 'fixed',
                        top: '30px',
                        right: '30px',
                        color: 'white',
                        fontSize: '72px',
                    }} 
                />
            </a>

            <Link 
                href="/tribute"
                target="_blank"
                rel="noopener noreferrer"
            >
                <a 
                    className={styles.navbar__item}
                    onClick={() => setToggleNav(() => !toggleNav)}
                >
                    Tribute Page
                </a>
            </Link>
            
            <Link 
                href="/surveyform"
                target="_blank"
                rel="noopener noreferrer"
            >
                <a 
                    className={styles.navbar__item}
                    onClick={() => setToggleNav(() => !toggleNav)}
                >
                    Survey Form
                </a>
            </Link>

            <Link 
                href="/docs"
                target="_blank"
                rel="noopener noreferrer"
            >
                <a 
                    className={styles.navbar__item}
                    onClick={() => setToggleNav(() => !toggleNav)}
                >
                    Technical Docs
                </a>
            </Link>

            <Link 
                href="landingpage"
                target="_blank"
                rel="noopener noreferrer"
            >
                <a 
                    className={styles.navbar__item}
                    onClick={() => setToggleNav(() => !toggleNav)}
                >
                    Landing Page
                </a>
            </Link>

            <Link 
                href="/portfolio"
                target="_blank"
                rel="noopener noreferrer"
            >
                <a 
                    className={styles.navbar__item}
                    onClick={() => setToggleNav(() => !toggleNav)}
                >
                    Portfolio
                </a>
            </Link>
        </div>

    </nav>
  )
}

export default Nav