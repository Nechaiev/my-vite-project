
<template>
  <form class="flex flex-col" @submit.prevent>
    <h2>Creating a post</h2>
    <my-input v-focus v-model="post.title" class="input" type="text" placeholder="Name of the post" />
    <my-input v-model="post.body" class="input" type="text" placeholder="Post description" />
    <my-button @click="createPost" style="align-self: flex-end; margin-top: 15px">Create</my-button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PostForm",
  setup(props, { emit }) {
    // Define a reactive variable for the post data
    const post = ref({
      title: "",
      body: "",
    });

    // Define the createPost method
    const createPost = () => {
      post.value.id = Date.now();
      emit("create", post.value);
      post.value = {
        title: "",
        body: "",
      };
    };

    return {
      post,
      createPost,
    };
  },
};
</script>

<style>

</style>
