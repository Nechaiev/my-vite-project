<template>
  <button class="m-2.5 py-2.5 px-3.5 text-blue-500 border-solid border-2 rounded border-blue-500">
    <slot></slot>
  </button>
</template>

<script>
export default {
name: "my-button"
}
</script>

<style scoped>
/* .btn {
  margin: 10px;
  padding: 10px 15px;
  background: none;
  color: royalblue;
  border: 1px solid royalblue;
} */
</style>