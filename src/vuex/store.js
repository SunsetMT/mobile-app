import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        que: '',
        buttons: [
            {id: 1, svg: "Btn_1.svg", altSvg: "Btn_1-active.svg", isActive: true, link: "#"},
            {id: 2, svg: "Btn_2.svg", altSvg: "Btn_2-active.svg", isActive: false, link: "#"},
            {id: 3, svg: "Btn_3.svg", altSvg: "Btn_3-active.svg", isActive: false, link: "#"},
            {id: 4, svg: "Btn_4.svg", altSvg: "Btn_4-active.svg", isActive: false, link: "#"},
        ],
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
        CLEAR_QUE: (state) => {
          state.que = ''
        },
        INSERT_QUE: (state, str) => {
            state.que = str
        },
        INC_MARK: (state, id) => {
            state.products.find(product => product.id === id).mark++;
        },
        DEC_MARK: (state, id) => {
            state.products.find(product => product.id === id).mark--;
        },
        SWITCH_BUTTONS: (state, id) => {
            state.buttons.forEach(button => button.isActive = false)
            state.buttons.find(button => button.id === id).isActive = true;
        }
    },
    actions: {
        MAKE_CLEAR_QUE({commit}){
            commit('CLEAR_QUE')
        },
        INSERT_IN_QUE({commit}, str){
            commit('INSERT_QUE', str)
        },
        MAKE_INC_MARK({commit}, id){
            commit('INC_MARK', id)
        },
        MAKE_DEC_MARK({commit}, id){
            commit('DEC_MARK', id)
        },
        MAKE_SWITCH_BUTTONS({commit}, id){
            commit('SWITCH_BUTTONS', id)
        }

    },
    getters: {
        PRODUCTS(state){
            return state.products
        },
        QUE(state){
            return state.que
        },
        BUTTONS(state){
            return state.buttons
        }
    }
});

export default store;