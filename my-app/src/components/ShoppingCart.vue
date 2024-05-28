<template>
    <div class="cart">
        <RouterLink to="/loggedout" @click="logOut">Log Out</RouterLink> <br><br>
        <RouterLink to="/browse">Browse</RouterLink>
        <RouterLink to="/shoppingCart">cart</RouterLink>
      <h2>Your Cart</h2>
      <div class="text" >
        <h2>{{ userStore.cart }}</h2>
        <button @click="removeFromCart">Remove</button>
      </div>
     <!--  <h3>Total Quantity: {{ /* calculateTotalQuantity()  */}}</h3> -->
    </div>
  </template>
  
  <script setup>
  import { userStore } from '../stores/loginStore.js'
/*   const calculateTotalQuantity = () => {
    const totalQuantity = store.cart.reduce((total, item) => total + item.quantity, 0);
    return totalQuantity > 100 ? 'your soul' : String(totalQuantity);
  }; */

  function removeFromCart(){
    userStore.cart = ''
  }
  </script>

<style scoped>

.cart {
    color: Black;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height: 100%;
}
.text {
    font-size: 30px bold;

}
</style>