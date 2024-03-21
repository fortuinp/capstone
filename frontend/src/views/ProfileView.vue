<template>
  <div class="profile mb-4">
    <div class="container">

      <div class="row d-flex justify-content-center">
        <img src='https://i.ibb.co/xfz76Ck/istockphoto-1495088043-612x612-removebg-preview.png' id="user" alt="User" class="img-fluid img-thumbnail">
      </div>

      
      <form class="form">
        <div class="mb-3 justify-content-center">
          <label for="firstName" class="form-label">First Name</label>
          <input type="text" class="form-control" placeholder="First Name" name="firstName" v-model="payload.firstName" required>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" name="lastName" v-model="payload.lastName" required>
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">Age</label>
          <input type="number" class="form-control" placeholder="Age" name="age" v-model="payload.userAge" required>
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <input type="text" class="form-control" placeholder="Gender" name="gender" v-model="payload.gender" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input type="email" class="form-control" placeholder="Email Address" name="email" v-model="payload.emailAdd" required>
        </div>
       

        <div class="mb-3" id="">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" required>
        </div>
        <div class="row">
        <div class="col-auto">
          <button type="button" @click.prevent="editUser" class="btn btn-primary" id="updatebtn">Update Profile</button>
        </div>
        <div class="col-auto">
          <button @click.prevent="deleteUser" class="btn btn-danger">Delete Profile</button>
        </div>
      </div>
      </form>
    

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
        "userID": JSON.parse(localStorage.getItem("loggedUser")).result.UserID,
        "firstName": JSON.parse(localStorage.getItem("loggedUser")).result.firstName,
        "lastName": JSON.parse(localStorage.getItem("loggedUser")).result.lastName,
        "userAge": JSON.parse(localStorage.getItem("loggedUser")).result.userAge,
        "gender": JSON.parse(localStorage.getItem("loggedUser")).result.gender,
        "emailAdd": JSON.parse(localStorage.getItem("loggedUser")).result.emailAdd,
        "userPass": JSON.parse(localStorage.getItem("loggedUser")).result.userPass,
        "userProfile":JSON.parse(localStorage.getItem("loggedUser")).result.userProfile
  
      }
    }
  },
  computed: {
    loggedUser() {
      return JSON.parse(localStorage.getItem("loggedUser")).result;
    }
  },
  methods: {
    deleteUser() {
      this.$store.dispatch("deleteUser", this.loggedUser.UserID);
      localStorage.removeItem("loggedUser");
      this.$router.push({ name: "home" });
    },
    editUser() {
      const userID = this.loggedUser.UserID;
        const updateData = Object.assign({}, {userID}, this.payload)
        this.$store.dispatch('updateUser', updateData)
      }
  }
}
</script>

<style>
.container{
  /* background-color: #538f48; */
 /* background-color:rgb(230, 221, 221);  */
}
.profile{
  background-color:rgb(230, 221, 221);
  /* background-color: #538f48 */
}
#updatebtn{
  background-color:  grey;
}
.profile h1 {
  margin: 1rem;
  font-weight: bold;
}
.profile p {
  font-size: 1.5rem;
}
.img-fluid {
  width: 10rem !important;
  margin: 1rem;
  border: none;
}

</style>
