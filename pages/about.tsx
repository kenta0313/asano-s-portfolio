import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header'
import styles from './about.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faSass, faJsSquare, faReact, faNode, faPhp, faLaravel, faAws } from "@fortawesome/free-brands-svg-icons";

const AboutPage = () => (
  <div>
    <Header />
    <div className={styles.title}>
      <h1>About</h1>
      <p>Who I am</p>
      <p>Skill</p>
    </div>
    <div className={styles.icons}>
        <FontAwesomeIcon icon={faHtml5} color="red" size="5x"/>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faCss3} color="blue" size="5x"/>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faSass} color="hotpink" size="5x"/>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faJsSquare} color="yellow" size="5x"/>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faReact} color="aqua" size="5x"/>&nbsp;&nbsp;&nbsp;<br/><br/>
        <FontAwesomeIcon icon={faNode} color="green" size="5x"/>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faPhp} color="purple" size="5x"/>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faLaravel} color="red" size="5x"/>&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faAws} color="orangered" size="5x"/>&nbsp;&nbsp;&nbsp;
      </div>
    <Footer />
  </div>
)

export default AboutPage
