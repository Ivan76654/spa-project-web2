<script>
import { mapState, mapActions } from 'pinia';
import { usePostStore } from '../stores/posts';

export default {
  name: 'PostFeed',
  data() {
    return {
      isLoading: true
    };
  },
  methods: {
    ...mapActions(usePostStore, ['loadPosts'])
  },
  computed: {
    ...mapState(usePostStore, ['allPosts', 'allPostsFormatted'])
  },
  async mounted() {
    await this.loadPosts();
    this.isLoading = false;
  }
};
</script>

<template>
  <p class="info-paragraph" v-if="isLoading">Loading...</p>
  <div class="container" v-else>
    <p class="info-paragraph" v-if="!allPosts.length">No posts to display.</p>
    <div class="feed-container" v-else>
      <div class="post-preview" v-for="post in allPostsFormatted" :key="post.id">
        <h2 class="post-title">{{ post.postTitle }}</h2>
        <p class="posted-on">Posted on: {{ post.postedOn }}</p>
        <p class="post-body">{{ post.postBody }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.feed-container {
  display: flex;
  flex-direction: column;
}

div.post-preview {
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-top: 10px;
  border-bottom: 1px solid black;
}

div.post-preview:last-child {
  border-bottom: none;
}

div.post-preview:hover {
  background-color: #eee;
}

p.posted-on {
  color: gray;
  font-size: 0.9rem;
  margin-bottom: 7px;
}

p.info-paragraph {
  padding: 10px 5px 5px 5px;
}
</style>
