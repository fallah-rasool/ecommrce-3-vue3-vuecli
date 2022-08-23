import { SET_PRODUCTS_MUTATIONS } from './type'

import axios from 'axios'

export default {
        async getProducts(context,{text} ){
  
          const { data }=await axios.get('https://gist.githubusercontent.com/Tefoh/57a0ef76ab63a974105b9f0fbcb8475b/raw/d49e3d8104992ff6cc6742fbe91b0c642287837a/products.json')
  
          context.commit(SET_PRODUCTS_MUTATIONS, data)    
          
          context.dispatch('log',text)

        //  console.log(context.rootGetters['userName/name'])
               
                console.log(context.rootState.userName.user.name)
                console.log(context)
                context.dispatch('userName/userLpg',null,{root:true})
                context.commit('userName/SET_USER',null,{root:true})

          
        },
        log(ctx,paylod){
          console.log(paylod)
        }
    }