<template>
  <div class="profile"  >
    <h1>User Profile</h1>
      <div class="container" >
          <div class="row d-flex justify-content-center">
              <img src="https://i.postimg.cc/mZ70qtgL/profile.webp" alt="User" class="img-fluid img-thumbnail" >
          </div>
          <div class="row">
              
              <p class="text-sm-center">First Name : {{loggedUser?.firstName}}</p>
              <p class="text-sm-center">Last Name :{{loggedUser?.lastName}}</p>
              <p class="text-sm-center">Email Address :{{loggedUser?.emailAdd}}</p>
         
              
          </div>

          
          <!-- <button
                  type="button"
                  class="btnDelete"><UpdateUserComp :userData="loggedUser"/>
                
                </button>

                <button
                type="button"
                class="btnDelete"
                @click.prevent="deleteUser(loggedUser?.userId)"
              >
                <i class="fa-solid fa-trash"></i>
              </button> -->


      </div>

  </div>

</template>

<script>
// import loggedUser from "@/views/LoginView.vue";

export default {
 
computed: {
  loggedUser(){
      return JSON.parse(localStorage.getItem("loggedUser"));
    }
   },
   methods: {
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", userID);
      
     
    },
    editUser(userID) {
        const updateData = Object.assign({}, {userID}, this.payload)
        this.$store.dispatch('updateUser', updateData)
      }
  },

};

</script>
<style>
.profile{
  text-align: center;
}
.profile h3{
  margin: 1rem;
 font-weight: bold;
}
.profile p{
  font-size: 1.5rem;
}

.img-fluid{
  width: 20rem !important;
  margin: 1rem;
  
}
</style>