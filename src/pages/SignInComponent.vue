<template>
  <div>
    <form class="md:w-1/3 w-full p-10 my-20 rounded mx-auto flex flex-col form-wrapper shadow-lg shadow-black-500/50"
          @submit.prevent="signup" method="" action="">
      <div class="mb-6 pt-3 rounded text-md  text-grey-700 First_Name">
        <label class="block text-grey-700 text-md font-semibold mb-2 ml-3 label">
          Name
        </label>
        <input type="text" name="first_name" v-model="user.name"
               class="w-full h-10 pl-3 border-b-2 border-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"/>
        <p class="error font-semibold text-red-600">{{ err.name }} </p>
      </div>

      <div class="mb-6 pt-3 rounded text-md text-grey-700 Last_Name">
        <label class="block text-grey-700 text-md font-semibold mb-2 ml-3 label">
          Full Name
        </label>
        <input type="text" name="last_name" v-model="user.fullName"
               class="w-full h-10 pl-3 border-b-2 border-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"/>
        <p class="error font-semibold text-red-600">{{ err.fullName }} </p>
      </div>

      <div class="mb-6 pt-3 rounded text-md text-grey-700 Last_Name">
        <label class="block text-grey-700 text-md font-semibold mb-2 ml-3 label">
          Phone
        </label>
        <input type="number" name="phone" v-model="user.phone"
               class="w-full h-10 pl-3 border-b-2 border-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"/>
        <p class="error font-semibold text-red-600">{{ err.phone }} </p>
      </div>

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

      <div class="mb-6 pt-3 rounded text-md relative text-grey-700">
        <label class="block text-grey-700 text-md font-semibold mb-2 ml-3">
          Password Confirm
        </label>
        <input id="Password2" type="password" name="Password2" v-model="user.confirmPassword"
               class="w-full h-10 pl-3 border-b-2 border-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"/>
        <p class="error font-semibold text-red-600">{{ err.confirmPassword }} </p>
        <i class=" w-auto absolute top-14 right-4 cursor-pointer "></i>
      </div>

      <button
          class=" h-10 rounded bg-yellow-500  text-black font-semibold py-2 w-full shadow-lg hover:shadow-xl transition duration-200"
      >Sign up
      </button>
      <span class="form-input-login  pt-3">
      Already have an account?  <a class="mx-2 text-blue-600 cursor-pointer">Login</a>here
    </span>

    </form>
  </div>
</template>

<script>
import {userServices} from "@/services/userServices.js";

export default {
  name: "Signup",
  data() {
    return {
      user: {
        name: '',
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      err: {
        name: '',
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      countErr: 0,
    }
  },
  methods: {
    Validate() {
      if (!this.user.name) {
        this.err.name = "First Name is required.";
        this.countErr++;
      } else {
        this.err.name = "";
      }
      if (!this.user.fullName) {
        this.err.fullName = "Last Name is required.";
        this.countErr++;
      } else {
        this.err.fullName = "";
      }
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
      } else if (this.user.password.length < 6) {
        this.err.password = "Password must be more than 6 characters.";
        this.countErr++;
      } else {
        this.err.password = "";
      }
      if (!this.user.confirmPassword) {
        this.err.confirmPassword = "Password is required.";
        this.countErr++;
      } else if (this.user.confirmPassword !== this.user.password) {
        this.err.confirmPassword = "Password dot not match.";
        this.countErr++;
      } else {
        this.err.confirmPassword = "";
      }
      if (!this.user.phone) {
        this.err.phone = "Phone is required.";
        this.countErr++;
      } else {
        this.err.phone = "";
      }
      if (this.countErr > 0) {
        this.countErr = 0;
        return false;
      }
      this.countErr = 0;
      return true;
    },
    async signup(e) {
      if(!this.Validate()){
        return;
      }
      try {
        await userServices.SignIn({
          name: this.user.name,
          full_name: this.user.fullName,
          phone: this.user.phone,
          email: this.user.email,
          password: this.user.password,
        });
        this.$router.push({name: 'login'});
      } catch (e) {
        console.log(e)
      }

    },
  },
}
</script>

<style scoped>
</style>