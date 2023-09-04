import { ref } from "vue";
import { useToast } from "vue-toastification";

export default function loadErrorHandling() {
  const isLoading = ref(false);
  const toast = useToast();

  const handleError = (error) => {
    isLoading.value = false;
    if (error.response) {
      toast.error("Server error: " + error.response.data.message);
    } else {
      toast.error("An error occurred: " + error.message);
    }
  };

  const startLoading = () => {
    isLoading.value = true;
  };

  return { isLoading, handleError, startLoading, toast };
}

