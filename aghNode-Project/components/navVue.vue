<template>
  <nav class="nav">
    <button class="hamburger" @click="showMenu">
      <i class="fas fa-bars"></i>
    </button>
    <div class="menu-item" v-bind:class="{ active: isActive }">
      <nuxt-link class="link" to="/">Home</nuxt-link>
      <nuxt-link class="link" to="/select">Pracownicy</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      isActive: false
    };
  },
  methods: {
    active() {
      console.log("Test");
    },
    showMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 80px;
  background-image: linear-gradient(
    to right,
    #dad9d4,
    #e0ddd9,
    #e5e1de,
    #e9e5e4,
    #ede9e9,
    #ede3e5,
    #eadce3,
    #e5d7e4,
    #d7c6df,
    #c3b7dc,
    #a9aad9,
    #889ed7
  );
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  align-items: center;

  a {
    color: #6a71a6;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.5s;
    padding: 10px;

    &:hover {
      color: #181c24;
    }
    &:focus {
      color: #181c24;
    }
  }
  .hamburger {
    width: 30px;
    height: 30px;
    margin-top: 0px;
    background: transparent;
    cursor: pointer;
    display: none;
  }
}
@media (max-width: 768px) {
  .nav {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .hamburger {
      display: block;
      cursor:pointer;
    }
    .menu-item {
      position: absolute;
      z-index: 100;
      top: 80px;
      display: flex;
      flex-direction: column;
      background: #E4E9EF;
      width: 100%;
      margin-left: -50px;
      padding-left: 40px;
      width: 100%;
      display: none;
      
      &.active {
        display: flex;
      }
a{
  cursor: pointer;
}
    }
  }
}
</style>


