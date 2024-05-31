<template>
 <div class="ribbon">
    <h2>User: {{ userStore.username }}</h2>
    <RouterLink to="/browse">Browse</RouterLink>
    <RouterLink to="/shoppingCart">Orders/Logging Out</RouterLink>
  </div>
  <div v-if="tank" class="tank-details">
    <h2>{{ tank.tank_name }}</h2>
    <h3>Price: {{ tank.price }} Silver Lions</h3>
    <img :src="tank.images" alt="image" />
    <h4>Information:</h4>
    <li>{{ tank.main_armament }}</li>
    <li>{{ tank.ammo_types }}</li>
    <li>{{ tank.chassis }}</li>
    <h4>{{ tank.info }}</h4>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { createClient } from '@supabase/supabase-js';
import { userStore } from '@/stores/loginStore';

const route = useRoute();
const tank = ref(null);

const getTankDetails = async () => {
  const tankName = route.params.id; // Extract tank name from route parameters
  const supabaseUrl = 'https://zqqcwuxpkpyushoxzsha.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcWN3dXhwa3B5dXNob3h6c2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjYzMzAsImV4cCI6MjAyNzY0MjMzMH0.6APkrE0upj7PPo-yW63TaE41kJT_CFAzR_F7aafXkfI';
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from('tanks')
    .select('*')
    .eq('tank_name', tankName)
    .single();

  if (error) {
    console.error(error);
  } else {
    tank.value = data;
  }
};

onMounted(getTankDetails);
</script>

<style scoped>
.tank-details {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #0000008a;
  padding-bottom: 15%;
}

.ribbon {
  background-color: rgba(175, 175, 175, 0.582);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90vw;
  border: 2px solid black;
  gap: 10vw;
  color: rgb(255, 255, 255);
  margin: 0 auto;
  margin-bottom: 10px;
}
</style>