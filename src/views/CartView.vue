<script setup>
import { watch, onMounted, computed } from 'vue'
import NavBar from '@/components/NavBar.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)

onMounted(() => {
    const storedCart = localStorage.getItem('cart')
    cart.value = storedCart ? JSON.parse(storedCart) : []
})

watch(cart, (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
}, { deep: true })

const removeItem = (id) => {
    cart.value = cart.value.filter(item => item.id !== id)
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
                        <td>
                            <img :src="item.image" alt="Produto" width="70" />
                            {{ item.title }}
                        </td>
                        <td>
                            <button class="quanty-button" @click="decreaseQuantity(item)">−</button>
                            {{ item.quantity }}
                            <button class="quanty-button" @click="increaseQuantity(item)">+</button>
                        </td>
                        <td>{{ item.price }}</td>
                        <td>{{ formatPrice(parsePrice(item.price) * item.quantity) }}</td>
                        <td>
                            <button class="remove-button" @click="removeItem(item.id)">Remover</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>Total: {{ formatPrice(totalPrice()) }}</h2>
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
}

.remove-button {
    width: 85px;
    height: 32px;
    background-color: #e3e3e3;
    border: none;
    border-radius: 10px;
    font-size: 18px;
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
    font-size: 20px;
    font-weight: lighter;
}

img {
    border-radius: 8px;
    margin-right: 10px;
    vertical-align: middle;
}



h1,
h2 {
    text-align: center;
}
</style>
