<template>
  <div id="app">
    <component :is="currentLayout">
      <!-- <router-view/> -->
      <base-card v-for="i in 20" :key="i" title="card title" v-slot="{prepareTitle}">
            <!-- <template #default="{prepareTitle}">
              <span class="flex gap-2">
                  <span>
                    {{ prepareTitle }}
                  </span>
                  <b>{{ i + 1 }}</b>
                </span>
            </template> -->
            <span class="flex gap-2">
              <span>
                {{ prepareTitle }}
              </span>
              <b>{{ i + 1 }}</b>
            </span>
    </base-card>
    </component>
  </div>
</template>

<script>
import BaseCard from './components/UI/BaseCard.vue'
import AppLayout from "@/components/common/AppLayout.vue";

export default {
  components: {
    BaseCard
  },
  computed: {
    currentLayout() {
      return this.$route.meta?.layout || AppLayout
    }
  },
  methods: {
    calc(i) {
      return
    }
  }
};
</script>
