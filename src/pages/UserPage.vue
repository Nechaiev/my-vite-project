<template>
  <div>
    <h1 class="p-2 bg-blue-200 text-sky-900 text-3xl">Page from the post</h1>
    <my-input class="" v-focus v-model="searchQuery" placeholder="Пошук..." />
    <div class="my-15 flex justify-between">
      <my-button class="ml-0" @click="showDialog">Create post</my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
        class="border-solid border-blue-500 border-2 rounded-sm"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :posts="posts || []"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="h-30 bg-blue-500"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MyButton from "../components/UI/MyButton.vue";
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import MySelect from "../components/UI/MySelect.vue";
import MyInput from "../components/UI/MyInput.vue";
import axios from "axios";

const posts = ref([]);
const dialogVisible = ref(false);
const isPostLoading = ref(false);
const searchQuery = ref("");
const selectedSort = ref("");
const page = ref(1);
const limit = ref(10);
const totalPage = ref(0);

const sortOptions = [
  { value: "title", name: "По назві" },
  { value: "body", name: "По опису" },
];

const createPost = (post) => {
  posts.value.push(post);
  dialogVisible.value = false;
};

const removePost = (post) => {
  posts.value = posts.value.filter((p) => p.id !== post.id);
};

const showDialog = () => {
  dialogVisible.value = true;
};

const fetchPosts = async () => {
  try {
    isPostLoading.value = true;

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _page: page.value,
          _limit: limit.value,
        },
      }
    );
    totalPage.value = Math.ceil(
      response.headers["x-total-count"] / limit.value
    );
    posts.value = response.data;
    isPostLoading.value = false;
  } catch (error) {
    alert("Помилка");
  } finally {
    isPostLoading.value = false;
  }
};

const loadMorePosts = async () => {
  try {
    page.value += 1;

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _page: page.value,
          _limit: limit.value,
        },
      }
    );
    totalPage.value = Math.ceil(
      response.headers["x-total-count"] / limit.value
    );
    posts.value = [...posts.value, ...response.data];
  } catch (error) {
    alert("Помилка");
  }
};

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
/* .observer {
  height: 30px;
  background: #719edd;
} */
/* .current-page {
  border: 2px solid red;
} */
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
/* 
.app {
  padding: 20px;
} */
/* .app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
} */
</style>
