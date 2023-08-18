<template>
  <div>
    <h1 class="p-2 bg-sky-600 text-2xl">Сторінка з постаи</h1>
    <my-input class="" v-focus v-model="searchQuery" placeholder="Пошук..." />
    <div class="app__btns">
      <my-button @click="showDialog">Створити пост</my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
        class="border-solid border-sky-600 border-2 rounded-sm"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Заванаження...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div class="flex mt-4">
      <div
        v-for="pageNumber in totalPage"
        :key="pageNumber"
        class="p-2 border border-solid border-black"
        :class="{
          'current-page': page === pageNumber,
        }"
        @click="chengePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import MyButton from "../components/UI/MyButton.vue";
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import MySelect from "../components/UI/MySelect.vue";
import MyInput from "../components/UI/MyInput.vue";
import axios from "axios";

export default {
  components: {
    MyInput,
    MyButton,
    PostForm,
    PostList,
    MySelect,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      searchQuery: "",
      selectedSort: "",
      page: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        { value: "title", name: "По назві" },
        { value: "body", name: "По опису" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // chengePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true;

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
        this.isPostLoading = false;
      } catch (error) {
        alert("Помилка");
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert("Помилка");
      }
    },
  },
  mounted() {
    this.fetchPosts();
    // const options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPage) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPost.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // }
  },
};
</script>

<style scoped>
.observer {
  height: 30px;
  background: #719edd;
}
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
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
