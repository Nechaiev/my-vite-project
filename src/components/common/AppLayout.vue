<template>
  <div>
    <navbar></navbar>
    <div class="app p-5 max-w-7xl mx-auto my-0">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>


<style>
#app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
