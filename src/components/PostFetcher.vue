<script>
import { ref } from "vue";
import axios from "axios";

export default function usePostFetcher() {
  const post = ref(null);

  const fetchPost = async (postId) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post.value = response.data;
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  return {
    post,
    fetchPost,
  };
}
</script>
