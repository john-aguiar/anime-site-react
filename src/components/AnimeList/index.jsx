import styles from './AnimeList.module.css'
import { useContext, useEffect, useState } from 'react'




export const AnimeList = (  )=> {
    const [url, setUrl] = useState('https://api.aniapi.com/v1/anime?&page=1&per_page=50');
    const [animeList, setAnimeList] = useState([])


    const loadAnimes = async () => {
      let response = await fetch(url);
      let json = await response.json()
      setAnimeList(json.data.documents)
  // Retorna um array de objetos
    }

      function clickAnimeLoad(id){        
        console.log(`https://api.aniapi.com/v1/anime/${id}`)
      }

    useEffect(()=>{
        loadAnimes()
      },[])

      function formatTitle(string){
        if(string == undefined || string == 'undefined' || string == ''){
          return 
        }
      
        if(string.length > 16){
           let newString = string.slice(0, 16)+'...'
           return newString
        }
        return string
      }

    return(
        <div className={styles.animelist_container}>
       
           {animeList.map((item, key)=>(
            <div onClick={()=>clickAnimeLoad(item.id)} key={key} className={styles.anime_card}>
                <img className={styles.cover_img} src={item.cover_image} alt={item.titles.en} />
                <span>{formatTitle(item.titles.en)}</span> 
            </div>
            ))}
        </div>
    )
}

export default AnimeList;