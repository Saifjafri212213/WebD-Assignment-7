import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import songsData from './data/songs'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Songs from './pages/Songs'
import SongDetails from './pages/SongDetails'
import Playlist from './pages/Playlist'

function App() {
  const [songs, setSongs] = useState(songsData)
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('All')

  function togglePlaylist(id) {
    setSongs((currSongs) =>
      currSongs.map((song) =>
        song.id === id ? { ...song, isInPlaylist: !song.isInPlaylist } : song
      )
    )
  }

  const result = songs.filter((elem) => (
    elem.title.toLowerCase().includes(search.toLowerCase()) &&
    (genre === 'All' || genre === 'all' || elem.genre === genre)
  ))

  const cnt = songs.filter((song) => song.isInPlaylist).length

  return (
    <BrowserRouter>
      <div>
        <Navbar playlistCount={cnt} />
        <Routes>
          <Route path="/" element={<Home songs={songs} />} />
          <Route
            path="/songs"
            element={
              <Songs
                songs={result}
                search={search}
                setSearch={setSearch}
                genre={genre}
                setGenre={setGenre}
                togglePlaylist={togglePlaylist}
              />
            }
          />
          <Route
            path="/songs/:id"
            element={<SongDetails songs={songs} togglePlaylist={togglePlaylist} />}
          />
          <Route
            path="/playlist"
            element={<Playlist songs={songs} togglePlaylist={togglePlaylist} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
