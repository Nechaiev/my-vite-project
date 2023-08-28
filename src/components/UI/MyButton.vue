
<template>
  <button :class="computedClasses" class="m-2.5 py-2 px-3.5 text-lg font-medium rounded transition duration-300">
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
          textClasses = "text-yellow-300";
          borderClasses = "border-yellow-300";
          hoverClasses = "hover:bg-yellow-300 hover:text-blue-500";
          break;
        case "secondary":
          textClasses = "text-blue-500";
          borderClasses = "border-blue-500";
          hoverClasses = "hover:bg-blue-500 hover:text-yellow-300";
          break;
        default:
          textClasses = "text-blue-500";
          borderClasses = "border-blue-500";
          hoverClasses = "hover:bg-yellow-300 hover:text-blue-500";
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
