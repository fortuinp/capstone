<template>
    <div v-if="product" class="ProdCont text-center mt-3">
        <h1 class="text-danger">{{ product.prodName }}</h1>
        <img :src="product.prodUrl" class="card-img-top mx-auto mt-4 border border-3 border-black p-5 w-25" alt="Pro">
        <img :src="product.prodUrl2" class="card-img-top mx-auto mt-4 border border-3 border-black p-5 w-25" alt="Pro">
        <h5 class="w-50 mx-auto m-3">{{ product.prodDescription }}</h5>
        <h3>R{{ product.amount }}</h3>
        <router-link to="/products" class="nav-link link-light">
            <a class="btn btn-light bg-black text-white m-3" href="#" role="button">Go back</a>
        </router-link>

        <div>
            <button @click="addToCart(product)">Add to Cart</button>
            <input type="number" id="quantity" v-model="quantity" placeholder="1">
        </div>
    </div>

    <div class="row mx-auto" v-else>
        <Spinner />
    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
export default {
    data() {
        return {
            quantity: 1 // Default quantity
        };
    },
    components: {
        Spinner
    },
    computed: {
        product() {
            return this.$store.state.product;
        },
        loggedUser(){
      return JSON.parse(localStorage.getItem("loggedUser"));
    }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params);
    },
    methods: {
        addToCart(product) {
            const payload = {
                product,
                quantity: parseInt(this.quantity) || 1, // Use the quantity from the input field or default to 1
                userID: this.loggedUser?.userID,// Check if loggedUser exists
               
                prodID: product.prodID // Assuming prodID is a property of the product
                
            };
            console.log(this.loggedUser);
            this.$store.dispatch('addCart', payload);
        }
    }
}
</script>
