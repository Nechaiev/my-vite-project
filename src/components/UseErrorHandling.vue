<script>
import { ref } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default function useErrorHandling() {
  const error = ref(null);

  const showError = (message) => {
    error.value = message;
    Toast.open({
      message,
      type: "error",
    });
  };

  return {
    error,
    showError,
  };
}
</script>
