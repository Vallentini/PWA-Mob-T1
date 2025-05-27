<script setup> 
import CartSummary from '@/components/CartSummary.vue'
</script>

<template>
  <div class="container-footer">
    <div class="footer-img">
      <router-link to="/">
        <img src="@/assets/images/home.png" alt="home" class="icon-home" />
      </router-link>
      <CartSummary />
      <router-link to="/favorites">
        <img src="@/assets/images/heart.png" alt="icon" class="icon-heart" />
      </router-link>
      
    </div>
  </div>
</template>

<style scoped>
/* RODAPÉ FIXO NA BASE */
.container-footer {
  width: 100%;
  background-color: #b2d6ff;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);
}

/* ÍCONES ALINHADOS HORIZONTALMENTE */
.footer-img {
  display: flex;
  gap: 10px; /* Espaço entre os ícones */
  align-items: center;
}

/* TAMANHO DOS ÍCONES */
.icon-heart {
  width: 35px;
  height: 35px;
}
.icon-home{
  width: 35px;
  height: 35px;
  margin-right: 2px;
}
</style>
