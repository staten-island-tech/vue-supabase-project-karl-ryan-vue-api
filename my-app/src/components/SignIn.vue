<template>
    <div>
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div class="text-center mb-5">
                <img src="../assets/image.png" alt="Image" height="50" class="mb-3" />
                <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                <span class="text-600 font-medium line-height-3">Don't have an account?</span>
                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
            </div>

            <div>
                <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                <InputText id="email1" type="text" placeholder="Email address" v-model="user.email" class="w-full mb-3" />

                <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                <InputText id="password1" type="password" placeholder="Password" v-model="user.password" class="w-full mb-3" />

                <div class="flex align-items-center justify-content-between mb-6">
                    <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
                </div>

                    <Button @click="submit" label="Sign In" icon="pi pi-user" class="w-full"></Button>
            </div>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue'
import { authUser } from './supabase'
import { userStore } from '@/stores/loginStore'
export default {
  data() {
    return {
      user: {
        email:'',
        password:'',}

    }
  },
  methods: {
    async submit() {
      const store = userStore
      let userState = await authUser(this.user.email,this.user.password)
      if (userState === true){
        store.isUserLoggedIn = true
        store.username = this.user.email
        this.$router.push('/browse')
      }
      else{
        return false
      }
    }
  }
}
</script>

<style  scoped>

</style>