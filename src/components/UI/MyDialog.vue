<template>
  <div
    class="fixed top-0 bottom-0 right-0 left-0 flex bg-black/50"
    v-if="show"
    @click.stop="hideDialog"
  >
    <div @click.stop class="m-auto bg-white rounded-xl min-h-50 w-80 p-5">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
};
</script>

<style scoped></style>
