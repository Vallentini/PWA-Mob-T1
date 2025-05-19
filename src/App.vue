<template>
  <div id="app">
    <div class="nav">
      <img src="@/assets/images/The-Simpsons-28-04-2025 3 (1).png" alt="The Simpsons" />
    </div>

    <img src="@/assets/images/image 1.png" alt="banner1" class="banner" />

    <div class="banner-info">
      <h1 class="title-info">POP!</h1>
      <p class="description-info">Exclusivo Funko! Simpsons</p>
      <div class="sobre-info">
        <p>Sobre</p>
      </div>
    </div>

    <img src="@/assets/images/banner2.png" alt="banner2" class="banner" />

    <div id="container">
      <div class="cart">
        <img src="@/assets/images/shopping_cart_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="icon-cart"
          class="icon-cart" />
        {{ cart }}
      </div>

      <h2>Novos Funkos Para Você!</h2>

      <div class="product-display">
        <div class="product-container" v-for="(product, ) in products" :key="product.id">
          <img src="@/assets/images/favorite_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="Favoritar"
            class="icon-heart">
          <a :href="'product.html?id=' + product.id" style="text-decoration: none;">
            <div class="product-image">
              <img :src="product.image" :alt="product.title">
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.title }}</h3>
              <p class="product-price">{{ product.price }}</p>
              <p v-if="product.inStock >= 10" class="inStock">In Stock</p>
              <p v-else-if="product.inStock > 1 && product.inStock < 10"
                style="color: rgb(255, 191, 0);font-size: 22px;  font-family: Roboto, sans-serif;font-weight: 400;">
                Almost out of stock</p>
              <p v-else style="color: red;font-size: 22px; font-family: Roboto, sans-serif;font-weight: 400;">Out of
                stock</p>
              </div>
          </a>
          <button class="button" :class="{ disabledButton: product.inStock < 1 }" @click="addToCart"
            :disabled="product.inStock < 1"><img
              src="@/assets/images/shopping_cart_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="icon-cart"
              class="icon-cart"></button>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <img src="@/assets/images/The-Simpsons-28-04-2025 3 (1).png" alt="The Simpsons" />
  </div>
  
</template>

<script setup>

import { ref } from 'vue'

const cart = ref(0)

const addToCart = (product) => {
  cart.value += 1
  let storedCart = JSON.parse(localStorage.getItem("cart")) || []

  const existingItem = storedCart.find((item) => item.id === product.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    storedCart.push({
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.image,
      quantity: 1,
    })
  }

  localStorage.setItem("cart", JSON.stringify(storedCart))
}

const products = ref([
  {
    id: 1,
    title: 'Pop! Homer',
    image: new URL('@/assets/images/funkoHomer.png', import.meta.url).href,
    inStock: 0,
    price: 'R$150,00'
  }, {
    id: 2,
    title: 'Pop! Skeleton Margie',
    image: new URL ('@/assets/images/funkopopMargeSimpson.webp', import.meta.url).href,
    inStock: 0,
    price: 'R$120,00'
  },
  {
    id: 3,
    title: 'Pop! Maggie Simpson',
    image: new URL ('@/assets/images/funkoMaggieSimpson.webpp', import.meta.url).href,
    inStock: 30,
    price: 'R$230,00'
  },
  {
    id: 4,
    title: 'Pop! Bart Simpson',
    image: new URL ('@/assets/images/funkopopBart.jpg', import.meta.url).href,
    inStock: 2,
    price: 'R$190,00'
  },
  {
    id: 5,
    title: 'Pop! Milhouse Fallout',
    image: new URL ('@/assets/images/funkopopMilhouseFalloutBoy.png', import.meta.url).href,
    inStock: 30,
    price: 'R$160,00'
  },
  {
    id: 6,
    title: 'Pop! Hugo Simpson',
    image: new URL ('@/assets/images/funkopopHugoSinpson.jpg', import.meta.url).href,
    inStock: 3,
    price: 'R$200,00'
  },
  {
    id: 7,
    title: 'Pop! Sideshow Bob',
    image: new URL ('@/assets/images/funkopopSideshowBob.webp', import.meta.url).href,
    inStock: 10,
    price: 'R$190,00'
  },
  {
    id: 8,
    title: 'Pop! Ralph Wiggum',
    image: new URL ('@/assets/images/funkopopRalphWiggum.webp', import.meta.url).href,
    inStock: 0,
    price: 'R$180,00'
  },
  {
    id: 9,
    title: ' Pop! Deep Space Homer',
    image: new URL ('@/assets/images/deepspacehomer.jfif', import.meta.url).href,
    inStock: 0,
    price: 'R$250,00'
  },
  {
    id: 10,
    title: 'Pop! Mr. Sparkley',
    image: new URL ('@/assets/images/mrsparkley.jfif', import.meta.url).href,
    inStock: 0,
    price: 'R$150,00'
  },
  {
    id: 11,
    title: 'Pop! Evil Homer',
    image: new URL ('@/assets/images/evilhomer.jfif', import.meta.url).href,
    inStock: 7,
    price: 'R$170,00'
  },
  {
    id: 12,
    title: 'Pop! Lisandra',
    image: new URL ('@/assets/images/lisandra.jfif', import.meta.url).href,
    inStock: 20,
    price: 'R$50,00'
  }

]);

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

