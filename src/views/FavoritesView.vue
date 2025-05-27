<script setup>
import { useFavoritesStore } from '@/stores/favorite'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

const favoritesStore = useFavoritesStore()

const removeFromFavorites = (id) => {
  favoritesStore.removeFavorite(id)
}
</script>
<template>
  <NavBar />
  <div class="favorites-container">
    <h1>Meus Favoritos 🖤</h1>

    <div v-if="favoritesStore.favorites.length > 0" class="favorites-list">
      <div v-for="item in favoritesStore.favorites" :key="item.id" class="favorite-item">
        <img :src="item.image" alt="Produto" class="product-img" />
        <div class="info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.price }}</p>
          <button class="remove-button" @click="removeFromFavorites(item.id)">Remover</button>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Você ainda não favoritou nenhum produto.</p>
    </div>
  </div>
  <FooterBar />
</template>

<style scoped>
.favorites-container {
  max-width: 800px;
  margin: 2rem auto;
  font-family: 'Roboto', sans-serif;
  padding: 0 1rem;
}

.favorites-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.favorite-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f9f9f9;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
}

.product-img {
  width: 80px;
  height: auto;
  border-radius: 10px;
}

.info {
  flex: 1;
  min-width: 200px;
}

.remove-button {
  background-color: #e3e3e3;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
