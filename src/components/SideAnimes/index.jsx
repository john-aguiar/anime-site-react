import { useState, useEffect } from 'react'
import styles from './SideAnimes.module.css'

export const SideAnimes = () => {
        const [sideAnimeList, setSideAnimeList] = useState([])

        const loadSideAnimes = async ()=> {
        let response = await fetch('https://api.aniapi.com/v1/anime?&page=2&per_page=24')
        let json = await response.json();
        let data = json.data.documents;
        setSideAnimeList(data)       
      }
      loadSideAnimes()

    return (
        <div className={styles.side_animes}>
            <span>Em alta</span> 
            {sideAnimeList.map((item, index)=>(
              item.titles.en ? 
                <div key={index} className={styles.anime_side_card}>
                <img className={styles.banner_img} src={item.banner_image} alt={item.titles.en} />
                <span className={styles.anime_side_title_absolute}>{item.titles.en}</span>
                </div>
              : ''
            ))
            }
      </div>
    )
}

export default SideAnimes;