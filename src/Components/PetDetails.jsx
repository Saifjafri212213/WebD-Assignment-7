import { Link, useParams } from 'react-router'
import './PetDetails.css'

function PetDetails({ pets, adoptPet, cancelAdoption }) {
  const { id } = useParams()
  const pet = pets.find((item) => item.id === Number(id))

  if (!pet) {
    return <div>
      <h1>Pet not found</h1>
      <Link to="/pets">Back to pets</Link>
      </div>
  }

  let age
  if(pet.ageMonths < 12){
    age = pet.ageMonths+' months'
  }
  else{
    const years=Math.floor(pet.ageMonths/12)
    age = years +' years'
  }

  let check
  if (pet.isAdopted){
    check = <button onClick={() => cancelAdoption(pet.id)}>Cancel Adoption</button>
  }
  else if(pet.vaccinated){
    check = <button onClick={() => adoptPet(pet.id)}>Adopt</button>
  }
  else{
    check = <p>Vaccination Pending</p>
  }

  return (
    <div>
      <Link to="/pets">Back to pets</Link>
      <h1>{pet.emoji} {pet.name}</h1>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {age}</p>
      <p>Gender: {pet.gender}</p>
      <p>Vaccination: {pet.vaccinated ? 'Vaccinated ' :'Vaccination Pending hai'}</p>
      <p>Adoption fee: {pet.adoptionFee === 0 ? 'Free' : `₹${pet.adoptionFee}`}</p>
      {check}
    </div>
  )
}

export default PetDetails
