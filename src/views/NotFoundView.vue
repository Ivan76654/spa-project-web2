<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'NotFound',
  components: {
    RouterLink
  }
};
</script>

<template>
  <main class="main-container">
    <h2>404 Not Found</h2>
    <p>Path '/{{ $route.params.catchAll }}' does not exist. Please check if you entered correct URL.</p>
    <RouterLink class="return-link" :to="{ name: 'Home' }">Home</RouterLink>
  </main>
</template>

<style scoped>
main.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
}

h2 {
  padding: 10px 5px 5px 5px;
  margin-bottom: 10px;
  text-align: center;
}

a.return-link {
  text-decoration: none;
  color: black;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
}

a.return-link:hover {
  color: white;
  background-color: red;
}
</style>
