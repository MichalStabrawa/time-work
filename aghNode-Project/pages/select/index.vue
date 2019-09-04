<template>
  <div>
    <div class="container main">
      <div class="item">
        <h1>Wybierz pracownika</h1>
        <select name id v-model="value">
          <option v-for="item in callAnd" v-bind:value="item.name">{{item.name}}</option>
        </select>
        <div>{{value}}</div>
        <!-- <el-button type="info" v-if="flag" @click="loadCoins" class="btn1">Sprawdź</el-button> -->
        <el-button type="info" v-if="flag==!false" @click="getTimework">Pokaż raport</el-button>
      </div>
      <div class="item">{{emploerShow}}</div>
    </div>
    <section class="container">
       <tableOne :name="callAnd"/>


      <div v-if="flag2===true &&emploerShow">
        <h2>{{callAnd[0].name}}</h2>

        <select name id v-model="selected">
          <option v-if="emploerShow[0] "
            v-for="(item,index) in emploerShow[0].data"
            :key="index"
            v-bind="item.name"
          >{{item.name}}</option>
        </select>

      

        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Tenat</th>
              <th>Czas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in emploerShow.data[0].projekt">
              <td v-bind:value="item.date">{{item.date}}</td>
              <td class="grey">{{item.task}}</td>
              <td class="time" v-bind:value="item.time">{{item.time}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="flag2===false">
        <h2>{{emploerShowName}}</h2>

        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Temat</th>
              <th scope="col">Czas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in emploerShow.data">
              <td v-bind:value="item.date">{{item.date}}</td>
              <td class="grey">{{item.task}}</td>
              <td class="time" v-bind:value="item.time">{{item.time}}</td>
            </tr>
          </tbody>
        </table>
        <el-button type="info" @click="totalTime">Raport</el-button>
        <div v-show="time != null">
          <p class="report">
            Całkowity czas pracy przy projekcie
            <span class="index">{{time}}h</span> ilość tasków
            <span class="index">{{index}}</span>
          </p>
          <el-container>
            <el-row :gutter="20">
              <el-col :span="16">
                <div class="grid-content bg-purple">
                  <div class="wrapper-report">
                    <div v-for="item in emploerShow.data">
                      <label>{{item.task}}</label>
                      <!-- <div class="progress">
                <div
                  class="progress-item"
                  v-bind:value="item.time"
                  v-bind:style="{width: item.time*10+'px' }"
                >
                  <span class="content">{{(parseInt(item.time*10*100)/390).toFixed(2)}}%</span>
                </div>
                      </div>-->
                      <el-progress
                        v-if="value1===true"
                        :percentage="(parseInt(item.time*10*100)/390).toFixed(2)"
                        class="p-bar"
                      ></el-progress>
                      <el-progress
                        v-show="value1===false"
                        type="circle"
                        :percentage="(parseInt(item.time*10*100)/390).toFixed(2)"
                      ></el-progress>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <h3>Zmień rodzaj wykresu</h3>
                  <el-switch v-model="value1"></el-switch>
                </div>
              </el-col>
            </el-row>
          </el-container>
        </div>
      </div>
    </section>
    <footerComponent/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
import moment from 'moment';
import footerComponent from "../../components/footerComponent";
import tableOne from '../../components/tableOne';


export default {
  components: {
    footerComponent,tableOne
  },

  data() {
    return {
      moment: moment,
      dane: null,
      emploers: null,
      emploerShow: null,
      emploerShowName: null,
      index: null,
      time: null,
      flag: true,
      flag2: null,
      value: "",
      value1: true,
      daneBack: null,
      test: 'Name'
    };
  },
   mounted() {
    this.loadCoins();
  },

  methods: {
    ...mapActions(["loadCoins"]),
    getTimework() {

      if (this.value === "Jan Kowalski") {
        console.log("To jest jan Kowalski");
        this.emploerShow = this.callAnd[0];
        this.emploerShowName = this.emploerShow.name;
        this.flag2 = true;
      } else {
        console.log("To jest Piotr Nowak");
        this.emploerShow = this.callAnd[1];
        this.emploerShowName = this.emploerShow.name;
        this.flag2 = false;
      }
    },
    totalTime() {
      let result = 0;
      let index = 0;
      this.emploerShow.data.forEach(item => (result += item.time));
      this.emploerShow.data.forEach(item => (index += 1));
      console.log(result);

      this.time = result;
      this.index = index;
      return result;
    }
  },
 

  computed: {
    callAnd() {
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

  @media (max-width: 998px) {
    flex-direction: column-reverse;
    padding-left: 30px;
    padding-left: 30px;
    height: auto;
  }
  .item {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 998px) {
      width: 100%;
    }
  }
  .item:nth-last-of-type(1) {
    background: url("../../assets/img/test.jpeg");
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    padding-right: 0;

    @media (max-width: 998px) {
      height: 400px;
    }
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
  background: #3f5795;
}
.thead-light {
  background: #000;
  color: #fff;
  padding: 5px;
}
.grey {
  background: lightgray;
  padding-left: 5px;
}
.index {
  background: #000;
  color: #fff;
  padding: 10px;
}
.report {
  margin-top: 50px;
}
.wrapper-report {
}

.progress {
  position: relative;
  width: 390px;
  height: 15px;
  border: 1px solid grey;
  margin-bottom: 10px;
  border-radius: 10px;
  background: grey;
}
.progress-item {
  height: 100%;
  background: red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
.content {
  font-size: 10px;
  position: absolute;
  z-index: 100;
  right: 10px;
  color: greenyellow;
}
.wrapper-report {
  label {
    font-size: 12px;
  }
}
.p-bar {
  width: 90%;
  display: flex;

  .el-progress__text {
  }
}
.el-row {
  width: 100%;
  padding-top: 50px;
}
.el-progress--circle {
  display: block;
}
</style>


