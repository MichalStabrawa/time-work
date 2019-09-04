<template>
  <section class="table">
    <el-row :gutter="20">
      <el-col :span="12" v-if="dataShow ==! null">
        <div class="grid-content bg-purple">{{dataShow[0].data[0].name}}</div>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Tenmat</th>
              <th>Czas</th>
            </tr>
          </thead> 
       <tbody>
            <tr v-for="item in dataShow[0].data[0].projekt">
              <td v-bind:value="item.date">{{item.date}}</td>
              <td class="grey">{{item.task}}</td>
              <td class="time" v-bind:value="item.time">{{(item.time)}}</td>
            </tr>
          </tbody>
        </table>
      </el-col>
      <el-col :span="12" v-if="dataShow ==! null">
        <div class="grid-content bg-purple">{{dataShow[0].data[1].name}}</div>
          <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Tenmat</th>
              <th>Czas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dataShow[0].data[1].projekt">
              <td v-bind:value="item.date">{{item.date}}</td>
              <td class="grey">{{item.task}}</td>
              <td class="time" v-bind:value="item.time">{{(item.time)}}</td>
            </tr>
          </tbody>
        </table> -->
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      testuje: this.name
    };
  },
  computed: {
      dataShow() {
          return this.name
      }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>


