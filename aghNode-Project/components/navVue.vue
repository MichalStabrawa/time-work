<template>
  <nav class="nav">
    <nuxt-link class="link" to="/">Home</nuxt-link>
    <nuxt-link class="link" to="/select">Pracownicy</nuxt-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    active() {
      console.log("Test");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 80px;
  background: #f0f4f7;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  align-items: center;

  a {
    color: #677dd3;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.5s;
    padding: 10px;

    &:hover {
      color: grey;
    }
  }
}
</style>


