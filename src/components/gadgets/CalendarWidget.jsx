import "./CalendarWidget.css"

const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
]

const dailyMessages = [
    { emoji: "🎨", title: "¡Día de pintar!", sub: "Saca los colores y crea algo bonito hoy" },
    { emoji: "🍳", title: "¡Día de cocinar!", sub: "Prueba una receta nueva y sorpréndete" },
    { emoji: "🎵", title: "¡Día musical!", sub: "Pon tu playlist favorita y disfruta" },
    { emoji: "✏️", title: "¡Día de dibujar!", sub: "Llena una página de bocetos y diversión" },
    { emoji: "📚", title: "¡Día de leer!", sub: "Busca un libro y relájate un rato" },
    { emoji: "💛", title: "¡Buen día!", sub: "Hoy es un gran día para ser tú misma" },
    { emoji: "🌸", title: "¡Día creativo!", sub: "Explora algo nuevo y diviértete haciéndolo" },
]

function CalendarWidget() {
    const now = new Date()
    const day = now.getDate()
    const month = months[now.getMonth()]
    const year = now.getFullYear()
    const msg = dailyMessages[day % dailyMessages.length]

    return (
        <div className="calendar">
            <div className="cal-title">Calendario de Ali 📅</div>

            <div className="cal-date">
                <div className="cal-day">{day}</div>
                <div className="cal-month">{month} {year}</div>
            </div>

            <div className="cal-msg">
                <span className="cal-emoji">{msg.emoji}</span>
                <div className="cal-msg-title">{msg.title}</div>
                <div className="cal-msg-sub">{msg.sub}</div>
            </div>
        </div>
    )
}

export default CalendarWidget