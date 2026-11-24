import { Link } from 'react-router'
import { formatDuration } from '../utils/format'
import './SongCard.css'

function SongCard({ song, togglePlaylist }) {
  return (
    <div>
      <Link to={`/songs/${song.id}`}>
        <h2>🎵</h2>
      </Link>
      <h2>{song.title}</h2>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>Duration: {formatDuration(song.duration)}</p>
      {song.streams >= 1000000 && <p>Trending 🔥</p>}
      <button onClick={() => togglePlaylist(song.id)}>
        {song.isInPlaylist ? 'Remove from Playlist' : 'Add to Playlist'}
      </button>
    </div>
  )
}

export default SongCard
