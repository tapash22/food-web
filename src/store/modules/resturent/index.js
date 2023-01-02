export default {
    namespaced: true,
    state() {
        return {
            lists: [
                {
                  id: 1,
                  name: 'mutton curry',
                  rating:4,
                  image:'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50',
                  price:44
                },
                {
                  id: 2,
                  name: 'chicken curry',
                  rating:4,
                  image:'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50',
                  price:44
                },
                {
                  id: 3,
                  name: 'fish curry',
                  rating:4,
                  image:'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50',
                  price:44
                },
                {
                  id: 4,
                  name: 'fish fry',
                  rating:4,
                  image:'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50',
                  price:44
                },
                {
                  id: 5,
                  name: 'sweet',
                  rating:4,
                  image:'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50',
                  price:44
                },
                {
                  id: 6,
                  name: 'foods',
                  rating:4,
                  image:'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50',
                  price:44
                },
                {
                  id: 7,
                  name: 'fish fry',
                  rating:4,
                  image:'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50',
                  price:44
                },
                {
                  id: 8,
                  name: 'sweet',
                  rating:4,
                  image:'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50',
                  price:44
                },
                {
                  id: 9,
                  name: 'foods',
                  rating:4,
                  image:'https://i.ndtvimg.com/i/2017-12/dry-fruits-are-good-for-heart-health_650x400_61513059621.jpg?q=50',
                  price:44
                },
              ],
            resturents: [
                {
                    id: 1,
                    name: 'Sultane Dine',
                    link: 'https://vuetifyjs.com/en/styles/text-and-typography/#typography',
                    image: 'https://www.shutterstock.com/image-vector/facade-restaurant-vector-flat-design-260nw-727437238.jpg',
                },
                {
                    id: 2,
                    name: 'Malsay kachy',
                    link: 'https://vuetifyjs.com/en/styles/text-and-typography/#typography',
                    image: 'https://www.shutterstock.com/image-vector/facade-restaurant-vector-flat-design-260nw-727437238.jpg',
                },
                {
                    id: 3,
                    name: 'Alar-dan',
                    link: 'https://vuetifyjs.com/en/styles/text-and-typography/#typography',
                    image: 'https://www.shutterstock.com/image-vector/facade-restaurant-vector-flat-design-260nw-727437238.jpg',
                },
                {
                    id: 4,
                    name: 'Shwarma House',
                    link: 'https://vuetifyjs.com/en/styles/text-and-typography/#typography',
                    image: 'https://www.shutterstock.com/image-vector/facade-restaurant-vector-flat-design-260nw-727437238.jpg',
                },
                {
                    id: 5,
                    name: 'Five Star',
                    link: 'https://vuetifyjs.com/en/styles/text-and-typography/#typography',
                    image: 'https://www.shutterstock.com/image-vector/facade-restaurant-vector-flat-design-260nw-727437238.jpg',
                },
                {
                    id: 6,
                    name: 'Pitha Mela',
                    link: 'https://vuetifyjs.com/en/styles/text-and-typography/#typography',
                    image: 'https://www.shutterstock.com/image-vector/facade-restaurant-vector-flat-design-260nw-727437238.jpg',
                },
                {
                    id: 7,
                    name: 'Sandra',
                    link: 'https://vuetifyjs.com/en/styles/text-and-typography/#typography',
                    image: 'https://www.shutterstock.com/image-vector/facade-restaurant-vector-flat-design-260nw-727437238.jpg',
                },
                {
                    id: 8,
                    name: 'New One',
                    link: 'https://vuetifyjs.com/en/styles/text-and-typography/#typography',
                    image: 'https://www.shutterstock.com/image-vector/facade-restaurant-vector-flat-design-260nw-727437238.jpg',
                },
            ]
        }
    },
    getters: {
        getResturentById: (state) => (name) => {
            return state.resturents.find(resturent => resturent.name === name)
        },
        getResturentFoodById: (state) => (id) => {
            return state.lists.find(list => list.id === id)
        },
    },
    mutations: {

    },
    actions: {

    }

}