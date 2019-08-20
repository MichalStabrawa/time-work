<template>
  <div>
  
    <header>
      <div class="header-wrapper">
        <h1>{{count.title}}</h1>
        <h2>{{count.title2}}</h2>
        <button class="btn">Testuj</button>
      </div>
  
    </header>
  </div>
</template>

<script>
  export default {
    components: {
  
    },
    data() {
      return {
        title: null
      }
    },
  
    computed: {
      count() {
        return this.$store.state.header;
      }
    }
  
  }
</script>

<style lang="scss" scoped>
  header {
    background: url('../assets/img/header-agh.jpeg');
    height: calc(100vh - 80px);
    background-position: center;
    background-size: cover;
    padding: 50px;
  }
  
  h1,
  h2 {
    color: #3f5795;
    width: 50%;
  }
  
  h1 {
    font-size: 56px;
    margin-bottom: 50px;
  }
  
  .btn {
    width: 220px;
    height: 60px;
    background: #3f5795;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 20px;
    margin-top: 50px;
  }
</style>
