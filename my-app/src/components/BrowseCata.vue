<template>
    <RouterLink :to="tankPath" class = "cardSet" v-if= "tank" >
      <h2> {{ tank }}</h2>
    </RouterLink>
</template>

<script setup>
import {computed} from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  tank: Object,
});

console.log(props.tank)

const tankPath = computed(() => {
  console.log("hi")
})
</script>  

<style scoped>
  .cardSet {
  background-color: rgba(255, 255, 255, 0.596);
  border: 2px solid brown;
  margin: 3%;
  text-align: center;
  width: 15%;
  color: white
}
</style>