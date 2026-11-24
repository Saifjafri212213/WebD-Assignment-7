import { Link } from 'react-router'
import './Home.css'

function Home({ songs }) {
  const playlistSongs = songs.filter((song) => song.isInPlaylist)
  const trendingSongs = songs.filter((song) => song.streams >= 1000000)

  return (
    <div>
      <h1>Music Playlist</h1>
      <p>Total songs: {songs.length}</p>
      <p>Songs in playlist: {playlistSongs.length}</p>
      <p>Trending songs: {trendingSongs.length}</p>
      <Link to="/songs">Explore songs</Link>
    </div>
  )
}

export default Home
