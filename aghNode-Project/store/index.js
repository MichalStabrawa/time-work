export const state = () => {
  return {
      header:{
        title: "Czas Pracy",
        title2: "Projekt Metody Wytwarzania Oprogramowania AGH Kraków "
      },
      coins: {},
   
   

      }
};

export const mutations = {
 
    setCoins (state, value) {
        state.coins = value;
    }

};

/*export const actions=  {
   
 
    loadCoins ({ commit }) {
      axios
        .get('http://127.0.0.1:3001/api/data')
        .then(r =>r.data)
       .then(coins=>{
        return r.data;
       })
    }

}
*/import axios from 'axios';

export const actions = {
   
        loadCoins ({ commit }) {
            axios
              .get('http://127.0.0.1:3001/api/data')
              .then(r =>r.data)
             .then(coins=>{
              commit(coins);
             })
          }
    

};

