<script>
import PostFeed from '../components/PostFeed.vue';
import SearchPosts from '../components/SearchPosts.vue';

export default {
  name: 'Home',
  components: {
    PostFeed,
    SearchPosts
  }
};
</script>

<template>
  <main class="main-container">
    <SearchPosts></SearchPosts>
    <PostFeed></PostFeed>
  </main>
</template>

<style scoped>
main.main-container {
  flex: 1;
  overflow-y: auto;
}
</style>
