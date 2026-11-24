import React from 'react'
import './Search.css'

function Search({search , setsearch}) {
  return (
    <div>
      <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)}/>
    </div>
  )
}

export default Search
