    <script setup>
    import { useCartStore } from '@/stores/cart.js'

    const cartStore = useCartStore()
</script>

<template>
    <router-link to="/cart">
        <div class="cart">
            <img src="@/assets/images/shopping-cart.png" alt="Carrinho" class="icon-cart" />
            <span>{{ cartStore.totalItems }}</span>
        </div>
    </router-link>
</template>

<style scoped>
.cart {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 25px;
    font-weight: 400;
    color: #000;
    font-family: 'Passion One', sans-serif;
}

.icon-cart {
    width: 35px;
    height: 35px;
}

a{
    text-decoration: none;
}

</style>
