
import styles from './Header.module.css';

import animelogo from '../../images/animesz-logo.png'
import profilelogo from "../../images/profile-user.png"
import searchLogo from '../../images/search-icon.png'

export const Header = ()=>{
    
    return(
        <header> 
        <div className={styles.header_content}>
  
          <div className={styles.header_left_side}>  
            <div>
            <div className={styles.logo_container}> <img className={styles.logo_brand} src={animelogo} alt="" /> </div>
            </div>
            <nav>
              <ul>
                <li>Random</li>
                <li>Animes</li>
                <li>Filmes</li>
                <li>Gêneros</li>
              </ul>
            </nav>
          </div>
  
          <div className={styles.header_right_side}>
            <div className={styles.search_input}>
             <input type="text" placeholder='Pesquisar...'/>
             <img src={searchLogo} alt="search logo" />
            </div>
           
            <img id={styles.profile_logo} src={profilelogo} alt="" />
          </div>
  
        </div>
        </header>
    )
}

export default Header;