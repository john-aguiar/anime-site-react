import './App.css'

import { Header } from './components/Header'
import { SideAnimes } from './components/SideAnimes'
import { AnimeList} from './components/AnimeList'
import { Footer } from './components/Footer'

function App() {
  return (

        <div className="App"> 
        <Header />   
        <main>
            <AnimeList />
            <SideAnimes />
        </main>
        <Footer />
     </div>

  )
}

export default App
