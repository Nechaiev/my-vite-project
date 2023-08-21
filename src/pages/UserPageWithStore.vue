<template>
  <div>
    <h1 class="p-2 bg-sky-600 text-2xl">Сторінка з постаи</h1>
    <my-input
      class=""
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      v-focus
      placeholder="Пошук..."
    />
    <div class="my-15 flex justify-between">
      <my-button type="primary" @click="showDialog">Створити пост</my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
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
      v-if="!isPostsLoading"
    />
    <div v-else>Заванаження...</div>
    <div v-intersection="loadMorePosts" class="h-30 bg-blue-500"></div>
    <div class="flex mt-4">
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
    </div>
  </div>
</template>

<script>
import MyButton from "../components/UI/MyButton.vue";
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import MySelect from "../components/UI/MySelect.vue";
import MyInput from "../components/UI/MyInput.vue";
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      totalPage: null,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
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
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  },
};
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
