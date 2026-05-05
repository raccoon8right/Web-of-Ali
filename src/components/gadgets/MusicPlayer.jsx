import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./MusicPlayer.css"

import idontwanna from "../../assets/music/Billie Eilish - idontwannabeyouanymore.mp3"
import sixfeetunder from "../../assets/music/Billie Eilish - Six Feet Under.mp3"
import watch from "../../assets/music/Billie Eilish - watch.mp3"
import cigarettes from "../../assets/music/TV Girl - Cigarettes out the Window.mp3"
import notallowed from "../../assets/music/TV Girl - Not Allowed.mp3"
import theline from "../../assets/music/Twenty One Pilots - The Line (from Arcane Season 2).mp3"

const allTracks = [
    { id: 1, title: "I Don't Wanna Be You Anymore", artist: "Billie Eilish", src: idontwanna, favorite: true },
    { id: 2, title: "Six Feet Under", artist: "Billie Eilish", src: sixfeetunder, favorite: true },
    { id: 3, title: "Watch", artist: "Billie Eilish", src: watch, favorite: true },
    { id: 4, title: "Cigarettes out the Window", artist: "TV Girl", src: cigarettes, favorite: false },
    { id: 5, title: "Not Allowed", artist: "TV Girl", src: notallowed, favorite: false },
    { id: 6, title: "The Line", artist: "Twenty One Pilots", src: theline, favorite: true },
]

const artists = ["Todos", "Billie Eilish", "TV Girl", "Twenty One Pilots"]

// ← recibe setIsPlaying desde App.jsx via Sidebar
function MusicPlayer({ setIsPlaying }) {
    const [activeArtist, setActiveArtist] = useState("Todos")
    const [currentTrack, setCurrentTrack] = useState(null)
    const [isPlayingLocal, setIsPlayingLocal] = useState(false)
    const [progress, setProgress] = useState(0)
    const audioRef = useRef(null)

    const filtered = activeArtist === "Todos"
        ? allTracks
        : allTracks.filter(t => t.artist === activeArtist)

    // Helper para actualizar ambos estados a la vez
    const updatePlaying = (value) => {
        setIsPlayingLocal(value)
        setIsPlaying?.(value) // ← el ?. evita error si no se pasa la prop
    }

    // Barra de progreso
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return
        const update = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100)
            }
        }
        audio.addEventListener("timeupdate", update)
        return () => audio.removeEventListener("timeupdate", update)
    }, [])

    const handleTrack = (track) => {
        const audio = audioRef.current

        if (currentTrack?.id === track.id) {
            if (isPlayingLocal) {
                audio.pause()
                updatePlaying(false)
            } else {
                audio.play()
                updatePlaying(true)
            }
        } else {
            audio.src = track.src
            audio.play()
            setCurrentTrack(track)
            updatePlaying(true)
            setProgress(0)
        }
    }

    const handleEnded = () => {
        updatePlaying(false)
        setProgress(0)
    }

    const handleSeek = (e) => {
        const audio = audioRef.current
        if (!audio?.duration) return
        const rect = e.currentTarget.getBoundingClientRect()
        const ratio = (e.clientX - rect.left) / rect.width
        audio.currentTime = ratio * audio.duration
        setProgress(ratio * 100)
    }

    const togglePlayPause = () => {
        if (isPlayingLocal) {
            audioRef.current.pause()
            updatePlaying(false)
        } else {
            audioRef.current.play()
            updatePlaying(true)
        }
    }

    return (
        <div className="music-player">
            <div className="music-title">
                <FontAwesomeIcon icon="music" /> Música de Ali
            </div>

            {/* Filtro por artista */}
            <div className="artist-filters">
                {artists.map(artist => (
                    <button
                        key={artist}
                        className={`artist-btn ${activeArtist === artist ? "active" : ""}`}
                        onClick={() => setActiveArtist(artist)}
                    >
                        {artist}
                    </button>
                ))}
            </div>

            {/* Lista de canciones */}
            <div className="track-list">
                {filtered.map(track => (
                    <div
                        key={track.id}
                        className={`track ${currentTrack?.id === track.id ? "playing" : ""}`}
                        onClick={() => handleTrack(track)}
                    >
                        <div className="track-play-icon">
                            <FontAwesomeIcon
                                icon={currentTrack?.id === track.id && isPlayingLocal ? "pause" : "play"}
                            />
                        </div>
                        <div className="track-info">
                            <div className="track-name">
                                {track.title}
                                {track.favorite && (
                                    <span className="track-favorite">
                                        <FontAwesomeIcon icon="star" />
                                    </span>
                                )}
                            </div>
                            <div className="track-artist">{track.artist}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Barra de progreso */}
            {currentTrack && (
                <div className="now-playing">
                    <div className="now-playing-info">
                        <span className="now-playing-title">{currentTrack.title}</span>
                        <FontAwesomeIcon
                            icon={isPlayingLocal ? "pause" : "play"}
                            className="now-playing-icon"
                            onClick={togglePlayPause}
                        />
                    </div>
                    <div className="progress-bar" onClick={handleSeek}>
                        <div className="progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                </div>
            )}

            <audio ref={audioRef} onEnded={handleEnded} />
        </div>
    )
}

export default MusicPlayer