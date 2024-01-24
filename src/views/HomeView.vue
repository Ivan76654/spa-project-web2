<script>
import PostFeed from '../components/PostFeed.vue';

export default {
  name: 'Home',
  components: {
    PostFeed
  }
};
</script>

<template>
  <main class="main-container">
    <PostFeed></PostFeed>
  </main>
</template>

<style scoped>
main.main-container {
  flex: 1;
  overflow-y: auto;
}
</style>
