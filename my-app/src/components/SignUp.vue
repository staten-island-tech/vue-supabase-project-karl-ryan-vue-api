<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">Welcome</h1>
    <h2>
      Disclaimer: This website does not directly allow you to buy classified tank parts and is just a simulation. Nevertheless, you still need an account to access our website.
      Note: This website does not save your data after refresh or logout, do your orders wisely.
    </h2>
    <h3>
      <a href="https://warthunder.com/en/">JOIN WAR THUNDER NOW</a>
    </h3>
  </div>
</template>

<style scoped>
.greetings {
  color: white;
}

a {
  color: white
}

@media screen and (max-width:500px){
  .greetings {
    max-width: 90vw;
    margin-left: 5%;
    font-size: 0.75rem;
  }
}
</style>