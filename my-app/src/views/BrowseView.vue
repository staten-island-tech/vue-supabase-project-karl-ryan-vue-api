<template>
  <nav class="filter">
    <select v-model="selectedNation">
        <option value="">All Nations</option>
        <option v-for="nation in nations" :key="nation" :value="nation">{{ nation }}</option>
      </select>
      <input type="text" v-model="searchBox" placeholder="Search By Tank name">
  </nav>
  <div class="ribbon">
    <h2>User: {{ userStore.username }}</h2>
    <RouterLink to="/browse">Browse</RouterLink>
    <RouterLink to="/shoppingCart">Orders/Logging Out</RouterLink>
  </div>
  
  <div class = "flexbox">
  <BrowseCata
    v-if="filteredTanks.length"
    v-for="tank in filteredTanks"
    :key="tank.tank_name" 
    :tank="tank"
  />
  <p v-else-if="searchBox">No Tanks With that Name...</p>
  </div>
</template>

<script setup>
import BrowseCata from '@/components/BrowseCata.vue';
import { createClient } from '@supabase/supabase-js'
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { userStore } from '@/stores/loginStore';
const route = useRoute();

const tanks = ref([]);
const selectedNation = ref('');
const searchBox = ref('');
const nations = ref([]);

const getTank = async () => {
  const supabaseUrl = 'https://zqqcwuxpkpyushoxzsha.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcWN3dXhwa3B5dXNob3h6c2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjYzMzAsImV4cCI6MjAyNzY0MjMzMH0.6APkrE0upj7PPo-yW63TaE41kJT_CFAzR_F7aafXkfI'
  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data, error } = await supabase
    .from('tanks')
    .select('')

    if (error) {
    console.error (error);
  } else {
    tanks.value = data;
    nations.value = [...new Set(data.map(tank => tank.nation))];
  }
};
 // console.log({ data, error })

const filteredTanks = computed(() => {
  let filtered = tanks.value;
  if (selectedNation.value) {
    filtered = filtered.filter(tank => tank.nation === selectedNation.value);
  }
  if (searchBox.value) {
    filtered = filtered.filter(tank => tank.tank_name.toLowerCase().includes(searchBox.value.toLowerCase()));
  }
  return filtered;
});

onMounted(getTank);

</script>

<style>

.ribbon {
  background-color: rgba(175, 175, 175, 0.582);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90vw;
  border: 2px solid black;
  gap: 15vw;
  color: rgb(255, 255, 255);
  margin: 0 auto;
  margin-bottom: 10px;
}
.flexbox {
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 5px;
  gap: 20px;
  background-color: #00000096;
}

.filter {
  justify-content: center;
  display: flex;
  margin-bottom: 3vh
}
</style>