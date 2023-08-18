<template>
  <div class="h-16 bg-cyan-950 shadow-lg flex items-center px-15">
    <div @click="$router.push('/')" class="text-xl">My blog</div>
    <div class="ml-auto">
      <my-button @click="$router.push('/posts')" class="ml-5">Пости</my-button>
      <my-button @click="$router.push('/about')" class="ml-5"
        >Про блог</my-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
