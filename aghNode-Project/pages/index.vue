<template>
<div>
  <nav></nav>
  <header>
<div class="header-wrapper">
  <h1>Czas pracy</h1>
  <h2>Projekt Studia Podyplomowe AGH "Metody Wytwarzania Oprogramowania</h2>
  <button class="btn">Testuj</button>
</div>
  </header>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import {test1} from '~/server/test.js'

export default {
  components: {
    Logo
  },
 
}
</script>

<style>
nav {
  height: 80px;
  background: #f0f4f7;
}
header {
  background: url('../assets/img/header-agh.jpeg');
  height:calc(100vh - 80px) ;
  background-position: center;
  background-size: cover;
  padding: 50px;
  
}
h1,h2 {
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
