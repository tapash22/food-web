import Vue from 'vue'
import Vuex from 'vuex'

import homemadeModule from './modules/homemade/index';
import dryModule from './modules/dryfood/index';
import readyModule from './modules/readytocook/index';
import restaurentModule from './modules/restaurant/index';

Vue.use(Vuex)


export default new Vuex.Store({

  state() {
    return {
      foods: [
        {
          id: 1,
          name: 'Mutton Curry',
          price: 200
        },
        {
          id: 2,
          name: 'Chicken Curry',
          price: 120
        },
        {
          id: 3,
          name: 'Sweets',
          price: 250
        },
        {
          id: 4,
          name: 'Starter',
          price: 100
        },
        {
          id: 5,
          name: 'Fish Curry',
          price: 150
        },
        {
          id: 6,
          name: 'Fish Fry',
          price: 120
        },
        {
          id: 7,
          name: 'Fish cutlet',
          price: 100
        },
        {
          id: 8,
          name: 'spicy',
          price: 80
        },
      ]
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    homem : homemadeModule,
    drym  :dryModule,
    readm : readyModule,
    restaurentm : restaurentModule
  }
})
