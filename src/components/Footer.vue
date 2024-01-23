<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentDate: new Date(Date.now())
    };
  },
  computed: {
    currentYear: function () {
      return this.currentDate.getFullYear();
    }
  }
};
</script>

<template>
  <footer class="footer-container">
    <h2>Copyright &copy; {{ currentYear }}</h2>
  </footer>
</template>

<style scoped>
footer.footer-container {
  background-color: greenyellow;
  border: 1px solid black;
  box-shadow: 0px -1px 7px gray;
  min-height: 8vh;
  display: grid;
  place-content: center;
}

h2 {
  font-weight: 100;
}
</style>
