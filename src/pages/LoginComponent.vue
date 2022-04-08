<template>
  <div>
    <form class="md:w-1/3 w-full p-10 my-20 rounded mx-auto flex flex-col form-wrapper shadow-lg shadow-black-500/50"
          @submit.prevent="login" method="" action="">

      <div class="mb-6 pt-3 rounded text-md text-grey-700">
        <label class="block text-grey-700 text-md font-semibold mb-2 ml-3">
          Email
        </label>
        <input type="text" id="Email" name="Email" v-model="user.email"
               class="w-full h-10 pl-3 border-b-2 border-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"/>
        <p class="error font-semibold text-red-600">{{ err.email }} </p>
      </div>

      <div class="mb-6 pt-3 rounded text-md relative text-grey-700">
        <label class="block text-grey-700 text-md font-semibold mb-2 ml-3">
          Password
        </label>
        <input type="password" id="Password" name="Password" v-model="user.password"
               class="w-full h-10 pl-3 border-b-2 border-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"/>
        <p class="error font-semibold text-red-600">{{ err.password }}</p>
        <i class=" w-auto absolute top-14 right-4 cursor-pointer "></i>
      </div>

      <button
          class=" h-10 rounded bg-yellow-500  text-black font-semibold py-2 w-full shadow-lg hover:shadow-xl transition duration-200"
      >Login
      </button>
      <span class="form-input-login  pt-3">
      Already have an account?  <a class="mx-2 text-blue-600 cursor-pointer">login</a>here
    </span>

    </form>
  </div>
</template>

<script>
import {userServices} from '@/services/userServices.js'

export default {
  name: "login",
  data() {
    return {
      users: [],
      user: {
        email: '',
        password: '',
      },
      err: {
        email: '',
        password: '',
      },
      countErr: 0,
    }
  },
  methods: {
    Validate() {
      if (!this.user.email) {
        this.err.email = "Email is required.";
        this.countErr++;
      } else if (!/\S+@\S+\.\S+/.test(this.user.email)) {
        this.countErr++;
        this.err.email = "Email is invalid.";
      } else {
        this.err.email = "";
      }
      if (!this.user.password) {
        this.err.password = "Password is required.";
        this.countErr++;
      } else {
        this.err.password = "";
      }
      if (this.countErr > 0) {
        this.countErr = 0;
        return false;
      }
      this.countErr = 0;
      return true;
    },
    async login(e) {
     if(this.Validate()){
       return;
     }
      userServices.Login({
        email: this.user.email,
        password: this.user.password,
      }).then(res => {
        localStorage.setItem('token', res.data.token);
        this.$router.push('/');
      }).catch(err => {
        console.log(err);
      })
    },
  },
}
</script>

<style scoped>
</style>