<template>
  <div>
    <div class="container main">
      <div class="item">
        <h1>Wybierz pracownika</h1>
        <select name id>
          <option value>Option1</option>
        </select>
      </div>
      <div class="item">2</div>
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
  display: flex;
  .item {
    width: 50%;
  }
  .item:nth-last-of-type(1) {
    background: url('../../assets/img/test.jpeg');
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}

select {
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 22px;
}
</style>


