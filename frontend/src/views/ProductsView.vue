<template>

  <div class="container">
    <h2 class="ProdHead text-center mb-4 ms-5">Products</h2>
    <div class="row gap-1">
      <input v-model="searchInput" id="input" type="text" placeholder="Search Product by name" @input="Search"
      class="form-control">
      <button @click="sortItems" id="sort" class=" btn btn-dark"> Sort by Price</button>
   
    </div>


    <div class="col "></div>
    <div class=" row gap-5 mb-5 " v-if="products">
      <Card v-for="product in displayedProducts" :key="product.prodID" class=" text-center" id="cardPro">
        <template #cardHeader>
          <img :src="product.prodUrl" class="card-img-top mx-auto mt-4  w-75" alt="Pro">
        </template>
        <template #cardBody>
          <h4 class="card-text text-dark mt-3 ">
            {{ product.prodName }}
          </h4>
          <h5 class="card-text text-dark mt-3 ">
            {{ product.prodCategory }}
          </h5>
          <h5 class="card-text text-dark ">
            R{{ product.amount }}
          </h5>
          <router-link :to="{ name: 'product', params: { id: product.prodID } }"><button
              class="btn bg-black text-white">
              View More </button> </router-link>
        </template>
      </Card>
    </div>
    <div class="row mx-auto" v-else>
      <Spinner />
    </div>
  </div>





</template>




<script>
import Spinner from '../components/Spinner.vue';
import Card from '../components/Card.vue';






export default {


  name: "ProductsView",
  data() {
    return {
      searchInput: '',
      sortedItems: false,
      selectedCategory: '',
      Products: [
        {
          prodID: null,
          prodName: null,
          quantity: null,
          amount: null,
          prodCategory: null,
          prodDescription: null,
          prodUrl: null,
          prodUrl2: null
        }
      ]
    }


  },
  components: {
    Card, Spinner
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    displayedProducts() {
      let items = [...this.products];
      if (this.sortedItems) {
        items.sort((a, b) => a.amount - b.amount);
      } else if (this.searchInput) {
        items = items.filter(product =>
          product.prodName.toLowerCase().includes(this.searchInput.toLowerCase())
        );
      }
      return items;
    },


  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
  methods: {
    Search() {
      this.searchInput
    },
    sortItems() {
      this.sortedItems = !this.sortedItems;
    },
  }


}


</script>




<style>
#drop {
  width: 15rem;
}

#input {
  width: 15rem;
}

#sort {
  width: auto;
}

.ProdCar {
  font-family: sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: x-large;

  ;
}

*/ .prodBtn {
  font-family: sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: x-large;
}

.ProdHead {
  font-family: sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: xx-large;
}


.card {
  width: 18rem;
  height: 20rem;
  background-color: #538f48
}

.card-img-top {
  width: 8rem;
  height: 16rem;
}


#cardPro {
  width: 20rem;
  height: auto;
  color: red
}


/* Product COntent */
.ProdCont {
  font-family: sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: x-large;
}


.Products {
  background-color: white;
}


@media screen and (max-width:412) {
  .card {
    width: auto;
    height: auto;
    background-color: #538f48
  }

  .card-img-top {
    width: auto;
    height: auto;
  }


  #cardPro {
    width: auto;
    height: auto;
    color: red
  }
}
</style>
