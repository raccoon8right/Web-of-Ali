import { useMemo } from "react"
import "./Hero.css"
import AliPhoto from "../assets/Ali.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const tags = [
    { icon: "palette", label: "Arte" },
    { icon: "music", label: "Música" },
    { icon: "utensils", label: "Cocina" },
    { icon: "pencil", label: "Dibujo" },
    { icon: "cat", label: "Gatos" },
    { icon: "plane", label: "Viajes" },
]

// Posiciones fijas para las huellas, fuera del componente
// así no se recalculan en cada render
const pawPositions = [
    { left: "5%", top: "10%", delay: "0s", size: "1.4rem", rotate: "20deg" },
    { left: "15%", top: "70%", delay: "0.8s", size: "1.8rem", rotate: "120deg" },
    { left: "25%", top: "30%", delay: "1.6s", size: "1.1rem", rotate: "200deg" },
    { left: "35%", top: "80%", delay: "2.4s", size: "1.6rem", rotate: "45deg" },
    { left: "48%", top: "15%", delay: "0.4s", size: "2rem", rotate: "300deg" },
    { left: "55%", top: "60%", delay: "1.2s", size: "1.3rem", rotate: "90deg" },
    { left: "65%", top: "25%", delay: "2s", size: "1.7rem", rotate: "160deg" },
    { left: "72%", top: "75%", delay: "0.6s", size: "1.2rem", rotate: "250deg" },
    { left: "80%", top: "40%", delay: "1.8s", size: "1.9rem", rotate: "330deg" },
    { left: "88%", top: "85%", delay: "2.6s", size: "1.4rem", rotate: "70deg" },
    { left: "92%", top: "20%", delay: "1s", size: "1.6rem", rotate: "180deg" },
    { left: "3%", top: "50%", delay: "2.2s", size: "2.2rem", rotate: "15deg" },
]

function Hero() {
    return (
        <section className="hero">

            {/* Huellas animadas */}
            <div className="paws-container">
                {pawPositions.map((pos, i) => (
                    <span
                        key={i}
                        className="paw"
                        style={{
                            left: pos.left,
                            top: pos.top,
                            animationDelay: pos.delay,
                            fontSize: pos.size,
                            "--rotate": pos.rotate,
                        }}
                    >
                        <FontAwesomeIcon icon="paw" />
                    </span>
                ))}
            </div>

            {/* Contenido */}
            <div className="hero-content">
                <div className="hero-avatar">
                    <img src={AliPhoto} alt="Ali" />
                </div>

                <div className="hero-text">
                    <p className="hero-pretitle">— De los rincones del mundo —</p>
                    <h1 className="hero-title">Yo soy Ali,<br />y este es mi reino.</h1>
                    <p className="hero-desc">
                        「 Fall seven times, stand up eight. 」<br />
                        <span>七転び八起き — Nana korobi ya oki</span>
                    </p>

                    <div className="hero-tags">
                        {tags.map(({ icon, label }) => (
                            <span key={label} className="htag">
                                <FontAwesomeIcon icon={icon} /> {label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero