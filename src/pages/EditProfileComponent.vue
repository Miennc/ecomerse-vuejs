<template>
  <div class="container mx-auto mt-20">
    <!-- This is an example component -->

    <div class="h-full">

      <div class="border-b-2 block md:flex">

        <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <div class="flex justify-between">
            <span class="text-xl font-semibold block">User Profile</span>
            <a href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800" @click="editProfile()">Edit</a>
          </div>

          <span class="text-gray-600">This information is secret so be careful</span>
          <div class="w-full p-8 mx-2 flex justify-center">
            <img id="showImage" class="max-w-xs w-32 items-center border"
                 src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                 alt="">
          </div>
        </div>

        <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
          <div class="rounded  shadow p-6">
            <div class="pb-6">

              <div class="flex">
                <input placeholder="name" type="text" class="border-2 border-gray-500 w-96 p-1 " v-model="name">
              </div>
            </div>
            <div class="pb-6">

              <div class="flex">
                <input placeholder="email" type="text" class="border-2 border-gray-500 w-96 p-1" v-model="email">
              </div>
            </div>
            <div class="pb-4">
              <input type="text" name="" id="" placeholder="phone" class="border-2 border-gray-500 w-96 p-1" v-model="phone">
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import {userServices} from '@/services/userServices.js'
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    }
  },
  methods: {
   async editProfile() {
      try{
      await userServices.editProfile({
        name: this.name,
        email: this.email,
        phone: this.phone,
      })
        alert('Profile Updated')
        this.$router.push({name:'Home'})
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>

</style>