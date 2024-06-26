<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const uniqueId = ref<string>('');
const previewMode = ref<string>('');

onMounted(() => {
  uniqueId.value = route.query.unique_id as string;
  previewMode.value = route.query.preview_mode as string;
});
</script>

<template lang="pug">
div
  p Hello World
  router-view
</template>

<style scoped></style>
