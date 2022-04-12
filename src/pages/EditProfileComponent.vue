<template>
  <div class="container mx-auto my-60">
    <div>

      <div class="bg-white relative  w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
        <div class="flex justify-center">
          <img :src="avatar" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white object-cover">
          <input type="file" class="image-uploads hidden" id="image-change" accept="image/*" v-on:change="onImageChange" multiple />
          <label class="image-upload cursor-pointer" for="image-change"  >
            <i class="fa-solid fa-camera z-50 mt-16 shadow-xl"></i>
          </label>
          <button class="mt-20" @click="handleAvatar()">post Avt</button>
        </div>

        <div class="mt-16">
          <h1 class="font-bold text-center text-3xl text-gray-900">{{user.full_name}}</h1>
          <p class="text-center text-sm text-gray-400 font-medium">Khách hàng thân thiết</p>
          <p>
            <span>

            </span>
          </p>
          <div class="my-5">
            <a href="#" class="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600">Connect with <span class="font-bold">@eduardpantazi</span></a>
          </div>
          <div class="flex justify-evenly my-5">
            <a href="" class="bg font-bold text-sm text-blue-800 w-full text-center py-3 hover:bg-blue-800 hover:text-white hover:shadow-lg">Facebook</a>
            <a href="" class="bg font-bold text-sm text-blue-400 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg">Twitter</a>
            <a href="" class="bg font-bold text-sm text-yellow-600 w-full text-center py-3 hover:bg-yellow-600 hover:text-white hover:shadow-lg">Instagram</a>
            <a href="" class="bg font-bold text-sm text-gray-600 w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg">Email</a>
          </div>

          <div class="w-full">
            <h3 class="font-bold text-gray-600 text-left px-4">Edit profile</h3>
            <div class="mt-5 w-full">
              <div class="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" class="rounded-full h-6 shadow-md inline-block mr-2">

                <input class=" w-full pl-3 py-1 rounded border border-yellow-500" type="text" v-model="editEmail" placeholder="email">
              </div>

              <div class="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" class="rounded-full h-6 shadow-md inline-block mr-2">

                <input class="  w-full pl-3 py-1 rounded border border-yellow-500" type="text" v-model="editName" placeholder="name">
              </div>

              <div class="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" class="rounded-full h-6 shadow-md inline-block mr-2">

                <input class=" w-full pl-3 py-1 rounded border border-yellow-500" type="text" v-model="editPhone" placeholder="phone">
              </div>

              <div class="w-full border-t-2 border-gray-100 text-center font-medium text-gray-600 py-4 px-4 block hover:bg-gray-100 transition duration-150">
                <button class="w-14 rounded p-2 bg-red-400 text-white" @click="updateProfile()">Edit</button>
              </div>

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
  name: "EditProfile",
  data(){
    return{
      user:[],
      editEmail:'',
      editPhone:'',
      editName:'',
      avatar:'https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-b0de2bad.jpg',
      image:[],
    }
  },
  methods: {
    async getUser(){
      try{
        const resp = await userServices.getDataUser();
        this.user = resp.data;
        if(this.user.full_avatar_path){
          console.log(this.user.full_avatar_path);
          this.avatar = this.user.full_avatar_path;
        }
      }catch(e) {
        console.log(e);
      }
    },
    async updateProfile(){
      try{
        const respEditProfile = await userServices.editProfile({
          email:this.editEmail,
          phone:this.editPhone,
          full_name:this.editName,
        });
        alert(respEditProfile.data.message);
      }catch (e){
        console.log(e);
      }
    },
    onImageChange(e){
      if(e.target.files[0]){
        this.image = e.target.files[0];
      }
    },
    async handleAvatar(){
      console.log(this.image);
      let formData = new FormData();
      formData.append('avatar', this.image);
      await userServices.postAvatar(
          formData
      )
    },
  },
  mounted() {
    this.getUser();
  }
}
</script>

<style scoped>
</style>