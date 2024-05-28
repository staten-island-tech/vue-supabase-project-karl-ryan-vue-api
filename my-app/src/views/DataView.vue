<template>
  <div v-if="tank" class="tank-details">
    <h2>{{ tank.tank_name }}</h2>
    <h3>Price: {{ tank.price }} Silver Lions</h3>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { createClient } from '@supabase/supabase-js';

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
  background-color: #000000;
}
</style>