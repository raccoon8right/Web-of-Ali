import { useState } from "react"
import "./MusicPlayer.css"

const tracks = [
    { id: 1, name: "Espresso", artist: "Sabrina Carpenter", icon: "🎀", color: "var(--pastel-rosa)" },
    { id: 2, name: "Flowers", artist: "Miley Cyrus", icon: "🌸", color: "var(--pastel-verde)" },
    { id: 3, name: "Levitating", artist: "Dua Lipa", icon: "✨", color: "var(--azul-suave)" },
    { id: 4, name: "Cruel Summer", artist: "Taylor Swift", icon: "☀️", color: "var(--pastel-amarillo)" },
]

function MusicPlayer() {
    const [playing, setPlaying] = useState(null)

    const handleTrack = (track) => {
        setPlaying(playing?.id === track.id ? null : track)
    }

    return (
        <div className="music-player">
            <div className="music-title">Música de Ali 🎵</div>

            <div className="track-list">
                {tracks.map(track => (
                    <div
                        key={track.id}
                        className={`track ${playing?.id === track.id ? "playing" : ""}`}
                        onClick={() => handleTrack(track)}
                    >
                        <div className="track-icon" style={{ background: track.color }}>
                            {track.icon}
                        </div>
                        <div className="track-info">
                            <div className="track-name">{track.name}</div>
                            <div className="track-artist">{track.artist}</div>
                        </div>
                        <span className="track-play">
                            {playing?.id === track.id ? "⏸" : "▶"}
                        </span>
                    </div>
                ))}
            </div>

            {playing && (
                <div className="now-playing">
                    <div className="music-bar">
                        <div className="music-fill"></div>
                    </div>
                    <div className="now-playing-text">▶ {playing.name} — {playing.artist}</div>
                </div>
            )}
        </div>
    )
}

export default MusicPlayer