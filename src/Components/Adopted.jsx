import { Link } from 'react-router'
import PetCard from './PetCard'
import './Adopted.css'

function Adopted({ pets, cancelAdoption }) {
  const adoptedPets = pets.filter((pet) => pet.isAdopted)
  const fee = adoptedPets.reduce((acc, pet)=>(acc + pet.adoptionFee), 0)

  let adoptedContent

  if(adoptedPets.length === 0){
    adoptedContent = <p>No pets adopted yet</p>
  }
  else{
    adoptedContent=(
      <div>
        <p>Total adoption fee: ₹{fee}</p>
        <div>
          {adoptedPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} cancelAdoption={cancelAdoption} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>Adpted Pets</h1>
      {adoptedContent}
      <Link to="/pets">See all</Link>
    </div>
  )
}

export default Adopted
