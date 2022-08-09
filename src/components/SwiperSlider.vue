<template>
<div class="slider">
            <div class="slider__head"><span class="slider__title">
            
                             <slot name="title"/>
            </span></div>
            <div class="slider__content">
              <div class="swiper-container" ref="sliderSwiper">

                    <div class="swiper-wrapper">
                        <slot />
                    </div>
                </div>
            </div>
                <div class="swiper-button-next" ref="nextBtn">&#10095;</div>
                <div class="swiper-button-prev" ref="prevBtn">&#10094;</div>
</div>


</template>

<script>
  import Swiper from 'swiper/bundle';

  import 'swiper/css/bundle';
  import 'swiper/css';
  import 'swiper/css/navigation';


import SwiperCore,{ Navigation} from 'swiper/core';

SwiperCore.use([Navigation])

export default{
  name:"SwiperSlider",
  mounted(){
          new Swiper(this.$refs.sliderSwiper, {
                loop: false,

                slidesPerView: 4,
                Clickable: true,
                spaceBetween: 20,
                navigation: {
                        nextEl: this.$refs.nextBtn,
                        prevEl: this.$refs.prevBtn,
                },
                breakpoints: {
                        1120: {slidesPerView: 4, spaceBetween: 20},
                        1028: {slidesPerView: 3, spaceBetween: 45},
                        768: {slidesPerView: 2, spaceBetween: 10},
                        480: {slidesPerView: 1, spaceBetween: 0},
                }
          })

  }




}

</script>

<style scoped>
.slider{
    overflow: hidden;
}

.swiper-button-next:after, .swiper-rtl .swiper-button-{
    display: none;

}
.swiper-button-prev:after, .swiper-rtl .swiper-button-{
    display: none;

}

.slider__image  img{
  
    width: 220px;
}
.slider__head{
    text-align: right;

}
.slider__title{

      font-family: irs;
      font-weight: 800;

}
.slider__title2{
      font-family: irs;
      font-weight: 500;

}
.slider__price{
     font-family: irs;
     font-weight: 400;
}



</style>