import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/login'
import Register from './pages/Register'
import Home from './pages/Home'
import Showrecipe from './pages/Showrecipe'
import PostRecipe from './pages/PostRecipe'
import EditRecipe from './pages/EditRecipe'
import Favorites from './pages/Favorites'

function App() {
  return (
    <> 
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Showrecipe />} />
        <Route path="/post" element={<PostRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  )
}

export default App