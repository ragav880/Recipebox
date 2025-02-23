import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Rfeed from '../data/recipes'
import './Form.css' // Import the CSS file for additional styling

function PostRecipe() {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [category, setCategory] = useState('Veg')
  const [level, setLevel] = useState('Easy')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newRecipe = {
      title,
      category,
      img,
      level,
      description,
      recipe: {
        ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
        steps: steps.split(',').map(step => step.trim())
      }
    }
    Rfeed.push(newRecipe)
    const newRecipeId = Rfeed.length - 1
    alert('Recipe added successfully!')
    navigate(`/recipe/${newRecipeId}`)
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-md-6 form-container">
        <h2 className="text-center form-title">Post Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Recipe Title</label>
            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="level" className="form-label">Level</label>
            <select className="form-control" id="level" value={level} onChange={(e) => setLevel(e.target.value)} required>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">Image URL</label>
            <input type="text" className="form-control" id="img" value={img} onChange={(e) => setImg(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="ingredients" className="form-label">Ingredients (comma separated)</label>
            <textarea className="form-control" id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="steps" className="form-label">Steps (comma separated)</label>
            <textarea className="form-control" id="steps" value={steps} onChange={(e) => setSteps(e.target.value)} required></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Post Recipe</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostRecipe
