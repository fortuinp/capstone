<template>
  <NavBar />
  <main>
    <router-view />
  </main>

  <Footer />
</template>
 
<script>
import Footer from "./components/Footer.vue"
import NavBar from "../src/components/NavBar"



export default {
  components: {
    NavBar, Footer

  }
}
</script>
 
<style  src="@/assets/css/style.css"></style>
