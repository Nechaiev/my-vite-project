<template>
  <div @click="redirect(user.id)" class="bg-white shadow-lg rounded-lg p-4">
    <h2 class="text-xl font-semibold">{{ user.name }}</h2>
    <p class="text-gray-600">{{ user.email }}</p>
    <p class="text-gray-600">{{ user.phone }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  methods: {
    redirect() {
      this.$emit('user-clicked', this.user.id);
    },
  },
};
</script>
