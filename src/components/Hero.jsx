import { useState } from "react"  // ← useState en lugar de useMemo
import "./Hero.css"
import AliPhoto from "../assets/Ali.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const tags = [
    { icon: "palette", label: "Arte", color: "#ffd6e8", textColor: "#c1121f", placeholder: "https://placehold.co/160x100/ffd6e8/c1121f?text=Arte" },
    { icon: "music", label: "Música", color: "#d6eaff", textColor: "#1971c2", placeholder: "https://placehold.co/160x100/d6eaff/1971c2?text=Musica" },
    { icon: "utensils", label: "Cocina", color: "#d6f5e3", textColor: "#2d6a4f", placeholder: "https://placehold.co/160x100/d6f5e3/2d6a4f?text=Cocina" },
    { icon: "pencil", label: "Dibujo", color: "#efe6ff", textColor: "#6741d9", placeholder: "https://placehold.co/160x100/efe6ff/6741d9?text=Dibujo" },
    { icon: "cat", label: "Gatos", color: "#fff3b0", textColor: "#a0700a", placeholder: "https://placehold.co/160x100/fff3b0/a0700a?text=Clairo" },
    { icon: "plane", label: "Viajes", color: "#d6eaff", textColor: "#1971c2", placeholder: "https://placehold.co/160x100/d6eaff/1971c2?text=Viajes" },
]

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
            <div className="paws-container">
                {pawPositions.map((pos, i) => (
                    <span key={i} className="paw" style={{ left: pos.left, top: pos.top, animationDelay: pos.delay, fontSize: pos.size, "--rotate": pos.rotate }}>
                        <FontAwesomeIcon icon="paw" />
                    </span>
                ))}
            </div>

            <div className="hero-content">
                <div className="hero-avatar">
                    <img src={AliPhoto} alt="Ali" />
                </div>

                <div className="hero-text">
                    <p className="hero-pretitle">— De los rincones del mundo —</p>
                    <h1 className="hero-title">Yo soy Alejandra,<br />y este es mi reino.</h1>
                    <p className="hero-desc">
                        「 Fall seven times, stand up eight. 」<br />
                        <span>七転び八起き — Nana korobi ya oki</span>
                    </p>

                    <div className="hero-tags">
                        {tags.map((tag) => (
                            <span
                                key={tag.label}
                                className="htag"
                                style={{ "--tag-color": tag.color, "--tag-text": tag.textColor }}
                            >
                                <FontAwesomeIcon icon={tag.icon} />
                                {tag.label}
                                <div className="tag-tooltip" style={{ "--tag-color": tag.color, "--tag-text": tag.textColor }}>
                                    <img src={tag.placeholder} alt={tag.label} className="tag-tooltip-img" />
                                    <span className="tag-tooltip-label">{tag.label}</span>
                                </div>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero