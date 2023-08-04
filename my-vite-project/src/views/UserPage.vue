<!-- src/views/UserPage.vue -->
<template>
  <div>
    <h1 class="text-2xl font-semibold mb-4">Список користувачів</h1>
    <div>
      <button @click="fetchUsers">Знайти користувачів</button>
      <button @click="clear">Видалити</button>
    </div>

    <div>
      <button @click="getUserById">Отримати юзера</button>
      <input type="text" v-model="userId" />
    </div>
    <div
      v-if="users.length > 0"
      class="grid grid-cols-1 gap-4 sm-grid-cols-2 md-grid-cols-3"
    >
      <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
        @user-clicked="ret"
      />
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import axios from "axios";
import UserCard from "../components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
      userId: "",
    };
  },
  // async mounted() {

  // },
  methods: {
    clear() {
      this.users = [];
    },
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = response.data;
      } catch (e) {
        console.error(e);
      }
    },
    async getUserById() {
      try {
        if (!this.userId) return;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.userId}`
        );
        const user = response.data;
        this.users.push(user);
      } catch (error) {
        console.error(e);
      }
    },
    ret(userId) {
      this.$router.push(`/users/${userId}`);
    },
  },
};
</script>
