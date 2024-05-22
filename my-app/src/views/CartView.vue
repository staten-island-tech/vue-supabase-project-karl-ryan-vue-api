<template>
    <div>
        <RouterLink to="/loggedout" @click="logOut">Log Out</RouterLink> <br><br>
    <RouterLink to="/browse">Browse</RouterLink>
    <RouterLink to="/shoppingCart">cart</RouterLink>
        <shoppingcart></shoppingcart>
    </div>
</template>

<script setup>
import shoppingcart from '../components/ShoppingCart.vue'
</script>

<style scoped>

</style>