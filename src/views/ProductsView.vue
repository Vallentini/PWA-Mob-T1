<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import CartSummary from '@/components/CartSummary.vue'


</script>

<template>
  <div id="container">
    <!-- Navbar -->
    <NavBar />
    <CartSummary />
    <!-- Detalhes do Produtos -->
    <ProductDetails />
    <!-- Rodapé -->
    <FooterBar />
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  font-family: 'Passion One', sans-serif;
}
</style>