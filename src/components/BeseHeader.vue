<template>
<!-- start header -->

  <header class="header">
    <div class="header__shape">
        <div class="header__shape-inner"></div>
    </div>

    <!-- start container -->
    <div class="container">
        <!-- start navbar -->
        <div class="navbar">
            <div class="navbar__row">

                <!-- start header__logo -->          
                <div class="header__logo">

                        <router-link :to="{to:'Home'}" 
                        class="header__logo-img"> 
                        </router-link>
                
                </div>
                <!-- end header__logo -->

                <!-- start  navbar__items -->
                <div class="navbar__items">
                    <ul class="navbar__ul">
                        <li class="navbar__item">

                        <router-link :to="{to:'Home'}" 
                        class="navbar__link navbar__link--is-active">صفحه اصلی
                        </router-link>
                        
                        </li>
                        <li class="navbar__item navbar__item--has-sub">

                        <router-link :to="{to:'Home'}"  
                        class="navbar__link"
                        >فروشگاه</router-link>

                            <ul class="navbar__subset">
                                <li class="navbar__item"><a href="" class="navbar__link">زیر منو 1</a></li>
                                <li class="navbar__item"><a href="" class="navbar__link">زیر منو 2</a></li>
                                <li class="navbar__item navbar__item--has-sub"><a href="" class="navbar__link">زیر منو 3</a>

                                    <ul class="navbar__subset">
                                        <li class="navbar__item"><a href="" class="navbar__link">زیر منو 1</a></li>
                                        <li class="navbar__item"><a href="" class="navbar__link">زیر منو 2</a></li>
                                        <li class="navbar__item navbar__item--has-sub"><a href="" class="navbar__link">زیر منو 3</a>
                                            <ul class="navbar__subset">
                                                <li class="navbar__item"><a href="" class="navbar__link">زیر منو 1</a></li>
                                                <li class="navbar__item"><a href="" class="navbar__link">زیر منو 2</a></li>
                                                <li class="navbar__item"><a href="" class="navbar__link">زیر منو 3</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="navbar__item">
                        <a href="" class="navbar__link">درباره ما</a></li>
                        <li class="navbar__item">
                        <a href="" class="navbar__link">تماس باما</a></li>
                    </ul>
                </div>
                 <!-- end  navbar__items -->


                <!-- start  navbar__action -->
                <div class="navbar__action">

                <!-- start  header__basket -->
                    <div class="header__basket">
                        <span class="header__basket-icon"
                        @click="ShowBasketDropdown"
                        ></span>
                        <span class="header__basket-count">0</span>
<div class="header__dropdown" 
:class="{'header__dropdown--is-active' :isBasketDropdown}"
                        >
                           
     <div class="header__dropdown-content header__dropdown-content--overflow">
                              
                                <div class="header__basket-item"
                                v-for="item  in 3 " :key="item"
                                >
                                   
                                    <a href="" class="header__basket-link">
                                        <img :src="require('../assets/img/big-pic.jpg')" class="header__basket-img">
                                    </a>

                                    <div class="header__basket-details">
                                        <h5><a class="header__basket-title" href="">محصول شماره 1</a></h5>
                                        <div class="header__basket-price">120000 تومان</div>
                                        <a href="" class="header__basket-remove">حذف</a>
                                    </div>
                                </div>

                              

                               




                                <div class="header__basket-btn">
                                    <a href="cart.html" class="btn btn--boxshadow btn--brand w--100">ثبت و نهایی کردن
                                        سفارش</a>
                                </div>
                            </div>


                        </div>
                    </div>
                <!-- end  header__basket -->

                <!-- start  header__account -->
                    <div class="header__account">

                        <!-- start  header__account-icon -->
                        <span class="header__account-icon"
                        @click="ShowAccountDropdown"
                        ></span>
                        <!-- end  header__account-icon -->

                        <!-- start  header__dropdown -->
                        <div class="header__dropdown header__dropdown--w200"
                        :class="{'header__dropdown--is-active' :isAccountDropdown}"
                        >
                           <!-- start header__dropdown-content -->
                           <div class="header__dropdown-content">
                                <a href="sign-in.html" class="header__account-link">ورود</a>
                                <a href="sign-up.html" class="header__account-link">ثبت نام</a>
                            </div>
                            <!-- end header__dropdown-content -->
                        </div>
                        <!-- end  header__dropdown -->

                    </div>
                <!-- end  header__account -->   
                 
                </div>
                <!-- start  navbar__action -->
            </div>
        </div>
        <!-- end navbar -->

        <!-- start header__top -->
          <div class="header__top">
            <div class="header__top-content">
                <h1 class="header__top-h1">وب آموز : پلی برای یادگیری</h1>
                <p class="header__top-p">با کمترین هزینه حرفه ای شو</p>
            </div>
            <form class="header__form">
                <div class="header__search">
                    <input type="text" class="header__serach-input" placeholder="جستجو کنید...">
                    <button class="header__search-btn btn btn--brand btn--boxshadow"></button>
                </div>
            </form>
        </div>
        <!-- end header__top -->

    </div>
     <!-- ens container -->
</header>
<!-- end header -->

</template>

<script>
export default {
    name :"BeseHeader",
    data:()=>({
            isBasketDropdown:false,
            isAccountDropdown:false,
    }),
    methods:{
             ShowBasketDropdown(){
                  this.isAccountDropdown = false
                  this.isBasketDropdown = !this.isBasketDropdown
             },
             ShowAccountDropdown(){
                  this.isBasketDropdown = false  
                  this.isAccountDropdown = !this.isAccountDropdown
             },
             EventListener(event){
                if(!event.target.closest('.header__basket')){
                     this.isBasketDropdown = false 
                }
                if(!event.target.closest('.header__account')){
                     this.isAccountDropdown = false 
                }
             }
    },
    mounted(){
            document.addEventListener('click',this.EventListener);
    },
    destroyed() {
            document.removeEventListener('click',this.EventListener);
    },
}





</script>

<style>

</style>