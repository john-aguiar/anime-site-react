import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('https://api.aniapi.com/v1/anime');
  const [animeList, setAnimeList] = useState([])

  const loadAnimes = async () => {
    let response = await fetch(url);
    let json = await response.json()
    setAnimeList(json.data.documents)
// Retorna um array de objetos
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


  return (
    <div className="App"> 

      <header> 
      <div className="logo-brand">logo do site</div>
      <nav>
        <ul>
          <li>Random</li>
          <li>Animes</li>
          <li>Filmes</li>
          <li>Gêneros</li>
        </ul>
      </nav>
      <input type="text" placeholder='Pesquisar...'/>
      <div>Image-login</div>

      </header>

      <div className="animelist-container">

        {animeList.map((item, key)=>(
          <div key={key} className="anime-card">
            <img className="cover-img"src={item.cover_image} alt={item.titles.en} />
            <span>{formatTitle(item.titles.en)}</span> 
          </div>
        ))}
        </div>
      <div className="side-animes">
        Lista de animes aqui
      </div>
    </div>
  )
}

export default App
