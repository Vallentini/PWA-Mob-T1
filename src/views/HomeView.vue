<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import ProdutosList from '@/components/ProductList.vue'


</script>

<template>
  <div id='container'>
    <!-- Navbar -->
    <NavBar></NavBar>
    <img src="@/assets/images/image 1.png" alt="banner1" class="banner">
        <div class="banner-info">
            <h1 class="title-info">POP!</h1>
            <p class="description-info">Exclusivo Funko! Simpsons</p>
            <div class="sobre-info"><p>Sobre</p></div>
        </div>
        <img src="@/assets/images/banner2.png" alt="banner2" class="banner">
                
        <!-- Lista de Produtos -->
    <ProdutosList />
    <!-- Rodapé -->
    <FooterBar />
 </div> 
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

/* GERAL */
#container{
  width: 100%;
  font-family: 'Passion One', sans-serif;
  background-color: #FFE448;
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


/* RESPONSIVIDADE */
@media (max-width: 1024px) {
  .cart {
    margin: 20px auto;
    font-size: 20px;
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
  .cart {
    font-size: 18px;
    width: 90%;
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
  .cart {
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
</style>