export default {
  namespaced: true,
  state() {
    return {
      items: [
        {
          id: 1,
          name: 'Cake',
          subcategory:'dryfood',
          price: 700,
          image: 'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50'
        },
        {
          id: 2,
          name: 'Honney',
          subcategory:'dryfood',
          price: 1200,
          image: 'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50'
        },
        {
          id: 3,
          name: 'Pinnut',
          subcategory:'dryfood',
          price: 250,
          image: 'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50'
        },
        {
          id: 4,
          name: 'Kaju',
          subcategory:'dryfood',
          price: 800,
          image: 'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50'
        },
        {
          id: 5,
          name: 'Biskut',
          subcategory:'dryfood',
          price: 150,
          image: 'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50'
        },
        {
          id: 6,
          name: 'Potato',
          subcategory:'dryfood',
          price: 850,
          image: 'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50'
        },
        {
          id: 7,
          name: 'Muri',
          subcategory:'dry',
          price: 150,
          image: 'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50'
        },
        {
          id: 8,
          name: 'Khajur',
          subcategory:'dryfood',
          price: 800,
          image: 'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50'
        },
      ]
    }
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.items.find(item => item.id === id)
    },
    getSelectedType:(state)=>(subcategory)=>{
      // return state.items.filter((p)=>p.subcategory === name).includes
     return this.items.filter((item) => item.subcategory.includes(item));
    }

  },
  mutations: {
    SET_ITEM(state,item){
      state.item = item;
    }
  },
  actions: {
    getItem({ commit }, productId) { commit('SET_ITEM', productId) }

  }

}