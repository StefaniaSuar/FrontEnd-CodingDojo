import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from './components/Header'
import SongsPage from "./pages/SongsPage";
import PlaylistsPage from "./pages/PlaylistsPage";
import AddSongPage from "./pages/AddSongPage";
import AddPlaylistPage from "./pages/AddPlaylistPage";
import SongDetailPage from './pages/SongDetailPage';
import PlaylistDetailPage from './pages/PlaylistDetailPage'
import EditPlaylistPage from './pages/EditPlaylistPage';
import EditSongPage from './pages/EditSongPage';
import './App.css'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="" element={<Navigate to="/songs" />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
        <Route path="/songs/new" element={<AddSongPage />} /> 
        <Route path="/playlists/new" element={<AddPlaylistPage />} /> 

        <Route path="/songs/:id" element={<SongDetailPage />} />
        <Route path="/songs/:id/edit" element={<EditSongPage />} />
        <Route path="/playlists/:id" element={<PlaylistDetailPage />} />
        <Route path="/playlists/:id/edit" element={<EditPlaylistPage />} />
      </Routes>
    </>
  )
}

export default App
