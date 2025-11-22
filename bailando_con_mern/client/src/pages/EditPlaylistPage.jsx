import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = "http://localhost:8000/api";

export default function EditPlaylistPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const [allSongs, setAllSongs] = useState([]);
    const [selected, setSelected] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        (async () => {
        const [rsongs, rpl] = await Promise.all([
            fetch(`${API}/songs`),
            fetch(`${API}/playlists/${id}`)
        ]);
        const songs = await rsongs.json();
        const pl = await rpl.json();

        setAllSongs(songs);
        setName(pl.name || "");
        setSelected((pl.songs || []).map(s => s._id));
        setLoading(false);
        })();
    }, [id]);

    const toggle = (sid) => setSelected(prev => prev.includes(sid) ? prev.filter(x=>x!==sid) : [...prev, sid]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setSaving(true); setErrors({});
        const r = await fetch(`${API}/playlists/${id}`, {
        method: "PUT",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({ name, songs: selected })
        });
        if (r.ok) { navigate(`/playlists/${id}`); return; }
        const payload = await r.json().catch(()=>({}));
        setErrors(payload.errors || { submit: "Could not save" });
        setSaving(false);
    };

    if (loading) return <p className="text-center mt-4">Loading…</p>;
    const nameCls = `form-control${errors.name ? " is-invalid" : ""}`;

    return (
        <div className="container" style={{ maxWidth: 700 }}>
        <h1 className="text-center fw-bold my-4">Edit Playlist</h1>

        <form onSubmit={onSubmit} className="mx-auto" style={{ maxWidth: 640 }}>
            <div className="mb-4">
            <label className="form-label">Playlist Name:</label>
            <input className={nameCls} value={name} onChange={(e)=>setName(e.target.value)} />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <h3 className="text-center fw-bold my-3">Choose Songs</h3>
            <div className="d-flex flex-column align-items-center mb-4">
            <div style={{ width: 360 }}>
                {allSongs.map(s => (
                <div className="form-check mb-2" key={s._id}>
                    <input
                    className="form-check-input"
                    type="checkbox"
                    id={`song-${s._id}`}
                    checked={selected.includes(s._id)}
                    onChange={() => toggle(s._id)}
                    />
                    <label className="form-check-label" htmlFor={`song-${s._id}`}>{s.title}</label>
                </div>
                ))}
            </div>
            </div>

            <div className="text-center">
            <button type="submit" className="btn btn-success px-4" disabled={saving}>
                {saving ? "Saving…" : "Save Changes"}
            </button>
            {errors.submit && <div className="text-danger mt-2">{errors.submit}</div>}
            </div>
        </form>
        </div>
    );
}
