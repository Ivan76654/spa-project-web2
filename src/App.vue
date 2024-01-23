<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<template>
  <Header title="VueJS Blog App"></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style></style>
