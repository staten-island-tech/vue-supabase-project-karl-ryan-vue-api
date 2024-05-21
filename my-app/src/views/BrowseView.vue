<template>
  <h2> tanks</h2>
  <div class = "flexbox">
  <BrowseCata
    v-for="tank in tanks"
    :key="tank" 
    :tank="tank"
  />
  </div>
</template>

<script setup>
import BrowseCata from '@/components/BrowseCata.vue';
import { createClient } from '@supabase/supabase-js'
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

let tanks = ref([]);
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
  }
};
    
  // console.log({ data, error })

onMounted(getTank);

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.flexbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  justify-items: center;
  justify-content: center;
}
</style>