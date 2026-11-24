import { Link } from 'react-router'
import SongCard from '../components/SongCard'
import { formatDuration } from '../utils/format'
import './Playlist.css'

function Playlist({ songs, togglePlaylist }) {
  const playlistSongs = songs.filter((song) => song.isInPlaylist)
  const totalDuration = playlistSongs.reduce((acc, song) => acc + song.duration, 0)

  let playlistContent

  if (playlistSongs.length === 0) {
    playlistContent = <p>Your playlist is empty</p>
  } else {
    playlistContent = (
      <div>
        <p>Total duration: {formatDuration(totalDuration)}</p>
        <div>
          {playlistSongs.map((song) => (
            <SongCard key={song.id} song={song} togglePlaylist={togglePlaylist} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>My Playlist</h1>
      {playlistContent}
      <Link to="/songs">See all</Link>
    </div>
  )
}

export default Playlist
