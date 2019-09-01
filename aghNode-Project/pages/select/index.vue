<template>
  <div>
    <div class="container main">
      <div class="item">
        <h1>Wybierz pracownika</h1>
        <select name id v-if="emploers != null" v-model="value">
          <option v-for="item in emploers" v-bind:value="item.name">{{item.name}}</option>
        </select>
        <el-button type="primary" v-if="flag" @click="callServer2">Sprawdź</el-button>
        <el-button type="secondary" v-if="flag===false" @click="getTimework">Pokaż raport</el-button>
      </div>
      <div class="item"></div>
    </div>
    <section class="container">
      <div v-if="flag2===true">
        <h2>{{emploerShowName}}</h2>
      {{emploerShow}}
        <select name="" id="">
         </select>
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
              <td class="time" v-bind:value="item.time" >{{item.time}}</td>
            </tr>
          </tbody>
        </table>
        <button class="danger" @click="getprojectsTime">Czas</button>
      </div>
    </section>
    <footerComponent/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import footerComponent from "../../components/footerComponent";
export default {
  components: {
    footerComponent
  },
  data() {
    return {
      dane: null,
      emploers: null,
      emploerShow: null,
      emploerShowName: null,
      time: null,
      flag: true,
      flag2: true,
      value: ""
    };
  },

  methods: {
    /*   ...mapActions(["loadCoins"]),*/
    callServer2() {
      this.$axios.get("http://127.0.0.1:3001/api/data2").then(res => {
        console.log("Data with click");
        console.log("res", res.data);
        this.emploers = ("res", res.data);
        this.flag = false;
      });
    },
    getTimework() {
      if (this.value === "Jan Kowalski") {
        console.log("To jest jan Kowalski");
        this.emploerShow = this.emploers[0];
        this.emploerShowName = this.emploerShow.name;
        this.flag2 = true;
      } else {
        console.log("To jest Piotr Nowak");
        this.emploerShow = this.emploers[1];
        this.emploerShowName = this.emploerShow.name;
        this.flag2 = false;
      }
    },
    getprojectsTime(){
const timeVal = document.querySelectorAll('.time');



timeVal.forEach(testuje);

function testuje(item) {
 
  console.log(item)
 
}

    }
  },
  /*  mounted() {
    this.loadCoins();
  },*/

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
  .item {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item:nth-last-of-type(1) {
    background: url("../../assets/img/test.jpeg");
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

</style>


