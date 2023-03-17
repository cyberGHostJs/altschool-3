import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import Counter from '@/components/Counter.vue'
import { createStore } from "vuex";


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/counter",
        name: 'Counter',
        component: Counter,
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'not-found',
        component: ()=> import("@/components/PageNotFound.vue"),
        
    }
]
})
const counterModule = {
    state() {
        return {
          count: 0,
        };
      },
      getters: {
        getCount(state){
            return state.count
        }
      },
      mutations: {
        increament(state, playload){
            state.count = state.count + playload
        },
        decreament(state, playload){
            state.count = state.count - playload
        },
        reset(state, playload){
            state.count = state.count * playload
        },
        setVal(state, playload){
            state.count = state.count = playload
        }
      },
      actions: {
        increament(context, playload){
            context.commit('increament', playload)
        },
        decreament(context, playload){
            context.commit('decreament', playload)
        },
        reset(context, playload){
            context.commit('reset', playload)
        },
        setVal(context, playload){
            context.commit('setVal', playload)
        }
      }
}
const store = createStore({
    modules: {
        counterModule
    }
});

const app = createApp(App)
app.use(router)
app.use(store);
app.mount("#app");

