<template>
  <div>
    <div class="container main">
      <div class="item">
        <h1>Wybierz pracownika</h1>
        <select name id>
          <option value>Option1</option>
          <option value>Option1</option>
          <option value>Option1</option>
        </select>
         <el-button type="primary">Sprawdź</el-button>
      </div>
      <div class="item"></div>
    </div>
    <section>
     
     
  


  
    </section>
    <footerComponent/>
  </div>
</template>

<script>
import footerComponent from "../../components/footerComponent";
export default {
  components: {
    footerComponent
  },
  data() {
    return {
     dane: null
    };
  },
 computed:{
dataPower() {
  return this.$store.state.coins;
}
 }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 50px;
}
.main {
  height: calc(100vh - 180px);
  display: flex;
  padding-top: 0;
  padding-bottom: 0px;
  padding-right: 0px;
  .item {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item:nth-last-of-type(1) {
    background: url('../../assets/img/test.jpeg');
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    padding-right: 0;
  }
}

select {
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 22px;
}
button {
  margin-top: 40px;
  width: 300px;
  height: 60px;
  background:#3f5795;
}
</style>


