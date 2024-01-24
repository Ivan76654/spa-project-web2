<script>
import { mapState, mapActions } from 'pinia';
import { usePostStore } from '../stores/posts';
import { RouterLink } from 'vue-router';

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
    ...mapState(usePostStore, ['allPosts', 'allFilteredPostsFormatted'])
  },
  async mounted() {
    await this.loadPosts();
    this.isLoading = false;
  },
  components: { RouterLink }
};
</script>

<template>
  <p class="info-paragraph" v-if="isLoading">Loading...</p>
  <div class="container" v-else>
    <p class="info-paragraph" v-if="!allPosts.length">No posts to display.</p>
    <div class="feed-container" v-else>
      <RouterLink
        class="router-link"
        v-for="post in allFilteredPostsFormatted"
        :to="{ name: 'Post', params: { id: post.id } }"
        :key="post.id"
      >
        <div class="post-preview">
          <h2 class="post-title">{{ post.postTitle }}</h2>
          <p class="posted-on">Posted on: {{ post.postedOn }}</p>
          <p class="post-body">{{ post.postBody }}</p>
        </div>
      </RouterLink>
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

a.router-link {
  all: unset;
  border-bottom: 1px solid black;
}

a.router-link:last-child {
  border: unset;
}
</style>
