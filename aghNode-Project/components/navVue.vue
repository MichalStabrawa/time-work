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
  background-image: linear-gradient(to right, #dad9d4, #e0ddd9, #e5e1de, #e9e5e4, #ede9e9, #ede3e5, #eadce3, #e5d7e4, #d7c6df, #c3b7dc, #a9aad9, #889ed7);;
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


