import React, { useState, useEffect } from 'react'
import Rfeed from '../data/recipes'
import Recipecard from '../components/Recipecard'
import './Home.css' // Import the CSS file for additional styling

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState(Rfeed)
  const [savedRecipes, setSavedRecipes] = useState(() => {
    const saved = localStorage.getItem('savedRecipes')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('filteredRecipes'))
    if (savedRecipes) {
      setFilteredRecipes(savedRecipes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('filteredRecipes', JSON.stringify(filteredRecipes))
  }, [filteredRecipes])

  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes))
  }, [savedRecipes])

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = Rfeed.filter(recipe =>
      recipe.title.toLowerCase().includes(term)
    )
    setFilteredRecipes(filtered)
  }

  const handleSaveRecipe = (recipe) => {
    setSavedRecipes(prevSavedRecipes => {
      const isSaved = prevSavedRecipes.some(savedRecipe => savedRecipe.id === recipe.id)
      if (isSaved) {
        return prevSavedRecipes.filter(savedRecipe => savedRecipe.id !== recipe.id)
      } else {
        return [...prevSavedRecipes, recipe]
      }
    })
  }

  return (
    <div className="container mt-5">
      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search recipes"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="row">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div className="col-md-6 recipe-card-container" key={index}>
              <Recipecard
                recipe={recipe}
                index={index}
                isSaved={savedRecipes.some(savedRecipe => savedRecipe.id === recipe.id)}
                onSave={() => handleSaveRecipe(recipe)}
              />
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  )
}

export default Home
