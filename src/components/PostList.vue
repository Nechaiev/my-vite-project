
<template>
  <div v-if="posts && posts.length > 0">
    <h3>List of users</h3>
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="removePost(post)"
      
      @routerPush="redirectToPost(post.id)"
    />
  </div>
  <h2 v-else class="text-red-800">The list of posts is empty</h2>
</template>

<script>
import router from "../router/router"; 

import PostItem from "./PostItem.vue";
import { onMounted, ref, watch } from "vue";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    // Define a reactive variable for posts
    const posts = ref(props.posts);

    // Define the removePost method
    const removePost = (post) => {
      posts.value = posts.value.filter((p) => p.id !== post.id);
      emit("remove", post);
    };
    const redirectToPost = (postId) => {
      // Выполнить переход на страницу с постом с использованием маршрутизатора
      router.push(`/posts/${postId}`);
    };

    // Watch for changes in the 'posts' prop
    onMounted(() => {
      watch(
        () => props.posts,
        (newPosts) => {
          posts.value = newPosts;
        }
      );
    });

    return {
      posts,
      removePost,
      redirectToPost,
    };
  },
};
</script>

<style scoped></style>
