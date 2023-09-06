

<template>
  <div class="mt-10">
    <h1>Post page from ID: {{ $route.params.id }}</h1>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <h2><span class="font-bold">Post title:</span> {{ post?.title }}</h2>
      <p><span class="font-bold">Post body:</span> {{ post?.body }}</p>
    </div>
    
  </div>
</template>

<script setup>

import usePostFetcher from "@/composables/useFetch.js";
const { post, loading } = usePostFetcher();

</script>

<style></style>
