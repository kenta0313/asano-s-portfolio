import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from './Footer.module.scss';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Asano's Portfolio</p>
            <FontAwesomeIcon icon={faTwitter} />&nbsp;&nbsp;
            <FontAwesomeIcon icon={faGithub} />
        </footer>
    )
}