<script>
import { ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";

export default function usePostFetcher() {
  const post = ref(null);
  const toast = useToast();

  const fetchPost = async (postId) => {
    try {
      toast.info("Load post...");
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post.value = response.data;
      toast.success("The post is successfully loaded!");
    } catch (error) {
      toast.error("Mistake when loading the post");
      console.error("Error loading data:", error);
    }
  };

  return {
    post,
    fetchPost,
  };
}
</script>
