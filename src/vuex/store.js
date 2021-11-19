import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        que: '',
        products: [
            {
                id: 1,
                image: "place1.jpg",
                text: "Величие города на Неве прямо перед вами",
                title: "Дворцовый Петербург",
                star: 4.9,
                mark: 57
            },
            {
                id: 2,
                image: "place2.jpg",
                text: "Величие города на Неве прямо перед вами",
                title: "Парадные, которые удивят",
                star: 4.9,
                mark: 57
            },
            {
                id: 3,
                image: "place3.jpg",
                text: "Тихие улочки, покрытые тайнами прошлого",
                title: "Улицы разбитых фонарей",
                star: 4.9,
                mark: 57
            },
        ]
    },
    mutations: {
        INSERT_QUE: (state, str) => {
            state.que = str
        },
        INC_MARK: (state, id) => {
            state.products.find(product => product.id === id).mark++;
        },
        DEC_MARK: (state, id) => {
            state.products.find(product => product.id === id).mark--;
        }
    },
    actions: {
        INSERT_IN_QUE({commit}, str){
            commit('INSERT_QUE', str)
        },
        MAKE_INC_MARK({commit}, id){
            commit('INC_MARK', id)
        },
        MAKE_DEC_MARK({commit}, id){
            commit('DEC_MARK', id)
        }

    },
    getters: {
        PRODUCTS(state){
            return state.products;
        },
        QUE(state){
            return state.que;
        }
    }
});

export default store;