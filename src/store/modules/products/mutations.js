import { SET_PRODUCTS_MUTATIONS } from './type'

export default {
        [SET_PRODUCTS_MUTATIONS](state, data){
             state.products = data
         }
 }