<template>
  <div class="post">
    <div>
      <div><strong>userId:</strong> {{ post.userId }}</div>
      <div><strong>ID:</strong> {{ post.id }}</div>
      <div><strong>Назва:</strong> {{ post.title }}</div>
      <div><strong>Опис:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns flex">
      <my-button @click="$emit('remove', post)">Відкрити</my-button>
      <my-button @click="$emit('remove', post)">Видалити</my-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid royalblue;
  margin-top: 15px;
}
</style>
