import { Link } from 'react-router'
import './Home.css'

function Home({ pets }) {
  const redypets = pets.filter((pet) => pet.vaccinated && !pet.isAdopted)
  const adoptedPets = pets.filter((pet) => pet.isAdopted)

  return (
    <div>
      <h1>Pet Adoption </h1>
      <p>Total pets kitna hai: {pets.length}</p>
      <p>Pets ready for adoption: {redypets.length}</p>
      <p>Adopted pets: {adoptedPets.length}</p>
      <Link to="/pets">See all pets</Link>
    </div>
  )
}

export default Home
