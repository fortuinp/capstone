<template>
  <div class="login vh-100 ">
    <h1 class="h1 mb-5 mt-3" >NatureNurtures</h1>
    <div class="container" id="login">
      <div class="row justify-content-md-center">
        <div class="col">
          <img src="https://i.postimg.cc/hjgmLH8X/logo.png" alt="logo" class="img-fluid" id="loginLogo">
          <div class="col-md-auto">
            <form @submit.prevent="signIn">
              <div class="mb-3">
                <label for="loginEmail" class="form-label">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="loginEmail"
                  placeholder="Email Address"
                  v-model.trim="payload.emailAdd"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="loginPass" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="loginPass"
                  placeholder="Password"
                  v-model="payload.userPass"
                  required
                />
              </div>
              <div class="mb-3">
                <p class="lead">{{ message }}</p>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary">Login</button>
                
              </div>
            </form>
            <p class="newAccount">Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';

export default {
  data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      },
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
  methods: {
    signIn() {
      this.$store.dispatch("login", this.payload);
      router.push({ name: "home" });
    
    }
  }
}

</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
}
.h1{
  text-align: center;
  color: #538f48;
}

#login {
  background-color: white;
  width: 50%;
  box-shadow: 0px 0px 23px 10px #538f48;
  padding: 2rem;
}

#loginLogo {
  width: 10rem !important;
}
.btn{
  background-color: #538f48;
}
.btnLogin {
  width: 100%;
  height: 2.5rem;
  color: #538f48;
  background-color: #538f48;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.newAccount {
  font-size: 1.5rem;
  color: black;
}

.newAccount a {
  text-decoration: none;
  color: #538f48;
}

@media screen and (min-width: 300px) and (max-width: 719px) {
  #login {
    width: 90%;
  }

  .newAccount {
    font-size: 1rem;
  }
}

@media screen and (min-width: 720px) and (max-width: 1079px) {
  #login {
    width: 70%;
  }
}
</style>
