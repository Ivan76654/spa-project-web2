<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  name: 'App'
};
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style></style>
