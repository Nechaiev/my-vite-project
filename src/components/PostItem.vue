<template>
  <div
    class="flex items-center justify-between p-3.5 mt-3.5 border-2 border-solid border-blue-500"
  >
    <div>
      <!-- <div><strong>userId:</strong> {{ post.userId }}</div> -->
      <div><strong>ID:</strong> {{ post.id }}</div>
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="flex">
      <my-button @click="redirectToPost">Open</my-button>
      <my-button type="secondary" @click="removePost">Remove</my-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    // Define methods
    const redirectToPost = () => {
      emit("routerPush", `/posts/${props.post.id}`);
    };

    const removePost = () => {
      emit("remove", props.post);
    };

    return {
      redirectToPost,
      removePost,
    };
  },
};
</script>

<style scoped></style>
