import { defineStore } from 'pinia'
import {ref} from 'vue'

export const userStore = defineStore('loginStore', () => {
  const isUserLoggedIn = ref(false)
  const name = ref('')
  const cart = ref('')
  

  return {isUserLoggedIn, name}
})
