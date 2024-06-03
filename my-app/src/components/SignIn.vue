<template>
    <div class = "base">
        <div class="card">
            <div class="text-center mb-5">  
                <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                <span class="text-600 font-medium line-height-3">Don't have an account?</span>
                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
            </div>

            <div class = "cardInfo">
                <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                <InputText id="email1" type="text" placeholder="Email address" v-model="user.email" class="w-full mb-3" />

                <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                <InputText id="password1" type="password" placeholder="Password" v-model="user.password" class="w-full mb-3" />

                    <Button @click="signUp" label="Sign Up" icon="pi pi-user" class="w-full"></Button>
                    <Button @click="signIn" label="Sign In" icon="pi pi-user" class="w-full"></Button>
            </div>
        </div>
    </div>
</template>

<script>
import { signIn, signUpNewUser} from './supabase'
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
    async signIn() {
      const store = userStore
      let userState = await signIn(this.user.email,this.user.password)
      if (userState === true){
        store.isUserLoggedIn = true
        store.username = this.user.email
        this.$router.push('/browse')
      }
      else{
        return false
      }
    },
    async signUp() {
      const store = userStore
      let userState = await signUpNewUser(this.user.email,this.user.password)
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
.base {
  padding: 11%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);
}

.card {
  background-color: black;
  margin-left: 25%;
  margin-right: 25%;
  padding: 1%;
}

.cardInfo {
  background-color: black;
  margin-left: 25%;
  margin-right: 25%;
  padding: 1%;
}


@media screen and (max-width:500px){
  .card{
    width: 80%;
    justify-content: center;
    text-size-adjust: 1.5rem;
    padding: 10%;
    margin-right: 3%;
    margin-left: 10%
  }
  .cardInfo{
    width: 80%;
    justify-content: center;
    margin-left: 15%;
  }
}
</style>