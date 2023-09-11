
import { ref, onMounted } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useRoute } from "vue-router";

export default function usePostFetcher() {
  const post = ref(null);
  const loading = ref(false);
  const toast = useToast();
  const route = useRoute();

  const fetchPost = async (postId) => {
    if(!postId) return
    try {
      loading.value = true
      // toast.info("Load post...");
      const {data} = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post.value = data;
      toast.success("The post is successfully loaded!");
    } catch (error) {
      toast.error("Mistake when loading the post");
      console.error("Error loading data:", error);
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchPost(route.params.id);
  });

  return {
    post,
    fetchPost,
    loading
  };
}

