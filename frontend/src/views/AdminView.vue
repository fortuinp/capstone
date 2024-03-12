<template>
  <div class="container ">
    <div class="mt-4">
      <nav class="navbar nav-pills nav-underline bg-black w-100 w-md-25 justify-content-center mx-auto" role="tablist">
        <ul class="d-block d-md-flex  mt-2  ">
          <li class="nav-item mx-2">
            <a class="nav-link link-light" aria-current="page" href="#">Products</a>
          </li>
          <li class="nav-item mx-4">
            <router-link to="/users" class="nav-link link-light">Users</router-link>
          </li>
        </ul>

      </nav>
    </div>

    <div class=" prodBtn d-block d-md-flex row text-end mt-4">
        <div class="col">
          <input v-model="searchInput" type="text" placeholder="Search User by firstName" @input="Search"
            class="form-control">
        </div>
        <div class="col ">
          <button class=" btn btn-dark"> Filter</button>
        </div>
        <div class="col-2 mx-3">
          <button class=" btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"> Add a User</button>
        </div>
        <!-- Modal-->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h5 class="text-start">Name: </h5>
                <input v-model="payload.prodName" type="text" placeholder="Name" class="form-control">
                <h5 class="text-start mt-2">quantity: </h5>
                <input v-model="payload.quantity" type="text mt-2" placeholder="quantity" class="form-control">
                <h5 class="text-start mt-2">amount: </h5>
                <input v-model="payload.amount" type="text" placeholder="amt" class="form-control">
                <h5 class="text-start mt-2">cat: </h5>
                <input v-model="payload.prodCategory" type="text" placeholder="cat" class="form-control">
                <h5 class="text-start mt-2">des: </h5>
                <input v-model="payload.prodDescription" type="text" placeholder="des" class="form-control">
                <h5 class="text-start mt-2">url: </h5>
                <input v-model="payload.prodUrl" type="text" placeholder="url" class="form-control">
                <h5 class="text-start mt-2">url2: </h5>
                <input v-model="payload.prodUrl2" type="text" placeholder="url2" class="form-control">

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button @click="addProd()" type="button" class="btn btn-dark">Add pro</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal edit
        <div class="modal fade" :id="'edit' + product.prodIDrodID" tabindex="-1" aria-labelledby="edit" aria-hidden="true"   v-for="product in products" :key="product.prodID">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="edit">Edit User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h5 class="text-start">Name: </h5>
                <input v-model="payload.prodName" type="text" :placeholder="product.prodName" class="form-control">
                <h5 class="text-start mt-2">quantity: </h5>
                <input v-model="payload.quantity" type="text" :placeholder="product.quantity" class="form-control">
                <h5 class="text-start mt-2">amt </h5>
                <input v-model="payload.amount" type="text" :placeholder="product.amount" class="form-control">
                <h5 class="text-start mt-2">cat: </h5>
                <input v-model="payload.prodCategory" type="text" :placeholder="product.prodCategory" class="form-control">
                <h5 class="text-start mt-2">des: </h5>
                <input v-model="payload.prodDescription" type="text" :placeholder="product.prodDescription" class="form-control">
                <h5 class="text-start mt-2">url: </h5>
                <input v-model="payload.prodUrl" type="text" :placeholder="product.prodUrl" class="form-control">
                <h5 class="text-start mt-2">url2: </h5>
                <input v-model="payload.prodUrl2" type="text" :placeholder="product.prodUrl2" class="form-control">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button  @click="editProd(product.ProdID)" type="button" class="btn btn-dark">Update User</button>
              </div>
            </div>
          </div>
        </div> -->

        <!-- Modal edit -->
<div class="modal fade" :id="'edit' + product.prodID" tabindex="-1" aria-labelledby="edit" aria-hidden="true" v-for="product in products" :key="product.prodID">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="edit">Edit User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5 class="text-start">Name: </h5>
        <input v-model="payload.prodName" type="text" class="form-control">
        <h5 class="text-start mt-2">quantity: </h5>
        <input v-model="payload.quantity" type="text" class="form-control">
        <h5 class="text-start mt-2">amt </h5>
        <input v-model="payload.amount" type="text" class="form-control">
        <h5 class="text-start mt-2">cat: </h5>
        <input v-model="payload.prodCategory" type="text" class="form-control">
        <h5 class="text-start mt-2">des: </h5>
        <input v-model="payload.prodDescription" type="text" class="form-control">
        <h5 class="text-start mt-2">url: </h5>
        <input v-model="payload.prodUrl" type="text" class="form-control">
        <h5 class="text-start mt-2">url2: </h5>
        <input v-model="payload.prodUrl2" type="text" class="form-control">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="editProd(product.prodID)" type="button" class="btn btn-dark">Update User</button>
      </div>
    </div>
  </div>
</div>

        <!-- Modal delete-->
        <div class="modal fade" :id="'delete' + product.prodID" tabindex="-1" aria-labelledby="delete" aria-hidden="true"
          v-for="product in products" :key="product.prodID">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title  fs-5" id="delete">Delete User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h5 class="text-start">Are you sure?</h5>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button @click.prevent="deleteProduct(product.prodID)" type="button" class="btn btn-dark">Delete prod</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="AdiCont table mt-5 text-center mx-auto" v-if="products">
      <thead>
        <tr>
          <th>  ID</th>
          <th> Name</th>
          <th>q</th>
          <th>a</th>
          
        </tr>
      </thead>
      <tbody class="text-center mb-5">
        <tr v-for="product in filterProduct" :key="product.prodID">
          <th scope="row"> {{ product.prodID }}</th>
          <td> {{ product.prodName }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.amount }}</td>
         
 
          <td> <button class=" btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#edit' + product.prodID"> Edit</button></td>
  
          <td><button class="  btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#delete' + product.prodID">
              Delete</button></td>
        </tr>
      </tbody>
    </table>
    <div class="row mx-auto" v-else>
      <Spinner />
    </div>
  </template>
    
  <script>
  import Spinner from '@/components/Spinner.vue';
  export default {
    name: "ProductsView",
    data() {
      return {
        searchInput: '',
        payload:
        {
          "prodName": null,
          "quantity": null,
          "amount": null,
          "prodCategory": null,
            "prodDescription": null,
            "prodUrl": null,
            "prodUrl2":null,
         
        }
  
      }
    },
    components: {
      Spinner
    },
    computed: {
      products() {
        return this.$store.state.products
      },
      filterProduct() {
        return this.$store.state.products.filter(product =>
          product.prodName?.toLowerCase().includes(this.searchInput.toLowerCase())
        );
  
      }
    },
    mounted() {
      this.$store.dispatch('fetchProducts')
    },
    methods: {
      Search() {
        this.searchInput
      },
      deleteProduct(prodID) {
        this.$store.dispatch('deleteProduct', prodID)
      },
      addProd() {
        this.$store.dispatch('addProduct', this.payload)
      },
      editProd(prodID) {
        const updateData = Object.assign({}, {prodID}, this.payload)
        this.$store.dispatch('updateProduct', updateData)
      }
    }
  
  }
  </script>
    
    
  
  
  <style src="../assets/css/style.css"></style>