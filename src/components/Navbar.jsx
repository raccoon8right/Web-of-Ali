import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const links = [
    { id: "inicio", label: "Inicio", icon: "house" },
    { id: "blog", label: "Blog", icon: "pen-nib" },
    { id: "sobre", label: "Sobre mí", icon: "user" },
    { id: "contacto", label: "Contacto", icon: "envelope" },
]

function Navbar({ currentPage, setCurrentPage }) {
    return (
        <nav className="navbar">
            <div
                className="nav-logo"
                onClick={() => setCurrentPage("inicio")}
            >
                <FontAwesomeIcon icon="cat" className="nav-logo-icon" />
                <span>Ali's Web</span>
            </div>

            <ul className="nav-links">
                {links.map(link => (
                    <li key={link.id}>
                        <button
                            className={`nav-btn ${currentPage === link.id ? "active" : ""}`}
                            onClick={() => setCurrentPage(link.id)}
                        >
                            <FontAwesomeIcon icon={link.icon} className="nav-btn-icon" />
                            <span>{link.label}</span>
                            {currentPage === link.id && <span className="nav-dot" />}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar