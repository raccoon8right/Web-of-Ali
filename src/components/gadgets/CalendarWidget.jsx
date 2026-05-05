import "./CalendarWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
]

const weekDays = [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
]

// Días especiales — mes es 0-indexado (0=enero, 11=diciembre)
const specialDays = [
    // 🌸 Días de flores
    {
        month: 1, day: 14,
        type: "flowers",
        title: "¡Feliz San Valentín, Ali! 💝",
        message: "Hoy el amor florece. Te mereces todas las flores del mundo.",
        flowers: "🌹🌷🌸",
    },
    {
        month: 4, day: 27,
        type: "flowers",
        title: "¡Feliz Día de la Madre! 🌺",
        message: "Un día para celebrar a todas las madres hermosas del mundo.",
        flowers: "🌸🌼🌺",
    },
    {
        month: 2, day: 21,
        type: "flowers",
        title: "¡Flores amarillas para ti, Ali! 🌻",
        message: "El primer día de otoño trae flores amarillas llenas de alegría.",
        flowers: "🌻🌼💛",
    },
    {
        month: 8, day: 21,
        type: "flowers",
        title: "¡Flores amarillas para ti, Ali! 🌻",
        message: "El primer día de primavera trae flores amarillas llenas de vida.",
        flowers: "🌻🌼💛",
    },

    // 🎂 Cumpleaños de Ali
    {
        month: 10, day: 6,
        type: "birthday",
        title: "¡Feliz cumpleaños, Ali! 🎂",
        message: "Que este nuevo año de vida esté lleno de colores, música y amor. ¡Te lo mereces todo!",
        flowers: "🎂🎉🎁",
    },

    // 🎉 Feriados bolivianos
    {
        month: 0, day: 1,
        type: "holiday",
        title: "¡Feliz Año Nuevo! 🎆",
        message: "Un nuevo año lleno de aventuras y creatividad te espera, Ali.",
        flowers: "🎆✨🥂",
    },
    {
        month: 1, day: 2,
        type: "holiday",
        title: "Día de la Candelaria 🕯️",
        message: "Que la luz de hoy ilumine todos tus proyectos creativos.",
        flowers: "🕯️🌟✨",
    },
    {
        month: 4, day: 1,
        type: "holiday",
        title: "¡Día del Trabajo! 💪",
        message: "Hoy celebramos el esfuerzo y la dedicación. ¡Descansa y disfruta, Ali!",
        flowers: "💪🌟🎉",
    },
    {
        month: 7, day: 6,
        type: "holiday",
        title: "¡Feliz Día de Bolivia! 🇧🇴",
        message: "Un día para celebrar esta tierra hermosa y todo lo que nos da.",
        flowers: "🇧🇴🎉✨",
    },
    {
        month: 10, day: 2,
        type: "holiday",
        title: "Día de los Difuntos 🕯️",
        message: "Un día para recordar con amor a quienes ya no están.",
        flowers: "🕯️🌸💜",
    },
    {
        month: 11, day: 25,
        type: "holiday",
        title: "¡Feliz Navidad, Ali! 🎄",
        message: "Que esta navidad te traiga paz, alegría y muchos colores.",
        flowers: "🎄🎁⭐",
    },
    {
        month: 11, day: 31,
        type: "holiday",
        title: "¡Feliz Nochevieja, Ali! 🎆",
        message: "Que el último día del año te encuentre feliz y lista para lo que viene.",
        flowers: "🎆🥂✨",
    },
]

const dailyMessages = [
    { emoji: "🎨", title: "¡Día de pintar!", sub: "Saca los colores y crea algo bonito hoy" },
    { emoji: "🍳", title: "¡Día de cocinar!", sub: "Prueba una receta nueva y sorpréndete" },
    { emoji: "🎵", title: "¡Día musical!", sub: "Pon tu playlist favorita y disfruta" },
    { emoji: "✏️", title: "¡Día de dibujar!", sub: "Llena una página de bocetos" },
    { emoji: "📚", title: "¡Día de leer!", sub: "Busca un libro y relájate un rato" },
    { emoji: "💛", title: "¡Buen día, Ali!", sub: "Hoy es un gran día para ser tú misma" },
    { emoji: "🐱", title: "¡Abraza a Clairo!", sub: "Un día perfecto para mimos gatunos" },
]

function CalendarWidget() {
    const now = new Date()
    const day = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
    const wDay = weekDays[now.getDay()]

    // Buscar si hoy es un día especial
    const special = specialDays.find(s => s.month === month && s.day === day)

    // Mensaje diario normal
    const daily = dailyMessages[day % dailyMessages.length]

    return (
        <div className="calendar">
            <div className="cal-title">
                <FontAwesomeIcon icon={["fas", "calendar-days"]} /> Calendario de Ali
            </div>

            {/* Fecha */}
            <div className="cal-date">
                <div className="cal-weekday">{wDay}</div>
                <div className="cal-day">{day}</div>
                <div className="cal-month">{months[month]} {year}</div>
            </div>

            {/* Mensaje especial o normal */}
            {special ? (
                <div className={`cal-special cal-special--${special.type}`}>
                    <div className="cal-special-flowers">{special.flowers}</div>
                    <div className="cal-special-title">{special.title}</div>
                    <div className="cal-special-message">{special.message}</div>
                </div>
            ) : (
                <div className="cal-msg">
                    <span className="cal-emoji">{daily.emoji}</span>
                    <div className="cal-msg-title">{daily.title}</div>
                    <div className="cal-msg-sub">{daily.sub}</div>
                </div>
            )}
        </div>
    )
}

export default CalendarWidget