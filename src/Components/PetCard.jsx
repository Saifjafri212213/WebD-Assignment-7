import { Link } from 'react-router'
import './PetCard.css'

function PetCard({ pet, adoptPet, cancelAdoption }) {
  let age
  if(pet.ageMonths<12){
    age = pet.ageMonths+' months'
  }
  else{
    const years =Math.floor(pet.ageMonths/12);
    age = years+' years'
  }

  let check
  if(pet.isAdopted){
    check = <button onClick={()=>cancelAdoption(pet.id)}>Cancel Adoption</button>
  }
  else if(pet.vaccinated){
    check = <button onClick={()=>adoptPet(pet.id)}>Adopt</button>
  }
  else{
    check = <p> Pending hai Vaccintion</p>
  }

  return (
    <div>
      <Link to={`/pets/${pet.id}`}>
        <h2>{pet.emoji}</h2>
      </Link>
      <h2>{pet.name}</h2>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {age}</p>
      <p>{pet.vaccinated ?'Vacinated ':'Vaccination Pending hai'}</p>
      <p>{pet.adoptionFee === 0 ?'Free' :`₹${pet.adoptionFee}`}</p>
      {check}
    </div>
  )
}

export default PetCard
