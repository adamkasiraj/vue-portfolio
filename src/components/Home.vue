<template>
  <main id="home">
    <section-hero></section-hero>
    <section-portfolio></section-portfolio>
  </main>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionPortfolio from '@/components/SectionPortfolio.vue'

export default {
  name: 'Home',
  components: {
    SectionHero,
    SectionPortfolio
  },
  data (){
            return {
                msg:"ACME's Staff List"
            }
        }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
