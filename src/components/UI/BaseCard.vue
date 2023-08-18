<template>
    <div class="border-2 border-l-green-300 flex flex-wrap gap-3 p-4">
        <div class="bg-red w-10 h-10">image</div>
        <h3>
            <!-- <slot name="title" :prepareTitle="prepareTitle">
                {{ prepareTitle }}
            </slot> -->

            <slot :prepareTitle="prepareTitle">
                {{ prepareTitle }}
            </slot>
        </h3>
    </div>
</template>

<script setup>
import {computed} from 'vue';
const props = defineProps({
    title: String
})

const prepareTitle = computed(() => {
    const title = props.title || 'Base title';

    return title.toUpperCase();
})
</script>