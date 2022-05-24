import { useEffect, useState } from 'react'
import './App.css'
import animelogo from './images/animesz-logo.png'
import profilelogo from "./images/profile-user.png"
import searchLogo from './images/search-icon.png'
import githubLogo from './images/github-logo.png'

function App() {
  const [url, setUrl] = useState('https://api.aniapi.com/v1/anime?&page=1&per_page=50');
  const [animeList, setAnimeList] = useState([])
  const [sideAnimeList, setSideAnimeList] = useState([])

  const loadAnimes = async () => {
    let response = await fetch(url);
    let json = await response.json()
    setAnimeList(json.data.documents)
// Retorna um array de objetos
  }

  const loadSideAnimes = async ()=> {
    let response = await fetch('https://api.aniapi.com/v1/anime?&page=2&per_page=24')
    let json = await response.json();
    setSideAnimeList(json.data.documents)
  }
  useEffect(()=>{
    loadAnimes()
    loadSideAnimes()
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


  return (
    <div className="App"> 

      <header> 
      <div className="header-content">

        <div className="header-left-side">  
          <div>
          <div className="logo-container"> <img className="logo-brand" src={animelogo} alt="" /> </div>
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

        <div className="header-right-side">
          <div className='search-input'>
           <input  type="text" placeholder='Pesquisar...'/>
           <img src={searchLogo} alt="search logo" />
          </div>
         
          <img id="profile-logo" src={profilelogo} alt="" />
        </div>

      </div>
      </header>

      <main>
      <div className="animelist-container">
        {animeList.map((item, key)=>(
          <div key={key} className="anime-card">
            <img className="cover-img"src={item.cover_image} alt={item.titles.en} />
            <span>{formatTitle(item.titles.en)}</span> 
          </div>
        ))}
        </div>
        <div className="side-animes">
          Em alta
          {sideAnimeList.map((item, index)=>(
              <div key={index} className="anime-side-card">
                <img className='banner-img' src={item.banner_image} alt={item.titles.en} />
                <span className='anime-side-title-absolute'>{item.titles.en}</span>
              </div>
          ))}
        </div>
     </main>
     <footer>
       <span> Developed by <a href="https://github.com/john-aguiar"> <img src={githubLogo} className="github-logo" alt="" /> john-aguiar </a>  © 2022</span>
       <span>Layout inspired by <a href="https://animeshouse.net/">animeshouse.net</a></span>
     </footer>

    </div>
  )
}

export default App
