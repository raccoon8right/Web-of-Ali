import "./Inicio.css"

const shortcuts = [
    { id: "blog", icon: "🎨", label: "Blog", color: "var(--pastel-rosa)", text: "var(--rojo-oscuro)" },
    { id: "sobre", icon: "👩‍🎨", label: "Sobre mí", color: "var(--azul-suave)", text: "var(--azul-oscuro)" },
    { id: "contacto", icon: "💌", label: "Contacto", color: "var(--pastel-verde)", text: "#2d6a4f" },
]

function Inicio({ setCurrentPage }) {
    return (
        <div className="inicio">
            <h2 className="page-title">✨ Bienvenida/o</h2>

            <p className="inicio-desc">
                Este es mi espacio personal donde comparto todo lo que me hace feliz:
                arte, música, recetas, dibujos y mucho más. Explora las secciones
                y siéntete como en casa 💛
            </p>

            <div className="shortcuts">
                {shortcuts.map(({ id, icon, label, color, text }) => (
                    <div
                        key={id}
                        className="shortcut-card"
                        style={{ background: color }}
                        onClick={() => setCurrentPage(id)}
                    >
                        <span className="shortcut-icon">{icon}</span>
                        <span className="shortcut-label" style={{ color: text }}>{label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Inicio