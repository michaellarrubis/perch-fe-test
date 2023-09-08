import { defineStore } from 'pinia'
import axios from 'axios'
import { type IPost } from './interface'

export const postStore = defineStore('PostStore', {
  state: () => ({
    post: {} as IPost
  }),
  actions: {
    async getPostById(id: number) {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      this.post = data
    },
  }
})
