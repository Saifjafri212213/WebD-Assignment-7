import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import petData from './Data/data'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Pets from './Components/Pets'
import PetDetails from './Components/PetDetails'
import Adopted from './Components/Adopted'

function App() {
  const [pets, setPets] = useState(petData)
  const [search, setsearch] = useState("")
  const [type, settype] = useState("all")

  function adoptPet(id){
    setPets((currpets)=>currpets.map((pet)=>
      pet.id===id ? { ...pet, isAdopted: true }: pet))
  }

  function cancelAdoption(id){
    setPets((currpets)=>currpets.map((pet)=>
      pet.id===id ? { ...pet, isAdopted: false } :pet))
  }

  let result = pets.filter((elem)=>(
    elem.name.toLowerCase().includes(search.toLowerCase())
    &&
    (type==="all" || type===elem.type)
  ))

  const cnt = pets.filter((pet) => pet.isAdopted).length

  return (
    <BrowserRouter>
      <div>
        <Navbar adoptedCount={cnt} />
        <Routes>
          <Route path="/" element={<Home pets={pets} />} />
          <Route path="/pets" element={<Pets pets={result} search={search} setsearch={setsearch} type={type} settype={settype} adoptPet={adoptPet} cancelAdoption={cancelAdoption} />} />
          <Route path="/pets/:id" element={<PetDetails pets={pets} adoptPet={adoptPet} cancelAdoption={cancelAdoption} />} />
          <Route path="/adopted" element={<Adopted pets={pets} cancelAdoption={cancelAdoption} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
