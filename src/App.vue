<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<template>
  <Header title="VueJS Blog App"></Header>
  <RouterView />
</template>

<style></style>
