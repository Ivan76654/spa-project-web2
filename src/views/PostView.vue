<script>
import { mapState, mapActions } from 'pinia';
import { usePostStore } from '../stores/posts';

export default {
  name: 'Post',
  props: ['id'],
  data() {
    return {
      post: null
    };
  },
  methods: {
    ...mapActions(usePostStore, ['loadPosts'])
  },
  computed: {
    ...mapState(usePostStore, ['getPostById'])
  },
  async mounted() {
    await this.loadPosts();
    this.post = { ...this.getPostById(parseInt(this.id)) };
  }
};
</script>

<template>
  <main class="main-container">
    <p class="info-paragraph" v-if="!post">Loading...</p>
    <div class="post-container" v-else>
      <p class="field-name">Title:</p>
      <h3 class="post-title">{{ post.postTitle }}</h3>
      <p class="field-name">Text:</p>
      <p class="post-body">{{ post.postBody }}</p>
    </div>
  </main>
</template>

<style scoped>
main.main-container {
  flex: 1;
  margin-top: 15px;
  padding-left: 5px;
  padding-right: 5px;
  overflow-y: auto;
}

p.field-name {
  font-size: 0.9rem;
  text-decoration: underline;
}

h3.post-title {
  margin-bottom: 5px;
}

p.post-body {
  text-align: justify;
}
</style>
