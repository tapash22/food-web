export default {
    namespaced: true,
    state() {
        return {
            foods: [
                {
                    id: 1,
                    name: 'Mutton Curry',
                    price: '200'
                },
                {
                    id: 2,
                    name: 'Chicken Curry',
                    price: '120'
                },
                {
                    id: 3,
                    name: 'Sweets',
                    price: '250'
                },
                {
                    id: 4,
                    name: 'Starter',
                    price: '100'
                },
                {
                    id: 5,
                    name: 'Fish Curry',
                    price: '150'
                },
                {
                    id: 6,
                    name: 'Fish Fry',
                    price: '120'
                },
                {
                    id: 7,
                    name: 'Fish cutlet',
                    price: '100'
                },
                {
                    id: 8,
                    name: 'spicy',
                    price: '80'
                },
            ]
        }

    },
    getters: {
        allItems: (state) => state.foods

    },
    mutations: {

    },
    actions: {

    }

}