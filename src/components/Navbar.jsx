import { Link } from 'react-router'
import './Navbar.css'

function Navbar({ playlistCount }) {
  return (
    <div>
      <Link to="/">Home</Link>{' | '}
      <Link to="/songs">Songs</Link>{' | '}
      <Link to="/playlist">Playlist ({playlistCount})</Link>
    </div>
  )
}

export default Navbar
