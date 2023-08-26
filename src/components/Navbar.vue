<template>
  <div class="h-16 bg-cyan-950 shadow-lg flex items-center pr-2 px-15">
    <div
      @click="$router.push('/')"
      class="text-3xl font-bold text-cyan-400 pl-5"
    >
      My blog
    </div>
    <div class="ml-auto">
      <my-button type="primary" @click="$router.push('/posts')"
        >Posts</my-button
      >
      <my-button @click="$router.push('/about')" type="secondary"
        >About the blog</my-button
      >
      <!-- <my-button @click="$router.push('/composition')" type="primary"
        >Composition</my-button
      > -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
