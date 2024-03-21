<template>
  <div class="mt-3 cart vh-100">
  <div class="panel-body ">
    <h1>here is your cart</h1>
    <div class="table-responsive mt-3">
      <table class="table">
        <thead>
          <tr>
            <th>#id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.cartID">
           
            <td>{{ item.cartID }}</td>
            <td>{{ item.prodName }}</td>
            <td>{{ item.amount}}</td>
            <td>{{item.quantity}}</td>
            <td>{{ item.TotalAmount }}</td>
         
            <td>
              <form class="form-inline">
               
                <button
                  @click.prevent="deleteCartItem(item.cartID)"
                  class="btnDelete">
                  <i class="bi bi-archive-fill"></i>
                </button>
              </form>
            </td>


          </tr>
         
        </tbody>
        <tfoot>
            <tr>
            <td class="text-right"><strong>Total Amount Due :</strong></td>
            <td></td>
            <td></td>
            <td></td>
            <td id="sum">{{totalSum()}}</td>
            <td><button type="button" @click.prevent="deleteCart(loggedUser?.UserID)" class="btn btn-secondary" >Clear cart</button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <br />


  <div class="d-flex justify-content-between">
    <router-link to="/products" class="btn btn-primary" id="clear">Continue Shopping</router-link>
    <!-- <button type="button" @click.prevent="deleteCart(loggedUser?.UserID)" class="btn btn-success">Clear cart</button> -->
   


  </div>


  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold" id="exampleModalLabel">Thank you for shopping with us</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <img src="https://i.postimg.cc/Vkf1VPP2/success-removebg-preview.png" alt="success" width="50" height="50">
          <br>
          We'll send you payment information and delivery arrangement via email
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>






<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart || [];
     
    },
    loggedUser() {
      return JSON.parse(localStorage.getItem("loggedUser")).result;
    }
  },
  created() {
    this.$store.dispatch("fetchCart", this.loggedUser.UserID);
  },
  methods: {
    totalSum() {
      let sum = 0;
      for (let item of this.cart) {
        sum += parseFloat(item.TotalAmount);
      }
      return sum.toFixed(2);
    },
    deleteCartItem(cartID) {
      const payload = {
        userID: this.loggedUser.UserID,
        cartID: cartID
      };
      this.$store.dispatch("deleteCartItem", payload);
      location.reload()
    },
    deleteCart() {
      this.$store.dispatch("deleteCart", this.loggedUser.UserID);
    }
  }
}
</script>




<style>
.table{
 border-top: coral;
}
.cart{
  background-color: rgb(203, 200, 200);
}
#clear{
  background-color: #538f48
}
</style>
