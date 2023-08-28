<template>
  <div class="mt-10">
    <h1>Post page from ID: {{ $route.params.id }}</h1>
    <div v-if="post">
      <h2><span class="font-bold">Post title:</span> {{ post.title }}</h2>
      <p><span class="font-bold">Post body:</span> {{ post.body }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const post = ref(null);

    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
        );
        post.value = response.data;
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    onMounted(fetchPost);

    return {
      post,
    };
  },
};
</script>

<style></style>
