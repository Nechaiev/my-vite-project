<template>
  <div class="p-5 max-w-7xl mx-auto my-0">
    <base-navbar></base-navbar>
    <div class="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BaseNavbar from "../Navbar.vue";
export default {
  components: {
    BaseNavbar,
  },
};
</script>

<style></style>
