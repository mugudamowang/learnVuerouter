import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 访问状态
const state = {
    count: 0
}

//同步修改状态
const mutations = {
    add(state) {
        state.count++;
    },
    sub(state, n) {
        state.count -= n;
    }
}
//异步修改状态
const actions = {
    addPlus(context) {       //context 上下文对象
        context.commit('add')
        setTimeout(() => {
            context.commit('sub', 10)   //异步执行
        }, 3000);
        console.log("我在sub下面但是我先执行了, 3s后-5,这就是actions和mutations不同之处, 异步的体现");
    },
    subPlus({ commit }) {      //包装的commit对象
        commit('sub', 10)
    }
}

//过滤状态
const getters = {
    count: function (state) {
        return state.count += 5
    }
}


//模块组    --大项目使用, 一般不建议, 因为要修改模板, 不方便
const moduleA = {
    state, mutations, getters, actions
}

export default new Vuex.Store({
    state, mutations, getters, actions
})
// modules:{a: moduleA}