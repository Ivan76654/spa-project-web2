<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Header',
  props: ['title'],
  components: { RouterLink }
};
</script>

<template>
  <header class="app-header">
    <h1 class="header-title">{{ title }}</h1>
    <nav class="nav-container">
      <ul class="nav-links">
        <li class="link-item">
          <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        </li>
        <li class="link-item">
          <RouterLink to="/post">Post</RouterLink>
        </li>
        <li class="link-item">
          <RouterLink :to="{ name: 'About' }">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
header.app-header {
  min-height: 8vh;
  background-color: greenyellow;
  border: 1px solid black;
  box-shadow: 0px 1px 7px gray;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

h1.header-title {
  text-wrap: nowrap;
  padding: 5px;
}

nav.nav-container {
  min-width: 30vw;
}

ul.nav-links {
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

ul.nav-links li.link-item {
  height: 100%;
  margin-left: 15px;
  display: grid;
  place-content: center;
}

ul.nav-links li.link-item:last-child {
  margin-right: 5px;
}

ul.nav-links li.link-item a {
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
}

ul.nav-links li.link-item a.router-link-exact-active {
  text-decoration: underline;
}

ul.nav-links li.link-item a:hover {
  text-decoration: underline;
  color: blue;
}
</style>
