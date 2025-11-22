import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8000/api"; 

export default function AddSongPage() {
    const [form, setForm] = useState({
        title: "",
        artist: "",
        genre: "",
        album: ""
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);
        try {
        const r = await fetch(`${API}/songs`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        if (!r.ok) throw new Error("Error al crear la canción");
        await r.json(); 
        navigate("/songs");
        } catch (err) {
        setError("No se pudo guardar la canción. Revisa título y artista.");
        } finally {
        setSubmitting(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: 700 }}>
        <h1 className="text-center fw-bold my-4">New Song</h1>

        <form onSubmit={onSubmit} className="mx-auto" style={{ maxWidth: 640 }}>
            <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
                type="text"
                className="form-control"
                name="title"
                value={form.title}
                onChange={onChange}
                placeholder=""
            />
            </div>

            <div className="mb-3">
            <label className="form-label">Artist:</label>
            <input
                type="text"
                className="form-control"
                name="artist"
                value={form.artist}
                onChange={onChange}
            />
            </div>

            <div className="mb-3">
            <label className="form-label">Genre:</label>
            <input
                type="text"
                className="form-control"
                name="genre"
                value={form.genre}
                onChange={onChange}
            />
            </div>

            <div className="mb-4">
            <label className="form-label">Album:</label>
            <input
                type="text"
                className="form-control"
                name="album"
                value={form.album}
                onChange={onChange}
            />
            </div>

            <div className="text-center">
            <button type="submit" className="btn btn-success px-4" disabled={submitting}>
                {submitting ? "Saving…" : "Add Song"}
            </button>
            {error && <div className="text-danger mt-2">{error}</div>}
            </div>
        </form>
        </div>
    );
}
