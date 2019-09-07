<template>
  <section class="table">
    <h3 class="title">Pracownik: {{name[0].name}}</h3>
    <h4 class="choice-projekt">Wybierz projekt</h4>
    <select v-model="projektValue" v-on:change="showProjekt">
      <option
        v-for="(item,index ) in name[0].data"
        :key="index"
        v-bind:value="item.name"
      >{{item.name}}</option>
    </select>

    <!--Table-------------------------------------------------------------->
    <div class="table-wrapper" v-if="projekt">
    
       
          <div class="grid-content bg-purple">{{projekt.name}}</div>
          <table>
            <thead class="thead-light">
              <tr>
                <th>Data</th>
                <th>Temat</th>
                <th>Czas</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in projekt.projekt" :key="index">
                <td v-bind:value="item.date">{{$dayjs(item.date).format('YYYY-MM-DD')}}</td>
                <td class="grey">{{item.task}}</td>
                <td class="time" v-bind:value="item.time">{{(item.time)}}</td>
              </tr>
            </tbody>
          </table>
      </div>
          <el-button type="info" @click="totalTime">Raport</el-button>
     <div v-show="time != null">
          <p class="report">
            Całkowity czas pracy przy projekcie
            <span class="index">{{time}}h</span>
          </p>
          <p class="report">
             ilość tasków
            <span class="index">{{index}}</span>
          </p>
       <el-container>

      
            <el-row :gutter="20">
              <el-col :span="18">
                <div v-if="projekt" class=" ">
                  <div v-bind:class="{ active: !value1 }" class="wrapper-report">
                    <div v-for="(item,index) in projekt.projekt" :key="index">
                      <label>{{item.task}}</label>
                      <el-progress
                        v-if="value1===true"
                        :percentage="(parseInt(item.time*10*100)/390).toFixed(2)"
                        class="p-bar"
                      ></el-progress>
                     <el-progress
                        v-show="value1===false"
                        type="circle"
                        :percentage="(parseInt(item.time*100)/39).toFixed(2)"
                      ></el-progress> 
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class=" ">
                  <h3>Zmień rodzaj wykresu</h3>
                  <el-switch v-model="value1"></el-switch>
                </div>
              </el-col>
            </el-row>
         </el-container>
        </div> 
  </section>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      testuje: this.name,
      projekt: null,
      projektValue: "",
      time: null,
      index: null,
      value1: true,
    };
  },
  methods: {
    showProjekt() {
      if (this.projektValue === "Projekt 1") {
        this.projekt = this.dataShow[0].data[0];
      } else if (this.projektValue === "Projekt2") {
        this.projekt = this.dataShow[0].data[1];
      }
    },
       totalTime() {
      let result = 0;
      let index = 0;
      this.projekt.projekt.forEach(item => (result += item.time));
      this.projekt.projekt.forEach(item => (index += 1));
      console.log(result);

      this.time = result;
      this.index = index;
      return result;
    }
  },
  computed: {
    dataShow() {
      return this.name;
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
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.title {
  margin-top: 20px;
  margin-bottom: 20px;
}
.choice-projekt {
  margin-bottom: 20px;
}
.table-wrapper {
  margin-top: 50px;
}
.grey {
  background: lightgray;
  padding-left: 5px;
}
.el-progress__text {
  color:red;
}
</style>


