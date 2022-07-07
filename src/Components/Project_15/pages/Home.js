import React from 'react'
import CocktailList from '../components/CocktailList';
import SearchFrom from '../components/SearchForm'



const Home = () => {
  return (
   
    <main>
      <SearchFrom/>
      <CocktailList/>
    </main>
  )
}

export default Home