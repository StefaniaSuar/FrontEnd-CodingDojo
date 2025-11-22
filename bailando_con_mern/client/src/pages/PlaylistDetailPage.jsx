import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = "http://localhost:8000/api";

export default function PlaylistDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pl, setPl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
        const r = await fetch(`${API}/playlists/${id}`);
        if (!r.ok) { navigate("/playlists"); return; }
        const data = await r.json(); 
        setPl(data);
        setLoading(false);
        })();
    }, [id, navigate]);

    const handleDelete = async () => {
        if (!window.confirm("Delete this playlist?")) return;
        const r = await fetch(`${API}/playlists/${id}`, { method: "DELETE" });
        if (r.status === 204 || r.ok) navigate("/playlists");
        else alert("Couldn't delete the playlist");
    };

    if (loading) return <p className="text-center mt-4">Loading…</p>;
    if (!pl) return null;

    return (
        <div className="container">
        <h1 className="display-3 fw-bold text-center my-4">{pl.name}</h1>

        <div className="text-center fs-5 mb-4">
            <h4 className="fw-bold mb-3">Songs</h4>
            {pl.songs?.length ? (
            <ul className="list-unstyled">
                {pl.songs.map(s => (
                <li key={s._id} className="mb-2">{s.title}</li>
                ))}
            </ul>
            ) : (
            <p className="text-muted">No songs</p>
            )}
        </div>

        <div className="text-center">
            <Link to={`/playlists/${id}/edit`} className="btn btn-info me-2">
            Edit Playlist
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>
            Delete Playlist
            </button>
        </div>
        </div>
    );
}
