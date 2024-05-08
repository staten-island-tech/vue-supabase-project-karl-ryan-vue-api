<script setup>
import BrowseCata from '../components/BrowseCata.vue'
import {ref, onMounted} from "vue";
const route = useRoute();

async function getTank(){
const supabaseUrl = 'https://zqqcwuxpkpyushoxzsha.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcWN3dXhwa3B5dXNob3h6c2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjYzMzAsImV4cCI6MjAyNzY0MjMzMH0.6APkrE0upj7PPo-yW63TaE41kJT_CFAzR_F7aafXkfI'
const supabase = createClient(supabaseUrl, supabaseKey)
let { data, error } = await supabase
  .from('tanks')
  .select('tank_name')
console.log({data,error})
}

onMounted(() => {
  getTank();
})

</script>

<template>
  <BrowseCata/>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
