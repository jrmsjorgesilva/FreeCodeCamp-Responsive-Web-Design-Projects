import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/css/Home.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link
                href="https://jmsoftwares.com.br"
                target="_blank"
                rel="noopener noreferrer"
            >
                <a>
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </Link>
        </footer>
    )
}

export default Footer