import React, { useState, useEffect } from 'react'
import Recipecard from '../components/Recipecard'

function Favorites() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    setSavedRecipes(saved);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe, index) => (
            <div className="col-md-6" key={index}>
              <Recipecard recipe={recipe} index={recipe.id} isSaved={true} onSave={() => {}} />
            </div>
          ))
        ) : (
          <p>No saved recipes.</p>
        )}
      </div>
    </div>
  )
}

export default Favorites
