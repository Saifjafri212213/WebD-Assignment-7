import './Filter.css'

function Filter({ genre, setGenre }) {
  return (
    <div>
      <label>Filter by genre: </label>
      <select value={genre} onChange={(event) => setGenre(event.target.value)}>
        <option value="All">All</option>
        <option value="Romantic">Romantic</option>
        <option value="Motivational">Motivational</option>
        <option value="Sufi">Sufi</option>
        <option value="Punjabi">Punjabi</option>
      </select>
    </div>
  )
}

export default Filter
