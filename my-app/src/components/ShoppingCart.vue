<template>
    <div class="cart">
        <RouterLink to="/loggedout" @click="logOut">Log Out</RouterLink> <br><br>
        <RouterLink to="/browse">Browse</RouterLink>
        <RouterLink to="/shoppingCart">cart</RouterLink>
      <h2>Your Cart</h2>
      <div class="text">
      <ul>
        <li v-for="(item, index) in store.cart" :key="index">
          <h3>{{ item.name }}: Quantity - {{ item.quantity }} x {{ item.price }} Silver Lions
          <button @click="() => removeFromCart(index)">Remove</button></h3> 
        </li>
      </ul>
     <h3>Total Quantity: {{ calculateTotalQuantity()}}</h3>
     <h3>Total Price: {{ calculateTotal() }} Silver Lions</h3>
      </div>
    </div>
  </template>
  
  <script setup>
  import { userStore } from '../stores/loginStore.js'
  import { signOut } from './supabase.js';
  const store = userStore();

  const calculateTotalQuantity = () => {
    return store.cart.reduce((total, item) => total + item.quantity, 0);
  };

  function calculateTotal() {
  return store.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  function removeFromCart(index){
    store.cart.splice(index, 1);
  }

  async function logOut() {
  let userState = await signOut();
  if (userState === true) {
    store.isUserLoggedIn = false;
    store.username = null;
    store.cart = ([]);
  } else {
    return false;
  }
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