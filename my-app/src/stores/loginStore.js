import { defineStore } from 'pinia'
import {ref} from 'vue'

export const userStore = defineStore('loginStore', () => {
  const isUserLoggedIn = ref(false)
  const name = ref('')
  

  return {isUserLoggedIn, name}
})
