<script>
import { mapActions } from 'pinia';
import { usePostStore } from '../stores/posts';

export default {
  name: 'NewPost',
  data() {
    return {
      postTitle: '',
      postBody: ''
    };
  },
  methods: {
    ...mapActions(usePostStore, ['insertNewPost']),
    onSubmit(event) {
      event.preventDefault();

      this.insertNewPost(postTitle.value, postBody.value).then((id) => {
        this.$router.push({ path: `/posts/${id}` });
      });
    }
  }
};
</script>

<template>
  <main class="main-container">
    <form class="new-post-form" @submit="onSubmit">
      <div class="flex-container">
        <label class="input-label" for="postTitle">Title:</label>
        <input id="postTitle" name="postTitle" type="text" v-model="postTitle" required />
      </div>
      <div class="flex-container">
        <label class="input-label" for="postBody">Text:</label>
        <textarea id="postBody" name="postBody" type="text" rows="20" v-model="postBody"></textarea>
      </div>
      <button type="submit">Publish</button>
    </form>
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

form.new-post-form {
  max-width: 50vw;
  display: flex;
  flex-direction: column;
}

div.flex-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-bottom: 20px;
}

label.input-label {
  margin-bottom: 10px;
}

textarea {
  font-family: inherit;
}

input,
textarea {
  padding: 5px;
}

input:focus,
textarea:focus {
  outline: none;
}

button[type='submit'] {
  cursor: pointer;
  font-size: 1.01rem;
  padding: 3px;
  max-width: fit-content;
  background-color: blue;
  color: white;
  border-radius: 5px;
}
</style>
