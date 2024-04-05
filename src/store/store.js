import { createStore } from "vuex";
import { VuexPersistence } from 'vuex-persist';
 const persist = new VuexPersistence({
    key: 'my-vuex-state', 
    storage: localStorage, 
  });

const store=createStore({
    state(){
        return{
            count:0
        }
    },
    mutations:{
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        }

    },
    actions: {
        increase() {
          store.commit('increment')
        },
        decrease(){
            store.commit('decrement')
        },
      },
      plugins: [persist.plugin] 
})
export  {store,persist};
