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
import { userStore } from "@/stores/loginStore";
import { ref, computed} from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  tank: Object,
});
const store = userStore();

console.log(props.tank);

const tankPath = computed(() => {
  // return (props.tank)
  return `/browse/${props.tank.tank_name}`;
});

let clicked = ref(0);

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
  }
    else {
    alert('There is 0 items selected. Please reselect. You cannot escape the snail...');
  }
}

</script>

<style scoped>
  .cardSet {
  background-color: rgba(255, 255, 255, 0.596);
  border: 2px solid rgb(201, 0, 0);
  margin: 3%;
  padding: 2.6%;
  text-align: center;
  flex-basis: 15%;
  width: 18%;
  color: white
}

.amount {
  display: flex;
  flex-basis: 10%;
  padding: 10%;
  margin: 0 auto;
}
</style>