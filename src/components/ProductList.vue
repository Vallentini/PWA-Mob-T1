<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'
const cartStore = useCartStore()


const router = useRouter()

const addToCart = (product) => {
  const productToAdd = {
    id: product.id,
    title: product.title,
    description: product.description,
    image: product.image,
    price: product.price,
  }

  cartStore.addToCart(productToAdd, 1) // Adiciona 1 por clique
  alert('Produto adicionado ao carrinho✅!')
}

const products = ref([
    {
        id: 1,
        title: 'Pop! Homer',
        image: new URL('@/assets/images/funkoHomer.png', import.meta.url).href,
        inStock: 0,
        price: 'R$150,00'
    },
    {
        id: 2,
        title: 'Pop! Skeleton Margie',
        image: new URL('@/assets/images/funkopopMargeSimpson.webp', import.meta.url).href,
        inStock: 0,
        price: 'R$120,00'
    },
    {
        id: 3,
        title: 'Pop! Maggie Simpson',
        image: new URL('@/assets/images/funkopopBart.jpg', import.meta.url).href,
        inStock: 30,
        price: 'R$230,00'
    },
    {
        id: 4,
        title: 'Pop! Bart Simpson',
        image: new URL('@/assets/images/funkopopBart.jpg', import.meta.url).href,
        inStock: 2,
        price: 'R$190,00'
    },
    {
        id: 5,
        title: 'Pop! Milhouse Fallout',
        image: new URL('@/assets/images/funkopopMilhouseFalloutBoy.png', import.meta.url).href,
        inStock: 30,
        price: 'R$160,00'
    },
    {
        id: 6,
        title: 'Pop! Hugo Simpson',
        image: new URL('@/assets/images/funkopopHugoSinpson.jpg', import.meta.url).href,
        inStock: 3,
        price: 'R$200,00'
    },
    {
        id: 7,
        title: 'Pop! Sideshow Bob',
        image: new URL('@/assets/images/funkopopSideshowBob.webp', import.meta.url).href,
        inStock: 10,
        price: 'R$190,00'
    },
    {
        id: 8,
        title: 'Pop! Ralph Wiggum',
        image: new URL('@/assets/images/funkopopRalphWiggum.webp', import.meta.url).href,
        inStock: 0,
        price: 'R$180,00'
    },
    {
        id: 9,
        title: ' Pop! Deep Space Homer',
        image: new URL('@/assets/images/deepspacehomer.jfif', import.meta.url).href,
        inStock: 0,
        price: 'R$250,00'
    },
    {
        id: 10,
        title: 'Pop! Mr. Sparkley',
        image: new URL('@/assets/images/mrsparkley.jfif', import.meta.url).href,
        inStock: 0,
        price: 'R$150,00'
    },
    {
        id: 11,
        title: 'Pop! Evil Homer',
        image: new URL('@/assets/images/evilhomer.jfif', import.meta.url).href,
        inStock: 7,
        price: 'R$170,00'
    },
    {
        id: 12,
        title: 'Pop! Lisandra',
        image: new URL('@/assets/images/lisandra.jfif', import.meta.url).href,
        inStock: 20,
        price: 'R$50,00'
    }
]);

const goToDetails = (id) => {
    router.push({ name: 'details', params: { id } })
}
</script>
<template>
    <h2>Novos Funkos Para Você!</h2>
    <div class="product-display">
        <div class="product-container" v-for="product in products" :key="product.id">
            <img src="@/assets/images/favorite_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="Favoritar"
                class="icon-heart">
            <div class="product-image">
                <img :src="product.image" :alt="product.title">
            </div>
            <div class="product-info">
                <h3 class="product-name" @click="goToDetails(product.id)" style="cursor:pointer">{{ product.title }}
                </h3>
                <p class="product-price">{{ product.price }}</p>
                <p v-if="product.inStock >= 10" class="inStock">In Stock</p>
                <p v-else-if="product.inStock > 1 && product.inStock < 10"
                    style="color: rgb(255, 191, 0);font-size: 22px;  font-family: Roboto, sans-serif;font-weight: 400;">
                    Almost out of stock
                </p>
                <p v-else style="color: red;font-size: 22px; font-family: Roboto, sans-serif;font-weight: 400;">
                    Out of stock
                </p>
            </div>
            <button class="button" :class="{ disabledButton: product.inStock < 1 }" @click="addToCart(product)"
                :disabled="product.inStock < 1">
                <img src="@/assets/images/shopping_cart_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="icon-cart"
                    class="icon-cart">
            </button>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

/* GERAL */
img {
    width: 90%;
    height: 200px;
    padding: 15px;
}

a {
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
}

h2 {
    text-align: center;
    font-size: 66px;
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

.icon-cart {
    width: 22px;
    height: 22px;
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

/* RESPONSIVIDADE */
@media (max-width: 1024px) {
    .product-container {
        width: 45%;
    }

    .button {
        width: 80%;
        margin: 0 auto;
    }

}

@media (max-width: 768px) {
    .product-container {
        width: 100%;
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

}

@media (max-width: 480px) {

    .cart,
    .button {
        font-size: 14px;
    }
}
</style>
