import "./SobreMi.css"

const hobbies = [
    { icon: "🎨", label: "Pintura", color: "var(--pastel-rosa)", text: "var(--rojo-oscuro)" },
    { icon: "✏️", label: "Dibujo", color: "var(--pastel-lila)", text: "#6741d9" },
    { icon: "🍳", label: "Cocina", color: "var(--pastel-verde)", text: "#2d6a4f" },
    { icon: "🎵", label: "Música", color: "var(--azul-suave)", text: "var(--azul-oscuro)" },
]

function SobreMi() {
    return (
        <div className="sobre-mi">
            <h2 className="page-title">👩‍🎨 Sobre mí</h2>

            <div className="about-box">
                <div className="about-avatar">A</div>
                <div className="about-content">
                    <h3 className="about-name">¡Hola! Soy Alejandra</h3>
                    <p className="about-desc">
                        Pero todos me dicen Ali 😊 Soy una chica apasionada por el arte,
                        la música, la cocina y todo lo creativo. Este blog es mi rincón
                        personal donde comparto lo que amo con el mundo. ¡Bienvenida/o!
                    </p>

                    <div className="hobbies-title">Mis hobbies</div>
                    <div className="hobbies">
                        {hobbies.map(({ icon, label, color, text }) => (
                            <span
                                key={label}
                                className="hobby-chip"
                                style={{ background: color, color: text }}
                            >
                                {icon} {label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="fun-facts">
                <div className="facts-title">Datos curiosos de Ali ✨</div>
                <div className="facts-grid">
                    <div className="fact-card" style={{ background: "var(--pastel-rosa)" }}>
                        <span className="fact-icon">🎨</span>
                        <span className="fact-text">Pinta desde los 8 años</span>
                    </div>
                    <div className="fact-card" style={{ background: "var(--azul-suave)" }}>
                        <span className="fact-icon">🎵</span>
                        <span className="fact-text">Escucha música todo el día</span>
                    </div>
                    <div className="fact-card" style={{ background: "var(--pastel-verde)" }}>
                        <span className="fact-icon">🍳</span>
                        <span className="fact-text">Su plato favorito es el sushi</span>
                    </div>
                    <div className="fact-card" style={{ background: "var(--pastel-lila)" }}>
                        <span className="fact-icon">✏️</span>
                        <span className="fact-text">Lleva un cuaderno de bocetos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi