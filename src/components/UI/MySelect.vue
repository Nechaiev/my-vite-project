
<template>
  <select v-model="selectedValue" @change="changeOption">
    <option disabled value="">Choose from the list</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    // Define a reactive variable for the selected value
    const selectedValue = ref(props.modelValue);

    // Define the changeOption method
    const changeOption = () => {
      emit("update:modelValue", selectedValue.value);
    };

    // Watch for changes in the 'modelValue' prop
    watch(
      () => props.modelValue,
      (newVal) => {
        selectedValue.value = newVal;
      }
    );

    return {
      selectedValue,
      changeOption,
    };
  },
};
</script>

<style></style>
