import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Navbar from "./components/Navbar.jsx"
import Sidebar from "./components/Siderbar.jsx"
import Inicio from "./components/pages/Inicio.jsx"
import Blog from "./components/pages/Blog.jsx"
import SobreMi from "./components/pages/SobreMi.jsx"
import Contacto from "./components/pages/Contacto.jsx"
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('Inicio')
  const [activePanel, setActivePanel] = useState(null)

  return (
    <div>
      <Hero />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="layout">
        <Sidebar activePanel={activePanel} setActivePanel={setActivePanel} />
        <main className="main">
          {currentPage === "inicio"   && <Inicio setCurrentPage={setCurrentPage} />}
          {currentPage === "blog"     && <Blog />}
          {currentPage === "sobre"    && <SobreMi />}
          {currentPage === "contacto" && <Contacto />}
        </main>
      </div>
    </div>
  )
}

export default App
