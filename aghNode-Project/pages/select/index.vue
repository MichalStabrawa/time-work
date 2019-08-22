<template>
  <div>
    <div class="container main">
      <h1>Wybierz pracownika</h1>

    <select name="" id="">
      <option value="">Option1</option>
    </select>
    </div>
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 50px;
}
.main {
  height: calc(100vh - 180px);
}

select{
  width: 300px;
  height: 40px;
  border-radius: 5px ;
  border: 1px solid grey;
  font-size: 22px;
}
</style>


