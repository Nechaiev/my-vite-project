<template>
  <div class="h-16 bg-sky-900 shadow-lg flex items-center pr-2 px-15">
    <div
      @click="$router.push('/')"
      class="text-3xl font-bold text-yellow-300 pl-5"
    >
      My <span class="text-blue-500">blog</span>
    </div>
    <div class="ml-auto">
      <my-button @click="$router.push('/composition')" type="primary"
        >Posts</my-button
      >
      <my-button @click="$router.push('/about')" type="secondary"
        >About the blog</my-button
      >
      <!-- <my-button type="primary" @click="$router.push('/posts')"
        >Posts</my-button
      > -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
