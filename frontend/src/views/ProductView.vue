<template>
    <div v-if="product" class="ProdCont text-center mt-3">
        <h1 class="text-danger">{{ product.prodName }}</h1>

        <img :src="product.prodUrl2" class="card-img-top mx-auto mt-4 border border-3 border-black p-5 w-25" alt="Pro">
        <h5 class="w-50 mx-auto m-3">{{ product.prodDescription }}</h5>
        <h3>R{{ product.amount }}</h3>
        
        <div>
            <button   @click.prevent="addToCart(product)" id="cartbtn" class=" mx-1">Add to Cart</button>
            <input type="number" id="quantity" v-model="quantity" placeholder="1">
        </div>
        <router-link to="/products" class="nav-link link-light">
            <a class="btn btn-light bg-black text-white m-3" href="#" role="button">Go back</a>
        </router-link>
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
            quantity: 1 
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
      return JSON.parse(localStorage.getItem("loggedUser")).result;
    }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params);
    },
    methods: {
        addToCart(product) {
            const payload = {
                userID: this.loggedUser?.UserID,
                prodID: product.prodID, 
                quantity: parseInt(this.quantity) || 1
            };
            console.log(this.loggedUser.UserID);
            // console.log(this.addToCart(payload));
            this.$store.dispatch('addCart', payload);
        }
    }
}
</script>

<style>
#cartbtn{
    
  background-color:#538f48 ;
    width: 8rem;
    height: 2rem;
}
#quantity{
    width: 4rem;
    height: 2rem;
}
</style>
