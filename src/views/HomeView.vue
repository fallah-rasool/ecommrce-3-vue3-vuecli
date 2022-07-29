<template>
<main class="main">
    <div class="container">
        <div class="slideshow">
            <a 
            v-for="(slid,index) in slides" :key="index"
 :style="index === sliderShowIndex ? 'display:block;':'display:none;'"
             class="slideshow__slide">
              <img :src="slid.img" class="slideshow__img">
            </a>
            <a @click="move(-1)" class="slideshow__prev">&#10095;</a>
            <a @click="move(1)" class="slideshow__next">&#10094;</a>

            <div class="slideshow__items">
                    <div class="slideshow__item" v-for="(slide, index) in slides" :key="slide.img">
                        <div class="slideshow__item-inner" :style="index === sliderShowIndex ? `width: ${progressWidth}%` : ''"></div>
                    </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
   },
  data:()=>({

    sliderShowIndex:0,
    sliderInterval: null,
    progressWidth:0,

    slides:[
      {img :(require('../assets/img/slideshow/1.png'))},            
      {img :(require('../assets/img/slideshow/2.png'))},             
      {img :(require('../assets/img/slideshow/3.png'))},            
      {img :(require('../assets/img/slideshow/4.png'))},
    ]}),
  methods:{
    move(n){
      //console.log(n)
     if(this.slides.length <= this.sliderShowIndex +n){
       this.sliderShowIndex =0;

     }else if(this.sliderShowIndex +n < 0 ){
        this.sliderShowIndex =(this.slides.length - 1);
     }else{
       this.sliderShowIndex += n;
     }
    }
  },
  created(){
    this.sliderInterval = setInterval(() => {
          if (this.progressWidth >= 100) {
            this.progressWidth = 0;
            this.move(1);
          } else {
            this.progressWidth++;
          }
        }, 15);
  },
  destroyed(){
    clearInterval(this.sliderInterval)
  }
}
</script>
