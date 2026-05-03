import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import "./DiceWidget.css"

const activities = [
    "¡Pinta algo hoy!",
    "¡Cocina una receta nueva!",
    "¡Escucha un álbum completo!",
    "¡Dibuja lo que ves!",
    "¡Sal a explorar!",
    "¡Toma fotos hoy!",
]

function DiceWidget() {
    const [activity, setActivity] = useState(null)

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

export default DiceWidget