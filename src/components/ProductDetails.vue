<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'

const cartStore = useCartStore()
const route = useRoute()
const product = ref(null)
const quantity = ref(1)

const allProducts = [
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
]

const getProductById = (id) => {
  return allProducts.find((product) => product.id === id)
}

const addToCart = () => {
const productToAdd = {
  id: product.value.id,
  title: product.value.title,
  image: product.value.image,
  price: product.value.price,
}
  cartStore.addToCart(productToAdd, quantity.value)
  alert('Produto adicionado ao carrinho 🛒✅!')
}

const confirmBuy = () => {
  alert('Compra concluída com sucesso ✅!')
}

const loadProduct = () => {
  const id = parseInt(route.params.id)
  if (id) {
    product.value = getProductById(id)
  }
}

const aumentar = () => {
  if (product.value && quantity.value < product.value.inStock) {
    quantity.value++
  }
}

const diminuir = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

onMounted(() => {
  loadProduct()
})
</script>

<template>
  <div v-if="product" class="details-product">
    <img :src="product.image" alt="Produto" class="details-img" />
    <div class="details-items">
      <h1 class="details-name">{{ product.title }}</h1>
      <p class="details-price">{{ product.price }}</p>
      <div class="quantity-control">
        <span>Quantidade</span>
        <button class="quantity-button" @click="diminuir" :disabled="quantity <= 0">−</button>
        <span class="quantity-value">{{ quantity }}</span>
        <button class="quantity-button" @click="aumentar" :disabled="quantity >= product.inStock">+</button>
      </div>
      <div class="container-button">
        <button
          class="button"
          style="margin: 5px"
          :class="{ disabledButton: product.inStock < 1 }"
          @click="addToCart(product)"
          :disabled="product.inStock < 1"
        >
          <img
            src="@/assets/images/shopping_cart_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png"
            alt="cart"
          />
        </button>
        <button style="margin: 5px" class="button" @click="confirmBuy">Buy Now</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
*{
    font-family: 'Passion One', sans-serif;
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

/* DETALHES */
.details-product {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  margin: 5% 1% 5% 8%;
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
}

@media (max-width: 768px) {

  .cart {
    font-size: 18px;
    width: 90%;
  }

  .button {
    font-size: 16px;
  }

  .details-name {
    font-size: 32px;
  }

  .details-price {
    font-size: 24px;
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
}
</style>