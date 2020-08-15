<template>
    <div>
        <h1>
            {{ msg }}
        </h1>
        <hr>
        <span>style:</span>
        <h1>
            $store.state.count:{{$store.state.count}}
        </h1>
        <h1>mapState:{{count}}</h1>
        <hr>
        <span>mutations count:</span>
        <button @click="$store.commit('add')">&nbsp;&nbsp;+1&nbsp;&nbsp;</button>
        <button @click="sub(10)">&nbsp;&nbsp;-10&nbsp;&nbsp;</button>
        <br />
        <span>actions count:</span>
        <button @click="addPlus">&nbsp;&nbsp;+1&nbsp;&nbsp;</button>
        <button @click="subPlus">&nbsp;&nbsp;-10&nbsp;&nbsp;</button>
    </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
            msg: "count+5 :",
        };
    },

    computed: {
        ...mapState(["count"]),
        ...mapGetters(["count"]), //map 简化写法
        /*count() {
            return this.$store.getters.count;
        },  正常写法*/
    },
    methods: {
        ...mapMutations(["add", "sub"]),
        ...mapActions(["addPlus", "subPlus"]),
    },
    store, //容易忘记引入导致报错
};
</script>

