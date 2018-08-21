<template>
  <div id="app">
    <navigation></navigation>
    <section-hero></section-hero>
    <section-portfolio></section-portfolio>
    <section-contact></section-contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import SectionHero from '@/components/SectionHero.vue'
import SectionPortfolio from '@/components/SectionPortfolio.vue'
import SectionContact from '@/components/SectionContact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    SectionHero,
    SectionPortfolio,
    SectionContact,
    Footer
  }
}
</script>

<style>
.thin{
  font-weight:300;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.pg-canvas {
  position: relative;
    z-index: 10;
}
</style>
