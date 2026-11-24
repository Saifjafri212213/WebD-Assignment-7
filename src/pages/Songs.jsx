import SongCard from '../components/SongCard'
import Filter from '../components/Filter'
import Search from '../components/Search'
import './Songs.css'

function Songs({ songs, search, setSearch, genre, setGenre, togglePlaylist }) {
  return (
    <div>
      <h1>All Songs</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter genre={genre} setGenre={setGenre} />

      <div>
        {songs.map((song) => (
          <SongCard key={song.id} song={song} togglePlaylist={togglePlaylist} />
        ))}
      </div>
    </div>
  )
}

export default Songs
