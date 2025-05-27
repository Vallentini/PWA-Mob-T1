import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  const toggleFavorite = (product) => {
    const index = favorites.value.findIndex(p => p.id === product.id)
    if (index !== -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(product)
    }
  }

  const isFavorite = (id) => {
    return favorites.value.some(p => p.id === id)
  }

  const removeFavorite = (id) => {
    favorites.value = favorites.value.filter(p => p.id !== id)
  }

  return { favorites, toggleFavorite, isFavorite, removeFavorite }
})
    