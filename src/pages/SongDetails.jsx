import { Link, useParams } from 'react-router'
import { formatDuration } from '../utils/format'
import './SongDetails.css'

function SongDetails({ songs, togglePlaylist }) {
  const { id } = useParams()
  const song = songs.find((item) => item.id === Number(id))

  if (!song) {
    return (
      <div>
        <h1>Song not found</h1>
        <Link to="/songs">Back to songs</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/songs">Back to songs</Link>
      <h1>🎵 {song.title}</h1>
      <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p>
      <p>Genre: {song.genre}</p>
      <p>Year: {song.year}</p>
      <p>Duration: {formatDuration(song.duration)}</p>
      <p>Streams: {song.streams.toLocaleString()}</p>
      {song.streams >= 1000000 && <p>Trending 🔥</p>}
      <button onClick={() => togglePlaylist(song.id)}>
        {song.isInPlaylist ? 'Remove from Playlist' : 'Add to Playlist'}
      </button>
    </div>
  )
}

export default SongDetails
