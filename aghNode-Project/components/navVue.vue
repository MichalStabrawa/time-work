<template>
    <nav class="nav">
<a href="">Home</a>
    </nav>
</template>

<script>
export default {
    
}
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

&:hover {
  color: grey;
}

  }
}
</style>


