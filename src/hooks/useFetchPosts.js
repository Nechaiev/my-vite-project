import axios from "axios";
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

export function useFetchPosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostsLoading = ref(true);
  const toast = useToast();

  const fetching = async () => {
    try {
      toast.info('Loading posts...');
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: 1,
          _limit: limit
        }
      });
      totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
      posts.value = response.data;
      toast.success('The posts are successfully loaded!');
    } catch (e) {
      toast.error('Error when downloading posts');
    } finally {
      isPostsLoading.value = false;
    }
  }

  onMounted(fetching)

  return {
    posts, isPostsLoading, totalPages
  }
}
