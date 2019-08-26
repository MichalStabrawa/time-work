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
 
    setTest (state, value) {
        state.coins = value;
    }

};

export const actions=  {
   
 
    loadCoins ({ commit }) {
      axios
        .get('http://127.0.0.1:3001/api/data')
        .then(r =>coins=r.data)
       .then(coins=>{
         console.log(coins)
       })
    }

}


