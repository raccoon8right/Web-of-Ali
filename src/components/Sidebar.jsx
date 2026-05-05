import { useState } from "react"
import "./Sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MusicPlayer from "./gadgets/MusicPlayer"
import CalendarWidget from "./gadgets/CalendarWidget"
import DiceWidget from "./gadgets/DiceWidget"

const gadgets = [
    { id: "music", icon: "music", label: "Música", },
    { id: "cal", icon: "calendar-days", label: "Calendario", },
    { id: "dice", icon: "dice", label: "Actividad", },
]

function Sidebar({ activePanel, setActivePanel, isPlaying, setIsPlaying }) {
    const togglePanel = (id) => {
        setActivePanel(activePanel === id ? null : id)
    }

    return (
        <aside className="sidebar">
            {gadgets.map(({ id, icon, label }) => (
                <div key={id} className="gadget-wrapper">

                    {/* Botón */}
                    <button
                        className={`gadget-btn ${activePanel === id ? "active" : ""}`}
                        onClick={() => togglePanel(id)}
                    >
                        <FontAwesomeIcon
                            icon={icon}
                            className={`gadget-icon ${id === "music" && isPlaying && activePanel !== id ? "music-playing" : ""}`}
                        />
                        <span className="gadget-tooltip">{label}</span>
                    </button>

                </div>
            ))}

            {/* MusicPlayer siempre montado, solo visible cuando está activo */}
            <div
                className="gadget-panel"
                style={{ display: activePanel === "music" ? "block" : "none" }}
            >
                <div className="panel-header">
                    <button className="panel-close" onClick={() => setActivePanel(null)}>
                        <FontAwesomeIcon icon="xmark" />
                    </button>
                </div>
                <MusicPlayer setIsPlaying={setIsPlaying} />
            </div>

            {/* CalendarWidget — se monta/desmonta normal */}
            {activePanel === "cal" && (
                <div className="gadget-panel">
                    <div className="panel-header">
                        <button className="panel-close" onClick={() => setActivePanel(null)}>
                            <FontAwesomeIcon icon="xmark" />
                        </button>
                    </div>
                    <CalendarWidget />
                </div>
            )}

            {/* DiceWidget — se monta/desmonta normal */}
            {activePanel === "dice" && (
                <div className="gadget-panel">
                    <div className="panel-header">
                        <button className="panel-close" onClick={() => setActivePanel(null)}>
                            <FontAwesomeIcon icon="xmark" />
                        </button>
                    </div>
                    <DiceWidget />
                </div>
            )}

        </aside>
    )
}

export default Sidebar