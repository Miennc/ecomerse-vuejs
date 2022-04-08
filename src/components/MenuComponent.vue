<template>
  <div>
    <div class="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10 lg:mx-12">
      <img class="w-16 h-16 " src="https://cdn.tgdd.vn/GameApp/1357107/anh-logo-nike-8-800x544.jpg" alt="">
      <div class="flex items-center gap-4">
        <div class="md:inline-block hidden">
          <ul class="flex items-center gap-4 ">
            <li><a href="" class="font-bold text-lg">Home</a></li>
            <li><a href="" class="font-bold text-lg">Danh Muc</a></li>
             <router-link :to="{name:'SignIn'}">
               <li><a href="" class="font-bold text-lg">Đăng ký</a></li>
             </router-link>
             <router-link :to="{name:'login'} ">
               <li><a href="" class="font-bold text-lg">Đăng nhập</a></li>
             </router-link>
          </ul>
        </div>

        <div class="md:hidden inline-block ">
          <i class="fa-solid fa-bars text-3xl"></i>
        </div>
        <div>
        <router-link :to="{name:'cart'}">
            <i class="fa-solid fa-cart-arrow-down text-3xl cursor-pointer"></i>
        </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script >
export  default {
data (){
  return {

  }
}
}
</script>

<style>

</style>