<template>
  <div class="panel-body">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.cartID">
            <td>{{ item.prodName }}</td>
            <td>{{ item.amount }}</td>
            <td>{{item.quantity}}</td>
            <td>{{ item.TotalAmount }}</td>
          
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <br />

  <div class="d-flex justify-content-between">
    <router-link to="/products" class="btn btn-primary">Continue Shopping</router-link>
    <button type="button" @click.prevent="checkoutCart" class="btn btn-success">Checkout Cart</button>
    <button type="button" @click.prevent="fetchCart" class="btn btn-success">show Cart</button>
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
</template>



<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    loggedUser() {
      return JSON.parse(localStorage.getItem("loggedUser"));
    },
  },
  created() {
    this.fetchCart();
  },
  methods: {
    fetchCart() {
      this.$store.dispatch("fetchCart", this.loggedUser.UserID)
    }}
};
</script>

