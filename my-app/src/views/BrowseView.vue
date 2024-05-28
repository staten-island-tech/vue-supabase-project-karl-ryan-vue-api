<template>
  <nav class="filter">
    <select v-model="selectedNation">
        <option value="">All Nations</option>
        <option v-for="nation in nations" :key="nation" :value="nation">{{ nation }}</option>
      </select>
  </nav>
  <div class="ribbon">
    <h2>User: {{ userStore.username }}</h2>
    <RouterLink to="/loggedout" @click="logOut">Log Out</RouterLink> <br><br>
    <RouterLink to="/browse">Browse</RouterLink>
    <RouterLink to="/shoppingCart">cart</RouterLink>
  </div>
  
  <div class = "flexbox">
  <BrowseCata
    v-for="tank in filteredTanks"
    :key="tank.tank_name" 
    :tank="tank"
  />
  <RouterLink
      v-for="tank in filteredTanks"
      :key="tank.tank_name"
      :tank="tank"
      :to="{ name: 'data', params: { id: tank.tank_name } }"
  >
    </RouterLink>
  </div>
</template>

<script setup>
import BrowseCata from '@/components/BrowseCata.vue';
import { signOut } from '@/components/supabase';
import { createClient } from '@supabase/supabase-js'
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { userStore } from '@/stores/loginStore';
const route = useRoute();
async function logOut() {
      const store = userStore
      let userState = await signOut()
      if (userState === true){
        store.isUserLoggedIn = false
        store.username = null
        this.$router.push('/')
      }
      else{
        return false
      }
    }

const tanks = ref([]);
const selectedNation = ref('');
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
  if (!selectedNation.value) {
    return tanks.value;
  }
  return tanks.value.filter(tank => tank.nation === selectedNation.value);
});

onMounted(getTank);

</script>

<style>

.ribbon {
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  border: 2px solid black;
  gap: 15vw;
  color: black;
  margin-bottom: 2%
}
.flexbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 99%;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 5px;
  gap: 20px;
  background-color: #000000;
}

.filter {
  justify-content: center;
  display: flex;
  margin-bottom: 3vh
}
</style>