import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Recipecard.css' // Import the CSS file for additional styling

function Recipecard({ recipe, index }) {
  const [likeCount, setLikeCount] = useState(() => {
    const savedCount = localStorage.getItem(`likeCount-${index}`);
    return savedCount ? parseInt(savedCount, 10) : 0;
  });
  const [isSaved, setIsSaved] = useState(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    return savedRecipes.some(savedRecipe => savedRecipe.id === recipe.id);
  });

  useEffect(() => {
    localStorage.setItem(`likeCount-${index}`, likeCount);
  }, [likeCount, index]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    setIsSaved(savedRecipes.some(savedRecipe => savedRecipe.id === recipe.id));
  }, [recipe.id]);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleSave = () => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    if (isSaved) {
      const updatedRecipes = savedRecipes.filter(savedRecipe => savedRecipe.id !== recipe.id);
      localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
    } else {
      savedRecipes.push({ ...recipe, id: recipe.id });
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    }
    setIsSaved(!isSaved);
  };

  return (
    <div className="card mb-3 recipe-card">
      <div className="position-relative">
        <img src={recipe.img} className="card-img-top" alt={recipe.title} />
        <button
          className={`btn save-btn position-absolute top-0 end-0 m-2 ${isSaved ? 'text-danger' : 'text-white'}`}
          onClick={handleSave}
        >
          <i className={`bi ${isSaved ? 'bi-bookmark-fill' : 'bi-bookmark'}`}></i>
        </button>
      </div>
      <div className="card-body">
        <h5 className="text-style card-title">{recipe.title}</h5>
        <p className="text-style card-text">{recipe.description}</p>
        <p className="text-style card-text">Category: {recipe.category}</p>
        <p className="text-style card-text">Level: {recipe.level}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <Link to={`/recipe/${index}`} className="btn btn-primary">View Recipe</Link>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-danger" onClick={handleLike}>
              <i className="bi bi-heart-fill"></i>
            </button>
            <span className="ms-2 text-white">{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipecard
