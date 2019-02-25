import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		name:"Vipul",
		gender:"Male"
	},
	getters: {
	    getName: (state) => {
	      return state.name;
	    },
	    getGender: (state) => {
	      return state.gender;
	    }
	},
	mutations: {
		setName: (state,payload) => {
			state.name = payload;
		},
		setGender: (state,payload) => {
			state.gender = payload;
		},
	}
});

export default store;