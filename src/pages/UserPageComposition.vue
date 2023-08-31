<template>
  <div>
    <h1 class="p-2 bg-sky-600 text-2xl">Page from the post</h1>

    <my-input class="" v-focus v-model="searchQuery" placeholder="Search..." />
    <div class="my-15 flex justify-between">
      <my-button>Create post</my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
        class="border-solid border-sky-600 border-2 rounded-sm"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>

    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostLoading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import useErrorHandlingAndLoading from "@/hooks/useErrorHandlingAndLoading";

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
    const { posts, totalPages, isPostLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    return {
      isLoading,
      posts,
      totalPages,
      isPostLoading,
      searchQuery,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>

<style scoped></style>
