<template>
    <nav class="navbar  navbar-expand-lg navbar-dark bg-black bg-gradient sticky-top text-center text-md-start" id="Shift">
        <div class="container-fluid justify-content-center">

            <a href="/">
                <img src="https://i.ibb.co/SQyXzw7/bearr.webp" alt="Logo"
                    class="w-25"> </a>
            <button class="navbar-toggler mt-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center " id="navbarSupportedContent">
                <ul class="navbar-nav nav-underline  ms-auto text-center mb-lg-0 mx-end">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link ">Home </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link ">About </router-link>
                    </li>
                    <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/products">Shop</a>
          </li>
                    <li class="nav-item">
                        <router-link to="/admin" class="nav-link">Admin </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link">Contact</router-link>
                    </li>
                    <li class="nav-item">
                   <a class="nav-link" href="/register">Sign Up</a>
                   </li>
                <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/login"
              >Sign In</a
            >
          </li>
                </ul>
            </div>
        </div>
    </nav>
</template>



<style scoped></style>
<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    loggedUser() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.user =
      this.loggedUser || JSON.parse(localStorage.getItem("loggedUser"));
  },
  methods:{
    logOut(){
      this.user = null || JSON.parse(localStorage.removeItem("loggedUser"))
    }
  }
};
</script>