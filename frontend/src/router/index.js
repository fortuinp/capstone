import { createRouter, createWebHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue")
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UsersView.vue"),
  },
  
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../views/LogoutView.vue"),
  },
  {
    path: "/profile",
    name: "userprofile",
    component: () => import("../views/ProfileView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
