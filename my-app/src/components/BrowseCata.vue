<template>
    <RouterLink :to="tankPath" class = "cardSet" v-if= "tank" >
      <h2> {{ tank.tank_name }}</h2>
      <h3> Price: {{ tank.price }} Silver Lions</h3>
    </RouterLink>
</template>

<script setup>
import {computed} from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  tank: Object,
});

console.log(props.tank);

const tankPath = computed(() => {
  return (props.tank)
});
</script>  

<style scoped>
  .cardSet {
  background-color: rgba(2, 2, 2, 0.596);
  border: 2px solid brown;
  margin: 3%;
  padding: 2.6%;
  text-align: center;
  flex-basis: 15%;
  width: 18%;
  color: white
}
</style>