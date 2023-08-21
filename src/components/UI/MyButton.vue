<!-- <template>
  <button
    class="m-2.5 py-2.5 px-3.5 text-blue-500 border-solid border-2 rounded border-blue-500 transition-bg duration-300 hover:bg-blue-500 hover:text-white"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script> -->

<template>
  <button
    :class="computedClasses"
    class="m-2.5 py-2.5 px-3.5 rounded transition duration-300"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: String,
  },
  computed: {
    computedClasses() {
      let baseClasses = "border-solid border-2";
      let textClasses = "";
      let borderClasses = "";
      let hoverClasses = "";

      switch (this.type) {
        case "primary":
          textClasses = "text-blue-500";
          borderClasses = "border-blue-500";
          hoverClasses = "hover:bg-blue-500 hover:text-white";
          break;
        case "secondary":
          textClasses = "text-green-500";
          borderClasses = "border-green-500";
          hoverClasses = "hover:bg-green-500 hover:text-white";
          break;
        default:
          textClasses = "text-gray-500";
          borderClasses = "border-gray-500";
          hoverClasses = "hover:bg-gray-500 hover:text-white";
          break;
      }

      return `${baseClasses} ${textClasses} ${borderClasses} ${hoverClasses}`;
    },
  },
};
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
