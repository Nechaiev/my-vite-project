<template>
  <input :value="modelValue" @input="updateInput" class="mt-3.5 p-2.5 w-auto border-solid border-2 border-blue-500" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
/* .input {
  width: auto;
  border: 2px solid royalblue;
  padding: 10px;
  margin-top: 15px;
} */
</style>
