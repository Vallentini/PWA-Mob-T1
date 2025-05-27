<script setup>
import { watch, onMounted, computed } from 'vue'
import NavBar from '@/components/NavBar.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)

onMounted(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        const parsed = JSON.parse(storedCart)
        parsed.forEach(item => {
            cartStore.addToCart(item, item.quantity)
        })
    }
})

watch(cart, (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
}, { deep: true })

const removeItem = (id) => {
    cartStore.removeFromCart(id)
}

const increaseQuantity = (item) => {
    item.quantity++
}

const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
        item.quantity--
    }
}

const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^\d,]/g, '').replace(',', '.')) || 0
}

const totalPrice = () => {
    return cart.value.reduce((acc, item) => {
        return acc + parsePrice(item.price) * item.quantity
    }, 0)
}

const formatPrice = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const confirmBuy = () => {
    if (cartStore.cart.length === 0) {
        alert('Seu carrinho está vazio.')
        return
    }

    alert('Compra realizada com sucesso! ✅')
    cartStore.clearCart()
}

</script>

<template>
    <NavBar />
    <div class="cart-container">
        <h1>Meu Carrinho</h1>

        <div v-if="cart.length > 0">
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço unitário</th>
                        <th>Subtotal</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cart" :key="item.id">
                        <td data-label="Produto">
                            <img :src="item.image" alt="Produto" />
                            {{ item.title }}
                        </td>
                        <td data-label="Quantidade">
                            <button class="quanty-button" @click="decreaseQuantity(item)">−</button>
                            {{ item.quantity }}
                            <button class="quanty-button" @click="increaseQuantity(item)">+</button>
                        </td>
                        <td data-label="Preço unitário">{{ item.price }}</td>
                        <td data-label="Subtotal">{{ formatPrice(parsePrice(item.price) * item.quantity) }}</td>
                        <td data-label="Remover">
                            <button class="remove-button" @click="removeItem(item.id)">Remover</button>
                        </td>
                    </tr>
                </tbody>

            </table>

            <h2>Total: {{ formatPrice(totalPrice()) }}</h2>
            <button style="margin: 5px" class="button" @click="confirmBuy">Buy Now</button>

        </div>

        <div v-else>
            <p>Seu carrinho está vazio.</p>
        </div>

    </div>
</template>

<style scoped>
.cart-container {
  font-family: 'Passion One', sans-serif;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
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

.quanty-button {
  width: 32px;
  height: 32px;
  background-color: #e3e3e3;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  margin: 0 4px;
}

.remove-button {
  width: auto;
  padding: 0 10px;
  height: 32px;
  background-color: #e3e3e3;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  font-size: 16px;
}

img {
  border-radius: 8px;
  margin-right: 10px;
  vertical-align: middle;
  max-width: 70px;
}

h1,
h2 {
  text-align: center;
}

/* Responsividade */
@media (max-width: 768px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead {
    display: none;
  }

  tr {
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 10px;
    background: #f9f9f9;
  }

  td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    border: none;
    border-bottom: 1px solid #ccc;
  }

  td::before {
    content: attr(data-label);
    font-weight: bold;
    margin-right: 10px;
    flex-shrink: 0;
  }

  .quanty-button {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }

  .remove-button {
    font-size: 14px;
  }

  .button {
    font-size: 12px;
    height: 50px;
  }
}
</style>
    