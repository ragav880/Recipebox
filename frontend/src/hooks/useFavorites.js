import { useState, useEffect } from 'react'

export function useFavorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(savedFavorites)
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const isFavorite = (recipe) => favorites.some(fav => fav.title === recipe.title)

  const toggleFavorite = (recipe) => {
    setFavorites(prevFavorites => {
      if (isFavorite(recipe)) {
        return prevFavorites.filter(fav => fav.title !== recipe.title)
      } else {
        return [...prevFavorites, recipe]
      }
    })
  }

  return { favorites, isFavorite, toggleFavorite }
}
