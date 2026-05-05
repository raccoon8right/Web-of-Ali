import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Navbar from "./components/Navbar.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Inicio from "./components/pages/Inicio.jsx"
import Blog from "./components/pages/Blog.jsx"
import Galeria from "./components/pages/Galeria.jsx"
import SobreMi from "./components/pages/SobreMi.jsx"
import Contacto from "./components/pages/Contacto.jsx"
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('inicio')
  const [activePanel, setActivePanel] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div>
      <Hero />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="layout">
        <Sidebar activePanel={activePanel} setActivePanel={setActivePanel} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <main className="main">
          {currentPage === "inicio" && <Inicio setCurrentPage={setCurrentPage} />}
          {currentPage === "blog" && <Blog />}
          {currentPage === "galeria" && <Galeria />}
          {currentPage === "sobre" && <SobreMi />}
          {currentPage === "contacto" && <Contacto />}
        </main>
      </div>
    </div>
  )
}

export default App
