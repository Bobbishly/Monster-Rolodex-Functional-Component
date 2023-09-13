import { useState, useEffect } from "react";
import './App.css'
import SearchFilter from "./components/SearchFilter/SearchFilter";
import CardList from "./components/CardList/CardList";

const App = () => {
  // console.log("render 1")
  const [onSearchChange, setOnSearchChange] = useState('')
  // console.log("render 2")
  const [monsters, setMonsters] = useState([])
  // console.log("render 3")

  const onSearchChangeToLower = (event) => {
    const searchNames = event.target.value.toLocaleLowerCase();
    setOnSearchChange(searchNames)
  }
  // console.log("render 4")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, [])
  // console.log("render 5")

  const filteredSearch = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(onSearchChange)
  })
  // console.log("render 6")

  return(
    <div className="App">
      {/* {console.log("render 7")} */}
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchFilter 
        SearchFilterOnSearchChange = { onSearchChangeToLower } 
        newClassname = { 'search-box' } 
        newPlaceholder = {'Search Names'} 
      />
      <CardList monsters = { filteredSearch } />
    </div>
  )
}

export default App; 