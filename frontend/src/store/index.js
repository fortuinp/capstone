import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import router from "@/router";
//import AunthenticatedUser from "@/services/AunthenticatedUser";
//import { useCookies } from "vue3-cookies";
const lifeURL = "https://capstone-w5uv.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    cart: null,
    carts: null,
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },

    setCart(state, value) {
      state.cart = value;
    },
    setCarts(state, value) {
      state.cart = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
  },
  actions: {
    async register(context, payload) {
      try {
        let { msg } = await axios.post(`${lifeURL}users/register`, payload);
        context.dispatch("fetchUsers");
        sweet({
          title: "User Added.",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${lifeURL}users`)).data;
        
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving users.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        let { result } = (await axios.get(`${lifeURL}users/${payload.id}`))
          .data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateUser(context, payload) {
      try {
        console.log(payload);
        let { msg } = await (
          await axios.patch(`${lifeURL}users/update/${payload.userID}`, payload)
        ).data;

        context.dispatch("fetchUsers");
        sweet({
          title: "Update user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        // "An error occurred when updating a user."
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async deleteUser(context, id) {
      try {
        let { msg } = await axios.delete(`${lifeURL}users/delete/${id}`);

        context.dispatch("fetchUsers");
        sweet({
          title: "Delete user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    async login(context, payload) {
      console.log(payload);
      try {
        let { result, msg, token } = (
          await axios.post(`${lifeURL}users/login`, payload)
        ).data;

        if (result) {
          context.commit("setUser", { result, msg });
          localStorage.setItem(
            "loggedUser",
            JSON.stringify({ token, result, msg })
          );
         //AunthenticatedUser.applyToken(token)

          sweet({
            title: msg,
            text: `Welcome Back, ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000,
          });

          
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000,
          });
          router.push({ name: "login" });
        }
      } catch {
        sweet({
          title: "Error",
          text: "Can't log in",
          icon: "error",
          timer: 2000,
        });
        
      }
    },


    logout() {
      localStorage.removeItem("loggedUser");
      router.push({ name: "home" });
    },

    async addProduct(context, add) {
      try {
        let { msg } = await axios.post(`${lifeURL}products/addProduct`, add);
        context.dispatch("fetchProducts");
        sweet({
          title: "Product Added.",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: e.message,
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${lifeURL}products`)).data;
        console.log();
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving products.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProduct(context, payload) {
      try {
        let { result } = (await axios.get(`${lifeURL}products/${payload.id}`))
          .data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet({
            title: "Retrieving a single product",
            text: "Product was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Product was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateProduct(context, payload) {
      try {
        let { msg } = await (
          await axios.patch(
            `${lifeURL}products/update/${payload.prodID}`,
            payload
          )
        ).data;

        context.dispatch("fetchProducts");
        sweet({
          title: "Update user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when updating the product.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async deleteProduct(context, id) {
      try {
        let { msg } = await axios.delete(`${lifeURL}products/delete/${id}`);

        context.dispatch("fetchProducts");
        sweet({
          title: "Deleted product",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting the product.",
          icon: "error",
          timer: 2000,
        });
      }
    },


    async addCart(context, payload) {
      try {
        (await axios.post(`${lifeURL}user/${payload.userID}/cart`, payload))
          .data;
        context.dispatch("fetchCart", payload);
        // context.commit("setCart", {payload });
        //   localStorage.setItem("cart",JSON.stringify({ payload }));
        sweet({
          title: "Adding Cart",
          text: "Item added to cart successfully.",
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when adding to cart.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchCart(context, id) {
      console.log(id);
    
      try {
        let { results } = (await axios.get(`${lifeURL}user/${id}/carts`)).data;
        console.log(`${lifeURL}user/${id}/carts`);
        context.commit("setCart", results);
        localStorage.setItem("cart", JSON.stringify({ results }));
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving carts.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    
    async deleteCartItem(context, payload) {
      console.log(payload);
      console.log(payload.cartID);
      try {
        await axios.delete(`${lifeURL}user/${payload.userID}/cart/${payload.cartID}`);
        console.log(`${lifeURL}user/${payload.userID}/cart/${payload.cartID}`);
        
    
        await context.dispatch("fetchCart", payload.cartID);
        sweet({
          title: "Delete cart",
          text: "Item deleted from cart successfully.",
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting cart item.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    
    async deleteCart(context, id) {
      try {
        await axios.delete(`${lifeURL}user/${id}/cart`);

        context.dispatch("fetchCart", id);
        sweet({
          title: "Delete cart",
          text: "Cart deleted successfully.",
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting cart.",
          icon: "error",
          timer: 2000,
        });
      }
    },
  },

  modules: {},
});
