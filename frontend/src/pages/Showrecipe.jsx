import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Rfeed from '../data/recipes'
import './Showrecipe.css' // Import the CSS file for additional styling

function Showrecipe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = Rfeed[id]
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleDelete = () => {
    Rfeed.splice(id, 1)
    alert('Recipe deleted successfully!')
    navigate('/')
  }

  const handleEdit = () => {
    navigate(`/edit/${id}`)
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="row">
        <div className="col-12 showrecipe-card">
          <img src={recipe.img} className="img-fluid" alt={recipe.title} />
          <div className="p-3">
            <h2 className="text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>{recipe.title}</h2>
            <p className="text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>{recipe.description}</p>
            <p className="text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}><strong>Category:</strong> {recipe.category}</p>
            <h4 className="text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: '600' }}>Ingredients</h4>
            <ul className="text-white ingredients-list" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              {recipe.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h4 className="text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: '600' }}>Steps</h4>
            <ol className="text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              {recipe.recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <button className="btn btn-warning me-2" onClick={handleEdit} style={{ fontFamily: 'Oswald, sans-serif' }}>Edit</button>
            <button className="btn btn-danger" onClick={handleDelete} style={{ fontFamily: 'Oswald, sans-serif' }}>Delete</button>
            <div className="mt-4">
              <h4 className="text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: '600' }}>Comments</h4>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
                />
                <button className="btn btn-primary" onClick={handleAddComment} style={{ fontFamily: 'Oswald, sans-serif' }}>Submit</button>
              </div>
              <ul className="mt-3 text-white" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                {comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showrecipe
