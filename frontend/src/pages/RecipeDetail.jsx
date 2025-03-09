import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/recipes/${id}`);
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/recipes/${id}`);
            alert("Recipe deleted successfully.");
            navigate('/');

        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="card">
                <img src={recipe.img} className="card-img-top" alt={recipe.title} style={{ maxHeight: '400px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h1 className="card-title">{recipe.title}</h1>
                    <p className="card-text"><strong>Category:</strong> {recipe.category}</p>
                    <p className="card-text"><strong>Level:</strong> {recipe.level}</p>
                    <p className="card-text"><strong>Description:</strong> {recipe.description}</p>
                    <p className="card-text"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                    <p className="card-text"><strong>Steps:</strong> {recipe.steps.join(', ')}</p>
                    <button className="btn btn-warning me-2" onClick={() => navigate(`/editrecipe/${recipe._id}`)}>Edit</button>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
