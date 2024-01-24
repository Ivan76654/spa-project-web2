import { format } from 'date-fns';
import { defineStore } from 'pinia';

export const usePostStore = defineStore('posts', {
  state: () => ({
    _allPosts: [],
    _filteredPosts: []
  }),
  getters: {
    allPosts: (state) => state._allPosts || [],
    allFilteredPostsFormatted: (state) => {
      return state._filteredPosts.map((post) => {
        return {
          ...post,
          postedOn: format(post.postedOn, 'yyyy-MM-dd HH:mm:ss'),
          postBody: post.postBody.length <= 50 ? post.postBody : `${post.postBody.slice(0, 50)}...`
        };
      });
    },
    getPostById(state) {
      return (id) => state._allPosts.find((post) => post.id === id);
    }
  },
  actions: {
    async loadPosts() {
      try {
        const response = await fetch('http://localhost:3000/posts');

        if (response.ok) {
          const data = await response.json();

          this._allPosts = data;
          this._filteredPosts = data;
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    filterPosts(searchString) {
      const lowerCaseSearch = searchString.toLowerCase();

      this._filteredPosts = this._allPosts.filter(
        (post) =>
          post.postTitle.toLowerCase().includes(lowerCaseSearch) ||
          post.postBody.toLowerCase().includes(lowerCaseSearch)
      );
    },
    async insertNewPost(postTitle, postBody) {
      try {
        const timestamp = new Date(Date.now());
        let newId = Math.round(Math.random() * 10000000);

        const body = {
          id: newId,
          postedOn: timestamp,
          postTitle: postTitle,
          postBody: postBody
        };

        const response = await fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });

        if (response.ok) return newId;
      } catch (err) {
        console.log(err.message);
      }
    }
  }
});
