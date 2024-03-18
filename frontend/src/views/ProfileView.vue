<template>
  <div class="profile">
    <h1>User Profile</h1>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <img src="https://i.postimg.cc/mZ70qtgL/profile.webp" alt="User" class="img-fluid img-thumbnail">
      </div>
      <form @submit.prevent=editUser(this.loggedUser.UserID)>
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input type="text" class="form-control" placeholder="First Name" name="firstName" v-model="loggedUser.firstName" required>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" name="lastName" v-model="loggedUser.lastName" required>
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">Age</label>
          <input type="number" class="form-control" placeholder="Age" name="age" v-model="loggedUser.userAge" required>
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <input type="text" class="form-control" placeholder="Gender" name="gender" v-model="loggedUser.gender" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input type="email" class="form-control" placeholder="Email Address" name="email" v-model="loggedUser.emailAdd" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" v-model="loggedUser.userPass" required>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary">Update Profile</button>
        </div>
        <div class="col-auto">
          <button @click.prevent=deleteUser(this.loggedUser.UserID) class="btn btn-danger">Delete Profile</button>
        
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loggedUser() {
      return JSON.parse(localStorage.getItem("loggedUser"));
    }
  },
  methods: {
    deleteUser() {
      this.$store.dispatch("deleteUser", this.loggedUser.UserID),
      this.logOut()
    }
      ,
    logOut(){
      this.user = null || JSON.parse(localStorage.removeItem("loggedUser"))
      location.reload
    },
  
  
      editUser() {
        this.$store.dispatch("updateUser", this.loggedUser.UserID),
        console.log(this.loggedUser.UserID)
      
    }
  }}

</script>

<style>
.profile {
  text-align: center;
}
.profile h1 {
  margin: 1rem;
  font-weight: bold;
}
.profile p {
  font-size: 1.5rem;
}
.img-fluid {
  width: 20rem !important;
  margin: 1rem;
}
</style>
