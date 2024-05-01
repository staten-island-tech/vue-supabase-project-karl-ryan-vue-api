import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zqqcwuxpkpyushoxzsha.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcWN3dXhwa3B5dXNob3h6c2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjYzMzAsImV4cCI6MjAyNzY0MjMzMH0.6APkrE0upj7PPo-yW63TaE41kJT_CFAzR_F7aafXkfI'
const supabase = createClient(supabaseUrl, supabaseKey)
import {ref, watch} from 'vue'

export const userState = defineStore('user', {
  userData: () =>{
  const email = [];
  const password = [];
  const signUp = async (email, password) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    },
    )
    if (error) {
      error.value = error.message;
    }
  }
  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      error.value = error.message;
    } else {
      user.value = data;
    }
  }
  const signOut = async () => {
    await supabase.auth.signOut();
    user.value = null;
}}},


)