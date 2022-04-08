<template>
  <div class="container mx-auto">

    <MenuComponent></MenuComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import MenuComponent from "@/components/MenuComponent";
import FooterComponent from "@/components/FooterComponent";
export default {
  name: 'App',
  components: {
    MenuComponent,
    FooterComponent
  },
  methods:{
  }
}
</script>

<style>
#app {
  padding: 0;
  margin:0;
  box-sizing: border-box;
}
</style>