/* GERAL */
body {
  margin: 0;
  font-family: 'Passion One', sans-serif;
  background-color: #FFE448;
}

h2 {
  text-align: center;
  font-size: 66px;
}

a {
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
}

img {
  width: 90%;
  height: 200px;
  padding: 15px;
}

.banner {
  width: 100%;
  margin: 0;
  padding: 0;
  height: auto;
}

/* BANNER INFORMATIVO */
.banner-info {
  background-color: #1D1C1C;
  height: 243px;
  padding-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
}

.title-info {
  color: #FFFFFF;
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 10px;
}

.description-info {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 30px;
  margin: 0;
}

.sobre-info {
  width: 180px;
  height: 30px;
  font-size: 20px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1D1C1C;
  font-weight: 500;
  border: none;
  border-radius: 80px;
  margin-top: 10px;
}

/* NAVEGAÇÃO */
.nav {
  width: 100%;
  background-color: #1D1C1C;
  height: 200px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav img {
  width: 193px;
  height: 100px;
}

/* RODAPÉ */
.footer {
  width: 100%;
  background-color: #1D1C1C;
  height: 200px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer img {
  width: 193px;
  height: 100px;
}

/* BOTÃO CART */
.cart {
  width: 120px;
  height: 41px;
  background-color: #f0eaea;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  border-radius: 60px;
  font-size: 25px;
  font-weight: 400;
  color: #000;
  margin: 30px 100px 0 auto;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* BOTÃO GENÉRICO */
.container-button {
  display: flex;
  flex-direction: row;
  margin-top: 20%;
}

.button {
  width: 140px;
  height: 61px;
  background-color: #f0eaea;
  border: none;
  border-radius: 60px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
}

button img {
  width: 20px;
  height: 20px;
}

/* PRODUTOS */
.product-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.product-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  background: white;
  border: 3px solid #e3dfdf;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.icon-heart {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.product-info {
  margin-top: auto;
  align-items: center;
}

.product-image {
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.product-name {
  font-size: 24px;
  font-weight: 200;
  color: #1D1C1C;
}

.product-price {
  font-size: 20px;
  color: #555;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

.inStock {
  color: green;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

/* DETALHES */
.details-product {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  margin: 5% 1% 5% 18%;
  flex-wrap: wrap;
}

.details-img {
  width: 520px;
  height: 600px;
  border-radius: 30px;
}

.details-name {
  font-size: 64px;
  font-weight: 400;
  color: #1D1C1C;
}

.details-price {
  font-size: 36px;
  color: #555;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  margin-bottom: 100px;
}

.product-quantity {
  font-family: 'Roboto';
  font-size: 24px;
  color: #010101;
}

.details-items {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-end;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
}

.quantity-button {
  width: 32px;
  height: 32px;
  background-color: #e3e3e3;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
}

.quantity-value {
  width: 24px;
  text-align: center;
  font-size: 16px;
}

.icon-cart {
  width: 22px;
  height: 22px;
}

/* RESPONSIVIDADE */
@media (max-width: 1024px) {
  .product-container {
    width: 45%;
  }

  .cart {
    margin: 20px auto;
    font-size: 20px;
  }

  .details-product {
    flex-direction: column;
    align-items: center;
    margin: 5% auto;
  }

  .details-img {
    width: 80%;
    height: auto;
  }

  .details-items {
    width: 90%;
    align-items: center;
    text-align: center;
  }

  .details-name {
    font-size: 42px;
  }

  .details-price {
    font-size: 28px;
    margin-bottom: 40px;
  }

  .container-button {
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
  }

  .button {
    width: 80%;
    margin: 0 auto;
  }

  .banner-info {
    padding-left: 40px;
    text-align: center;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .title-info {
    font-size: 36px;
  }

  .description-info {
    font-size: 24px;
  }

  .sobre-info {
    font-size: 16px;
    width: 160px;
    height: 30px;
  }
}

@media (max-width: 768px) {
  .product-container {
    width: 100%;
  }

  .cart {
    font-size: 18px;
    width: 90%;
  }

  .button {
    font-size: 16px;
  }

  .product-name {
    font-size: 20px;
  }

  .product-price {
    font-size: 16px;
  }

  .details-name {
    font-size: 32px;
  }

  .details-price {
    font-size: 24px;
  }

  .banner-info {
    padding: 20px;
  }

  .title-info {
    font-size: 30px;
  }

  .description-info {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .details-img {
    width: 90%;
  }

  .details-name {
    font-size: 26px;
  }

  .details-price {
    font-size: 20px;
  }

  .quantity-button {
    width: 24px;
    height: 24px;
    font-size: 14px;
  }

  .quantity-value {
    font-size: 12px;
  }

  .cart,
  .button {
    font-size: 14px;
  }

  .banner-info {
    padding: 15px;
  }

  .title-info {
    font-size: 24px;
  }

  .description-info {
    font-size: 16px;
  }

  .sobre-info {
    width: 140px;
    height: 28px;
    font-size: 14px;
  }
}

/* Adicione estilos específicos aqui, se necessário */
</style>
