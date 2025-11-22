import { NavLink } from "react-router-dom";

export const Header =  () => {
    const linkCls = ({ isActive }) =>
    "nav-link px-3" + (isActive ? " active-link" : " idle-link");

    return (
        <nav className="bg-dark py-2 mb-4 shadow-sm">
        <div className="container">
            <ul className="nav justify-content-around">
                <li className="nav-item">
                    <NavLink to="/songs" className={linkCls}>Songs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/playlists" className={linkCls}>Playlists</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/songs/new" className={linkCls}>Add Song</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/playlists/new" className={linkCls}>Add Playlist</NavLink>
                </li>
            </ul>
        </div>
        </nav>
    );
    }

