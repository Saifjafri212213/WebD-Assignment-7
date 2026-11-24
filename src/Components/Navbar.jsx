import { Link } from 'react-router'
import './Navbar.css'

function Navbar({ adoptedCount }) {
  return (
    <div>
      <Link to="/">Home</Link>{' | '}
      <Link to="/pets">Pets</Link>{' | '}
      <Link to="/adopted">Adopted ({adoptedCount})</Link>
    </div>
  )
}

export default Navbar
