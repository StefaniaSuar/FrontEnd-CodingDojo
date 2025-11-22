import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8000/api";

export default function AddPlaylistPage() {
    const [name, setName] = useState("");
    const [songs, setSongs] = useState([]);       
    const [selected, setSelected] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
        try {
            setLoading(true);
            const r = await fetch(`${API}/songs`);
            const data = await r.json();
            setSongs(data);
        } catch (e) {
            setError("No se pudieron cargar las canciones.");
        } finally {
            setLoading(false);
        }
        })();
    }, []);

    const toggle = (id) =>
        setSelected((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);
        try {
        const r = await fetch(`${API}/playlists`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, songs: selected }),
        });
        if (!r.ok) throw new Error("Error al crear la playlist");

        navigate("/playlists");
        } catch (e) {
        setError("No se pudo crear la playlist.");
        } finally {
        setSubmitting(false);
        }
    };

    const disabled = !name.trim() || selected.length === 0 || submitting;

    return (
        <div className="container" style={{ maxWidth: 700 }}>
        <h1 className="text-center fw-bold my-4">Create New Playlist</h1>

        <form onSubmit={onSubmit} className="mx-auto" style={{ maxWidth: 640 }}>
            <div className="mb-4">
            <label className="form-label">Playlist Name:</label>
            <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>

            <h3 className="text-center fw-bold my-3">Choose Songs</h3>

            {loading ? (
            <p className="text-center text-muted">Loading songs…</p>
            ) : (
            <div className="d-flex flex-column align-items-center mb-4">
                <div style={{ width: 360 }}>
                {songs.map((s) => (
                    <div className="form-check mb-2" key={s._id}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={`song-${s._id}`}
                        checked={selected.includes(s._id)}
                        onChange={() => toggle(s._id)}
                    />
                    <label className="form-check-label" htmlFor={`song-${s._id}`}>
                        {s.title}
                    </label>
                    </div>
                ))}
                {songs.length === 0 && (
                    <div className="text-center text-muted">No hay canciones</div>
                )}
                </div>
            </div>
            )}

            <div className="text-center">
            <button type="submit" className="btn btn-success px-4" disabled={disabled}>
                {submitting ? "Creating…" : "Create Playlist"}
            </button>
            <div className="form-text mt-2">
                {!name.trim()
                ? "Ingresa un nombre"
                : selected.length === 0
                ? "Elige al menos una canción"
                : "\u00A0"}
            </div>
            {error && <div className="text-danger mt-2">{error}</div>}
            </div>
        </form>
        </div>
    );
}
