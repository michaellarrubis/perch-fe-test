<template>
  <div>
    <h1 class="text-2xl font-bold">{{ props.post.title }}</h1>
    <p class="mt-4">{{ props.post.body }}</p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })
</script>
