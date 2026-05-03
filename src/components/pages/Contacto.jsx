import { useState } from "react"
import "./Contacto.css"

const initialForm = { name: "", email: "", message: "" }

function Contacto() {
    const [form, setForm] = useState(initialForm)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (!form.name || !form.email || !form.message) {
            setError("¡Completa todos los campos antes de enviar! 😊")
            return
        }
        setError("")
        setSent(true)
    }

    const handleReset = () => {
        setForm(initialForm)
        setSent(false)
    }

    if (sent) {
        return (
            <div className="contacto">
                <h2 className="page-title">💌 Contacto</h2>
                <div className="success-box">
                    <span className="success-icon">🎉</span>
                    <h3 className="success-title">¡Mensaje enviado!</h3>
                    <p className="success-desc">Gracias por escribirle a Ali, te responderá pronto 💛</p>
                    <button className="reset-btn" onClick={handleReset}>Enviar otro mensaje</button>
                </div>
            </div>
        )
    }

    return (
        <div className="contacto">
            <h2 className="page-title">💌 Contacto</h2>
            <p className="contacto-desc">
                ¿Quieres decirle algo a Ali? ¡Déjale un mensaje y te responderá pronto! 😊
            </p>

            <div className="contact-form">
                <div className="form-group">
                    <label className="form-label">Tu nombre</label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="¿Cómo te llamas?"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Tu email</label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Mensaje</label>
                    <textarea
                        className="form-textarea"
                        name="message"
                        placeholder="¡Escríbele lo que quieras!"
                        value={form.message}
                        onChange={handleChange}
                    />
                </div>

                {error && <div className="form-error">{error}</div>}

                <button className="submit-btn" onClick={handleSubmit}>
                    Enviar mensaje 💌
                </button>
            </div>
        </div>
    )
}

export default Contacto