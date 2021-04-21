import Link from 'next/link'
import Header from '../components/Header'
import styles from './index.module.scss';
import Image from 'next/image'
import React from 'react';
import Footer from '../components/Footer';


const IndexPage = () => (
  <div className={styles.body}>
    <Header />
    <div className={styles.image}>
      <Image
      src="/top.jpg"
      width={1024}
      height={550}
    />
    </div>
    <div className={styles.title}>
      <h1>Welcome to<br />Asano's portfolio</h1>
    </div>
    <Footer />
  </div>
)

export default IndexPage
