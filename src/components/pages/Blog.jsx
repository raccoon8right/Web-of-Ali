import { useState } from "react"
import "./Blog.css"

const posts = [
    {
        id: 1,
        title: "Mi proceso en acuarela",
        desc: "Del boceto al color final, así nació mi obra favorita del mes.",
        category: "Arte",
        icon: "🎨",
        color: "var(--pastel-rosa)",
        catColor: "var(--rojo-oscuro)",
        date: "1 mayo 2026",
    },
    {
        id: 2,
        title: "Pancakes esponjosos",
        desc: "El desayuno perfecto para un domingo. ¡Más fácil de lo que crees!",
        category: "Cocina",
        icon: "🍳",
        color: "var(--pastel-verde)",
        catColor: "#2d6a4f",
        date: "25 abril 2026",
    },
    {
        id: 3,
        title: "Mi playlist de abril",
        desc: "Lo que sonó mientras dibujaba, cocinaba y descansaba.",
        category: "Música",
        icon: "🎵",
        color: "var(--azul-suave)",
        catColor: "var(--azul-oscuro)",
        date: "20 abril 2026",
    },
    {
        id: 4,
        title: "30 días dibujando",
        desc: "Un reto que cambió mi forma de ver el arte.",
        category: "Dibujo",
        icon: "✏️",
        color: "var(--pastel-lila)",
        catColor: "#6741d9",
        date: "10 abril 2026",
    },
]

const categories = ["Todas", "Arte", "Cocina", "Música", "Dibujo"]

function Blog() {
    const [activeCategory, setActiveCategory] = useState("Todas")

    const filtered = activeCategory === "Todas"
        ? posts
        : posts.filter(p => p.category === activeCategory)

    return (
        <div className="blog">
            <h2 className="page-title">📝 Blog</h2>

            <div className="category-filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="posts-grid">
                {filtered.map(post => (
                    <div key={post.id} className="post-card">
                        <div className="post-thumb" style={{ background: post.color }}>
                            {post.icon}
                        </div>
                        <div className="post-body">
                            <div className="post-category" style={{ color: post.catColor }}>
                                {post.category}
                            </div>
                            <div className="post-title">{post.title}</div>
                            <div className="post-desc">{post.desc}</div>
                            <div className="post-date">{post.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog