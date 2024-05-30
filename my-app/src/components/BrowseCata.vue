<template>
    <div class = "cardSet">
      <RouterLink :to="tankPath" v-if= "tank">
        <h2> {{ tank.tank_name }}</h2>
        <h3> Price: {{ tank.price }} Silver Lions</h3>
        <h3>Add: {{ clicked }}</h3>
      </RouterLink>
      <div class="amount">
        <button @click="decrement()"> - </button>
        <button @click="addToCart()"> Add to Cart </button>
        <button @click="increment()"> + </button>
      </div>
      <p v-if="isAdded" class="addMessage">Status: Already in Cart</p>
    </div>
</template>

<script setup>
import { userStore } from "@/stores/loginStore";
import { ref, computed, watchEffect} from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  tank: Object,
});
const store = userStore();

console.log(props.tank);

const tankPath = computed(() => {
  return `/data/${props.tank.tank_name}`;
});

let clicked = ref(0);
let isAdded = ref(false);

function increment() {
  clicked.value++;
}

function decrement() {
  clicked.value = Math.max(clicked.value - 1, 0);
}

function addToCart() {
  let item = { name: props.tank.tank_name, price: props.tank.price, nation: props.tank.nation, quantity: clicked.value }
  if (clicked.value > 0) {
    store.cart.push(item);
    clicked.value = 0;
    isAdded.value=true;
  }
    else {
    alert('There is 0 items selected. Please reselect. You cannot escape the snail...');
  }
}

 watchEffect(() => {
  isAdded.value = store.cart.some(item => 
  item.name === props.tank.tank_name);  
});

</script>

<style scoped>
  .cardSet {
  background-color: rgba(255, 255, 255, 0.726);
  text-align: center;
  flex-basis: 23%;
  width: 49%;
  margin: 0 auto;
  color: black;
  
}

.cardSet :hover {
  scale: 105%;
}

.amount {
  align-items: center;
  display: flex;
  flex-basis: 10%;
  padding: 10%;
  margin: 0 auto;
}

a {
  color: blue;
  text-decoration: none;
}
</style>