import { format } from 'date-fns';
import { defineStore } from 'pinia';

export const usePostStore = defineStore('posts', {
  state: () => ({
    _allPosts: []
  }),
  getters: {
    allPosts: (state) => state._allPosts || [],
    allPostsFormatted: (state) => {
      return state._allPosts.map((post) => {
        return {
          ...post,
          postedOn: format(post.postedOn, 'yyyy-MM-dd HH:mm:ss'),
          postBody: post.postBody.length <= 50 ? post.postBody : `${post.postBody.slice(0, 50)}...`
        };
      });
    }
  },
  actions: {
    async loadPosts() {
      try {
        const response = await fetch('http://localhost:3000/posts');

        if (response.ok) {
          const data = await response.json();

          this._allPosts = data;
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  }
});
