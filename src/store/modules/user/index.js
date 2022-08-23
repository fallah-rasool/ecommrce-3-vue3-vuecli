
export default {

   namespaced :true,  
  
   state : ()=> ({
                user:{name:"rasool", id:1},
                isLogged:true
   }),
   getters:{
        name: state => state.user.name
   },
   mutations:{
      SET_USER(state){
         state.user.name='ali'
      }
   },
   actions:{
      userLpg(){
         console.log('user Logged')
       }

   }
}
