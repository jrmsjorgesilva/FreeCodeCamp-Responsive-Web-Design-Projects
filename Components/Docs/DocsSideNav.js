import React from 'react'
import styles from '../../styles/css/Docs.module.css'
import Link from 'next/link'

const DocsSideNav = () => {
    return (
        <aside id="sidebar" className={styles.sidebar}>
            <header className={styles.docs__header}>JS Documentation</header>
            <ul>
                <li>
                    <Link className={styles.sidenav__link} href="#Introduction">
                        <a>
                            Introduction
                        </a>
                    </Link>
                </li>
                <li>

                    <Link className={styles.sidenav__link} href="#What_you_should_already_know">
                        What you should already know
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#JavaScript_and_Java">
                        JavaScript and Java
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#Hello_world">
                        Hello world
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#Variables">
                        Variables
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#Declaring_variables">
                        Declaring variables
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#Variable_scope">
                        Variable scope
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#Global_variables">
                        Global variables
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#Constants">
                        Constants
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#Data_types">
                        Data types
                    </Link>
                </li>
                <li>

                    <Link className={styles.sidenav__link} href="#if...else_statement">
                        if...else statement
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#while_statement">
                        while statement
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#Function_declarations">
                        Function declarations
                    </Link>
                </li>
                <li>
                    <Link className={styles.sidenav__link} href="#Reference">
                        Reference
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default DocsSideNav