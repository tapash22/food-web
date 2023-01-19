export default {
    namespaced: true,
    state() {
        return {
            cart: [],
            product:null
        }
    },
    getters: {
        cartItemCount : (state)=>{
            return state.cart.length;
        },
        // cartItemQuentity:(state)=>{
        //     let count = 0;
        //     state.cart.forEach(item=>{
        //         count += item.quantity;
        //     })
        // },
        
        cardTotalPrice : (state)=>{
            let total = 0;
            state.cart.forEach(item => {
                total += item.product.price * item.quantity;
            });
            return total;
        }
    },
    mutations: {
         ADD_PRODUCT_TO_CART : (state,{ product, quantity })=>{

            let productInCard = state.cart.find(item=>{
                return item.product.id === product.id;
            });
        
            if(productInCard){
                productInCard.quantity += quantity;
                return;
            }
        
            state.cart.push({
                product,
                quantity
            })
        },

        ADD_CART_QUANTITY:(state,{cart,quantity})=>{
            let pquantity = state.cart.find(item =>{
                return item.cart.id === cart.id;
            });
            if(pquantity){
                pquantity.quantity += quantity;
                return;
            }

            state.cart.push({
                cart,
                quantity
            });
        },
        
        
        
        SET_CART: (state,cartItem)=>{
            state.cart = cartItem;
        },
        
        REMOVE_PRODUCT_FROM_CART :(state,product)=>{
        
            state.cart = state.cart.filter(item =>{
                return item.product.id !== product.id;
            })
        },
        
        CLEAR_CART_ITEM : (state)=>{
            state.cart = [];
        }

    },
    actions: {
        addProductToCard: ({ commit, dispatch }, { product, quantity }) => {
            commit('ADD_PRODUCT_TO_CART', { product, quantity });

            // dispatch('addNotification', {
            //     type: 'success',
            //     message: 'Add product to cart'
            // }, { root: true })

            // Cart.store({
            //     product_id: product.id,
            //     quantity,
            // })
        },
        addQuantity:({commit},{product,quantity})=>{
            commit('ADD_QUANTITY',{
                product,quantity
            });
        },

        addCardQuantity:({commit},{cart,quantity}) =>{
            commit('ADD_CART_QUANTITY',{cart,quantity})
        },

        getCartItem: ({ commit }) => {
            // Cart.all().then(response => {
                commit('SET_CART');
            // })
        },

        removeProductFromCart: ({ commit, dispatch }, product) => {
            commit('REMOVE_PRODUCT_FROM_CART', product);

            // dispatch('addNotification', {
            //     type: 'success',
            //     message: 'remove product from cart'
            // }, { root: true })

            // Cart.delete(product.id);
        },

        clearCardItem: ({ commit, dispatch }) => {
            commit('CLEAR_CART_ITEM');

            // dispatch('addNotification', {
            //     type: 'success',
            //     message: 'remove all from  cart'
            // }, { root: true })

            // Cart.deleteAll();
        }
    }
}