
<template>
  <button :class="computedClasses" class="m-2.5 py-2.5 px-3.5 rounded transition duration-300">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MyButton",
  props: {
    type: String,
  },
  setup(props) {
    const computedClasses = computed(() => {
      let baseClasses = "border-solid border-2";
      let textClasses = "";
      let borderClasses = "";
      let hoverClasses = "";

      switch (props.type) {
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
    });

    return {
      computedClasses,
    };
  },
};
</script>


<style scoped>

</style>
