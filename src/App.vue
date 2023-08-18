<template>
  <navbar></navbar>
  <div class="app p-5">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style></style>
