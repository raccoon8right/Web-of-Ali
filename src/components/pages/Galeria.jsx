import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Galeria.css"

// Importa tus archivos aquí cuando los tengas
// import clairo1 from "../../assets/gallery/clairo1.jpg"
import video1 from "../../assets/gallery/video1.mp4"

// Por ahora usamos placeholders
const items = [
    { id: 1, type: "image", src: "https://placehold.co/600x400/ffd6e8/e63946?text=Clairo+🐱", caption: "Clairo descansando" },
    { id: 2, type: "image", src: "https://placehold.co/600x400/d6eaff/1971c2?text=Clairo+🐾", caption: "Clairo jugando" },
    { id: 3, type: "image", src: "https://placehold.co/600x400/d6f5e3/2d6a4f?text=Ali+✨", caption: "Ali creando" },
    { id: 4, type: "image", src: "https://placehold.co/600x400/efe6ff/6741d9?text=Ali+🎨", caption: "Ali pintando" },
    { id: 5, type: "image", src: "https://placehold.co/600x400/fff3b0/a0700a?text=Clairo+😸", caption: "Clairo curioso" },
    { id: 6, type: "video", src: video1, caption: "Clairo y Ali jugando juntos" },
]

function Galeria() {
    const [current, setCurrent] = useState(0)
    const [lightbox, setLightbox] = useState(false)
    const [lightboxIdx, setLightboxIdx] = useState(0)
    const galleryRef = useRef(null)

    // Bloquea el scroll cuando el lightbox está abierto
    useEffect(() => {
        const blockScroll = (e) => e.preventDefault()

        if (lightbox) {
            document.body.style.overflow = "hidden"
            document.body.style.height = "100%"
            document.addEventListener("wheel", blockScroll, { passive: false })
            document.addEventListener("touchmove", blockScroll, { passive: false })
        } else {
            document.body.style.overflow = ""
            document.body.style.height = ""
            document.removeEventListener("wheel", blockScroll)
            document.removeEventListener("touchmove", blockScroll)
        }
        // Limpia al desmontar el componente
        return () => {
            document.body.style.overflow = ""
            document.body.style.height = ""
            document.removeEventListener("wheel", blockScroll)
            document.removeEventListener("touchmove", blockScroll)
        }
    }, [lightbox])

    const prev = () => setCurrent(c => (c - 1 + items.length) % items.length)
    const next = () => setCurrent(c => (c + 1) % items.length)

    const openLightbox = (idx) => {
        galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        setTimeout(() => {
            setLightboxIdx(idx)
            setLightbox(true)
        }, 400)
    }

    const prevLight = () => setLightboxIdx(i => (i - 1 + items.length) % items.length)
    const nextLight = () => setLightboxIdx(i => (i + 1) % items.length)

    // Índices visibles en el carrusel (actual + 2 a cada lado)
    const visibleCount = 3
    const getVisible = () => {
        const result = []
        for (let i = -1; i <= 1; i++) {
            const idx = (current + i + items.length) % items.length
            result.push({ ...items[idx], originalIdx: idx })
        }
        return result
    }

    return (
        <div className="galeria" ref={galleryRef}>
            <h2 className="page-title">
                <FontAwesomeIcon icon="images" /> Galería
            </h2>
            <p className="galeria-desc">Momentos de Clairo y Ali 🐱✨</p>

            {/* Carrusel */}
            <div className="carousel">
                <button className="carousel-arrow left" onClick={prev}>
                    <FontAwesomeIcon icon="chevron-left" />
                </button>

                <div className="carousel-track">
                    {getVisible().map((item, i) => (
                        <div
                            key={item.id}
                            className={`carousel-item ${i === 1 ? "active" : "side"}`}
                            onClick={() => i === 1 && openLightbox(item.originalIdx)}
                        >
                            {item.type === "image" ? (
                                <img src={item.src} alt={item.caption} />
                            ) : (
                                <video src={item.src} muted loop playsInline />
                            )}
                            {i === 1 && (
                                <div className="carousel-caption">
                                    <FontAwesomeIcon icon={item.type === "video" ? "play" : "expand"} />
                                    {item.caption}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button className="carousel-arrow right" onClick={next}>
                    <FontAwesomeIcon icon="chevron-right" />
                </button>
            </div>

            {/* Dots */}
            <div className="carousel-dots">
                {items.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === current ? "active" : ""}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div className="lightbox" onClick={() => setLightbox(false)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setLightbox(false)}>
                            <FontAwesomeIcon icon="xmark" />
                        </button>

                        <button className="lightbox-arrow left" onClick={prevLight}>
                            <FontAwesomeIcon icon="chevron-left" />
                        </button>

                        {items[lightboxIdx].type === "image" ? (
                            <img
                                src={items[lightboxIdx].src}
                                alt={items[lightboxIdx].caption}
                                className="lightbox-media"
                            />
                        ) : (
                            <video
                                src={items[lightboxIdx].src}
                                controls
                                autoPlay
                                className="lightbox-media"
                            />
                        )}

                        <button className="lightbox-arrow right" onClick={nextLight}>
                            <FontAwesomeIcon icon="chevron-right" />
                        </button>

                        <div className="lightbox-caption">{items[lightboxIdx].caption}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Galeria