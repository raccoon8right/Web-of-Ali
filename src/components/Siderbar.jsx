import "./Sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MusicPlayer from "./gadgets/MusicPlayer"
import CalendarWidget from "./gadgets/CalendarWidget"

const gadgets = [
    { id: "music", icon: "music", label: "Música", component: MusicPlayer },
    { id: "cal", icon: "calendar-days", label: "Calendario", component: CalendarWidget },
    { id: "dice", icon: "dice", label: "Actividad", component: DiceWidget },
]

function DiceWidget() {
    const activities = [
        "¡Pinta algo hoy!",
        "¡Cocina una receta nueva!",
        "¡Escucha un álbum completo!",
        "¡Dibuja lo que ves!",
        "¡Sal a explorar!",
        "¡Toma fotos hoy!",
    ]
    const [activity, setActivity] = React.useState(null)

    const roll = () => {
        const random = activities[Math.floor(Math.random() * activities.length)]
        setActivity(random)
    }

    return (
        <div className="dice-widget">
            <div className="dice-title">Actividad del día</div>
            <button className="dice-btn" onClick={roll}>
                <FontAwesomeIcon icon="dice" /> Lanzar
            </button>
            {activity && <div className="dice-result">{activity}</div>}
        </div>
    )
}

function Sidebar({ activePanel, setActivePanel }) {
    const togglePanel = (id) => {
        setActivePanel(activePanel === id ? null : id)
    }

    return (
        <aside className="sidebar">
            {gadgets.map(({ id, icon, label, component: Component }) => (
                <div key={id} className="gadget-wrapper">

                    {/* Botón */}
                    <button
                        className={`gadget-btn ${activePanel === id ? "active" : ""}`}
                        onClick={() => togglePanel(id)}
                    >
                        <FontAwesomeIcon icon={icon} className="gadget-icon" />
                        <span className="gadget-tooltip">{label}</span>
                    </button>

                    {/* Panel */}
                    {activePanel === id && (
                        <div className="gadget-panel">
                            <button
                                className="panel-close"
                                onClick={() => setActivePanel(null)}
                            >
                                <FontAwesomeIcon icon="xmark" />
                            </button>
                            <Component />
                        </div>
                    )}

                </div>
            ))}
        </aside>
    )
}

export default Sidebar