<template>
  <form @submit.prevent>
    <h2>Створення поста</h2>
    <my-input
      v-focus
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Назва поста"
    />
    <my-input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Опис поста"
    />
    <my-button
      @click="createPost"
      class="btn"
      style="align-self: flex-end; margin-top: 15px"
    >
      Створити
    </my-button>
  </form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
</style>
