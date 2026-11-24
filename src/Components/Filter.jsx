import './Filter.css'

function Filter({ type, settype }) {
  return (
    <div>
      <label>Filter by type: </label>
      <select value={type} onChange={(event) => settype(event.target.value)}>
        <option value="all">All</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Rabbit">Rabbit</option>
        <option value="Bird">Bird</option>
      </select>
    </div>
  )
}

export default Filter
