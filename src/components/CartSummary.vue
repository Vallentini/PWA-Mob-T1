    <script setup>
    import { useCartStore } from '@/stores/cart.js'

    const cartStore = useCartStore()
</script>

<template>
    <router-link to="/cart">
        <div class="cart">
            <img src="@/assets/images/shopping_cart_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="Carrinho" class="icon-cart" />
            <span>{{ cartStore.totalItems }}</span>
        </div>
    </router-link>
</template>

<style scoped>
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
    font-family: 'Passion One', sans-serif;
}

.icon-cart {
    width: 22px;
    height: 22px;
}

a{
    text-decoration: none;
}

</style>
