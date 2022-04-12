<template>
  <div>
     <h1 class="text-center text-4xl my-44">Đặt hàng thành công</h1>
     <router-link :to="{name:'Home'}">
       <div class=" w-44 h-12 bg-red-500 mx-auto flex justify-center items-center text-white ">
         <button>quay về trang chủ</button>
       </div>
     </router-link>
  </div>
</template>

<script >
export default  {
  data(){
    return {

    }
  }
}
</script>

<style>

</style>