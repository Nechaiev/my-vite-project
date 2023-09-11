<template>
  <div>
    <h1 class="p-2 bg-blue-200 text-sky-900 text-3xl">Page from the post</h1>

    <my-input class="" v-focus v-model="searchQuery" placeholder="Search..." />
    <div class="my-15 flex justify-between">
      <my-button class="ml-0">Create post</my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
        class="border-solid border-blue-500 border-2 rounded-sm"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>

    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostLoading" />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="h-30 bg-blue-500"></div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import useErrorHandlingAndLoading from "@/hooks/useErrorHandlingAndLoading";
import axios from "axios";
import { ref } from "vue";

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
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "By name" },
        { value: "body", name: "By description" },
      ],
    };
  },
  setup(props) {
    const { isLoading, handleError, startLoading, toast } =
      useErrorHandlingAndLoading();
    const { posts, totalPages, isPostLoading } = useFetchPosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    const page = ref(1);
    const limit = ref(10);
    const totalPage = ref(0);
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
        alert("Error");
      }
    };
    return {
      isLoading,
      posts,
      totalPages,
      isPostLoading,
      searchQuery,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
      loadMorePosts,
    };
  },
};
</script>

<style scoped></style>
