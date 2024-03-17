<template>
    <div id="logout">
    <div class="container text-center">
        <div class="row">
          <div class="col-sm-8" >
            <h1>Thank you for shopping with us,<br> See you soon</h1>
          </div>
          <div class="col-sm-4">
            <img src="https://i.postimg.cc/hjgmLH8X/logo.png" alt="logo" width="500" height="500">
          </div>
        </div>
        </div>
   </div>     

</template>

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

<style scoped>
#logout{
    width: 100%;
    height: 100%;
}
.col-sm-8{
  display: grid;
  place-items: center;
}

</style>