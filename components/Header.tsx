import { Button } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';

const FLOW = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Work',
        link: '/work',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
];

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Asano's Portforio</h1>
            <div className={styles.nav}>
                {FLOW.map((text) => (
                    <Link href={text.link}>
                        <Button className={styles.button} variant="outlined" color="primary">
                            {text.name}
                        </Button>
                    </Link>
                ))}
            </div>
        </header>
    )
}