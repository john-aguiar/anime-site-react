import styles from './Footer.module.css'
import githubLogo from '../../images/github-logo.png'

export const Footer = () => {
    
    return(
     <footer>
        <span> Developed by <a href="https://github.com/john-aguiar"> <img src={githubLogo} className={styles.github_logo} alt="" /> john-aguiar </a>  © 2022</span>
        <span>Layout inspired by <a href="https://animeshouse.net/">animeshouse.net</a></span>
      </footer>
    )
}