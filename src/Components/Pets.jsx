import PetCard from './PetCard'
import Filter from './Filter'
import Search from './Search'
import './Pets.css'

function Pets({ pets, search, setsearch, type, settype, adoptPet, cancelAdoption }) {
  return (
    <div>
      <h1>All Pets</h1>
      <Search search={search} setsearch={setsearch} />
      <Filter type={type} settype={settype} />

      <div>
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} adoptPet={adoptPet} cancelAdoption={cancelAdoption} />
        ))}
      </div>
    </div>
  )
}

export default Pets
