<template>
  <div class="h-16 bg-cyan-950 shadow-lg flex items-center px-15">
    <div
      @click="$router.push('/')"
      class="text-3xl font-bold text-cyan-400 pl-5"
    >
      My blog
    </div>
    <div class="ml-auto">
      <my-button @click="$router.push('/posts')">Пости</my-button>
      <my-button @click="$router.push('/about')" type="secondary"
        >Про блог</my-button
      >
      <my-button @click="$router.push('/store')" type="primary"
        >Store</my-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
