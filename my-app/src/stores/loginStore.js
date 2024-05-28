import { defineStore } from 'pinia'
import {ref} from 'vue'

export const userStore = defineStore('loginStore', () => {
  const isUserLoggedIn = ref(false)
  const username = ref('')
  const cart = ref['']

  return {isUserLoggedIn, username, cart}
})

