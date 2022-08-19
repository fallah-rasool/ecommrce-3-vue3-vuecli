import { createStore } from 'vuex'

import axios from 'axios'

import { SET_PRODUCTS_MUTATIONS } from './type'

const store = createStore({

  state: ()=> ({
    products:[],
    user:{name:"rasool", id:1}
  }),
  getters:{
    products: state => state.products,

    getProductById:(state)=>(id)=>state.products.find(product=>product.id === id),
    
    userName: state => state.user.name
  },
  mutations:{
   [SET_PRODUCTS_MUTATIONS](state, data){
        state.products = data
    }
  },
  actions:{
     async getProducts(context){
       
             const { data }=await axios.get('https://gist.githubusercontent.com/Tefoh/57a0ef76ab63a974105b9f0fbcb8475b/raw/d49e3d8104992ff6cc6742fbe91b0c642287837a/products.json')

             context.commit('SET_PRODUCTS', data)             
        }
  }
})

export default store