<template>
    <div class="cart">
        <RouterLink to="/loggedout" @click="logOut">Log Out</RouterLink> <br><br>
        <RouterLink to="/browse">Browse</RouterLink>
        <RouterLink to="/shoppingCart">cart</RouterLink>
      <h2>Your Cart</h2>
      <div class="text">
      <ul>
        <li v-for="(item, index) in store.cart" :key="index">
          {{ item.name }} - {{ item.quantity }} x {{ item.price }} Silver Lions
          <button @click="() => removeFromCart(index)">Remove</button>
        </li>
      </ul>
     <!--  <h3>Total Quantity: {{ /* calculateTotalQuantity()  */}}</h3> -->
    </div>
    </div>
  </template>
  
  <script setup>
  import { userStore } from '../stores/loginStore.js'
  const store = userStore();
/*   const calculateTotalQuantity = () => {
    const totalQuantity = store.cart.reduce((total, item) => total + item.quantity, 0);
    return totalQuantity > 100 ? 'your soul' : String(totalQuantity);
  }; */

  function removeFromCart(index){
    store.cart.splice(index, 1);
  }

  async function logOut() {
  let userState = await signOut();
  if (userState === true) {
    store.isUserLoggedIn = false;
    store.username = null;
    this.$router.push('/');
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