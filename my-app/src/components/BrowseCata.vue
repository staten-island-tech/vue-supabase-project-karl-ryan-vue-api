<template>
    <RouterLink :to="tankPath" class = "cardSet" v-if= "tank" >
      <h2> {{ tank.tank_name }}</h2>
      <h3> Price: {{ tank.price }} Silver Lions</h3>
      <h3>Add: {{ clicked }}</h3>
    </RouterLink>
    <div class="amount">
    <button @click="decrement()"> - </button>
    <button @click="addToCart()"> Add to Cart </button>
    <button @click="increment()"> + </button>
    </div>
</template>

<script setup>
import {ref, computed} from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  tank: Object,
});

console.log(props.tank);

const tankPath = computed(() => {
  // return (props.tank)
  return `/data/${props.tank.tank_name}`;
});

let clicked = ref(0);

function increment() {
  clicked.value++;
}

function decrement() {
  clicked.value = Math.max(clicked.value - 1, 0);
}

function addToCart() {
  if (clicked.value > 0) {
  cartValue({ name: props.tank.name, price: props.tank.price, nation: props.tank.nation, quantity: clicked.value });
  clicked.value = 0;
  }
    else {
    alert('There is 0 items selected. Please reselect. You cannot escape the snail...');
  }
}

</script>

<style scoped>
  .cardSet {
  background-color: rgba(255, 255, 255, 0.596);
  text-align: center;
  flex-basis: 15%;
  width: 28%;
  margin-bottom: 100px;
  color: white;
  
}

.amount {
  display: flex;
  flex-basis: 10%;
  padding: 10%;
  margin: 0 auto;
}
</style>