import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Rfeed from '../data/recipes'

function EditRecipe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = Rfeed[id]

  const [title, setTitle] = useState(recipe.title)
  const [img, setImg] = useState(recipe.img)
  const [category, setCategory] = useState(recipe.category)
  const [level, setLevel] = useState(recipe.level)
  const [description, setDescription] = useState(recipe.description)
  const [ingredients, setIngredients] = useState(recipe.recipe.ingredients.join(', '))
  const [steps, setSteps] = useState(recipe.recipe.steps.join(', '))

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedRecipe = {
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
    Rfeed[id] = updatedRecipe
    alert('Recipe updated successfully!')
    navigate(`/recipe/${id}`)
  }

  return (
    <div className="container mt-5">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="img" value={img} onChange={(e) => setImg(e.target.value)} required />
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
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">Ingredients (comma separated)</label>
          <textarea className="form-control" id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="steps" className="form-label">Steps (comma separated)</label>
          <textarea className="form-control" id="steps" value={steps} onChange={(e) => setSteps(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Update Recipe</button>
      </form>
    </div>
  )
}

export default EditRecipe
