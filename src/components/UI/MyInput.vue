
<template>
  <input v-model="internalValue" class="mt-3.5 p-2.5 w-auto border-solid border-2 border-blue-500" type="text" />
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  setup(props, { emit }) {
    const internalValue = ref(props.modelValue);

    // Watch for changes in the modelValue prop
    watch(
      () => props.modelValue,
      (newVal) => {
        internalValue.value = newVal;
      }
    );

    // Watch for changes in the internalValue and emit the update event
    watch(
      internalValue,
      (newVal) => {
        emit("update:modelValue", newVal);
      }
    );

    return {
      internalValue,
    };
  },
};
</script>


<style>

</style>
