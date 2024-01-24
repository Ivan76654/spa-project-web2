<script>
import { mapActions } from 'pinia';
import { usePostStore } from '../stores/posts';

export default {
  name: 'SearchPosts',
  data() {
    return {
      searchString: ''
    };
  },
  methods: {
    ...mapActions(usePostStore, ['filterPosts']),
    onSearchInputChange() {
      this.filterPosts(searchString.value);
    }
  }
};
</script>

<template>
  <form class="searchForm">
    <label class="search-input-label" for="searchString">Search Posts:</label>
    <input
      id="searchString"
      name="searchString"
      placeholder="Type here to search posts..."
      type="text"
      v-model="searchString"
      @input="onSearchInputChange"
    />
  </form>
</template>

<style>
form.searchForm {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  min-width: 40vw;
  max-width: 70vw;
  display: flex;
  align-items: center;
}

label.search-input-label {
  margin-right: 5px;
}

input[type='text'] {
  flex: 1;
}

input[type='text']:focus {
  outline: none;
}
</style>
