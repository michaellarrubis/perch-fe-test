<template>
  <div class="h-screen bg-slate-50">
    <div class="container mx-auto flex flex-col items-center justify-center h-full">
      <VPost :post="post" />

      <div class="flex w-full justify-center align-center mt-[80px]">
        <button 
          class="mr-4 rounded-full border border-blue-500 text-blue-500 text-white px-4 py-2"
          :class="{'border-slate-300 text-slate-300': isDisabled}"
          @click="onPrevPost" 
          :disabled="isDisabled"
        >
          Previous
        </button>
        <button class="rounded-full bg-blue-500	text-white px-4 py-2" @click="onNextPost">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { type IPost } from '@/stores/modules/post/interface'
import { postStore } from '@/stores/modules/post/post.store'
// @ts-ignore
import VPost from '@/components/VPost.vue'

const store = postStore()

const post = ref<IPost>({
  body: '',
  title: '',
  id: null,
  userId: null
})

const currentPostId = ref<number>(1)
const isDisabled = ref<boolean>(true)

onMounted(() => {
  handleFetchPostById()
})

watch(currentPostId, () => {
  handleFetchPostById()
})

const onPrevPost = () => {
  if (currentPostId.value > 1) currentPostId.value -= 1

  isDisabled.value = currentPostId.value > 1 ? false : true
}

const onNextPost = () => {
  currentPostId.value += 1
  isDisabled.value = false
}

const handleFetchPostById = async () => {
  await store.getPostById(currentPostId.value)
  post.value = store.post
}
</script>
