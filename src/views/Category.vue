<template>
  
  <main>
    <div class="container">
        <div class="row no-gutters">
            <div class="js-list-aside-wrapper ">
                <div class="c-listing-sidebar js-list-aside sidebar-sticky">
                    <div class="c-box c-listing-options-labels " style="display:none">
                        <div class="c-listing-options__labels c-listing-options__labels--side-filter">
                            <div class="c-listing-options__title">
                                فیلتر های اعمال شده:
                                <a href="javascript:" class="js-listing-options-clear c-listing-options__clear c-listing-options__clear--no-icon c-listing-options__clear--left">حذف</a>
                            </div>

                            <ul></ul>

                        </div>
                    </div>
                    <div class="c-box c-box--brands-filter">
                        <div>
                            <div class="c-box__header c-box__header--toggleable js-box-toggle">
                                برند ها
                            </div>
                            <div class="c-filter c-filter--params js-box-content">
                                <div class="c-box__scroll-container">
                                    <div class="c-box__scroll js-box-content-items">
                                        <ul class="checkboxUl" style="margin-top: 40px">
                                            <li data-id="1" class="licheck">
                                                <label class="lblcheckbox" data-fa="سامسونگ" data-en="Samsung" data-search="سامسونگ Samsung">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <span class="checkmark"></span>
                                                    سامسونگ
                                                </label>
                                            </li>
                                            <li data-id="2" class="licheck">
                                                <label class="lblcheckbox" data-fa="سونی" data-en="Sony" data-search="سونی Sony">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <span class="checkmark"></span>
                                                    سونی
                                                </label>
                                            </li>
                                            <li data-id="3" class="licheck">
                                                <label class="lblcheckbox" data-fa="اپل" data-en="Apple" data-search="اپل Apple">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <span class="checkmark"></span>
                                                    اپل
                                                </label>
                                            </li>
                                            <li data-id="4" class="licheck">
                                                <label class="lblcheckbox" data-fa="شیائومی" data-en="Xiaomi" data-search="شیائومی Xiaomi">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <span class="checkmark"></span>
                                                    شیائومی
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="c-box  c-filter--switcher ">
                        <label class="c-ui-statusswitcher">
                            <input type="checkbox" value="1" id="">
                            <span class="c-ui-statusswitcher__slider">
                                   <span class="c-ui-statusswitcher__slider__toggle"></span>
                            </span>
                        </label>
                        فقط کالاهای موجود

                    </div>
                    <div class="c-box c-box--color-filter">
                        <div>
                            <div class="c-box__header c-box__header--toggleable js-box-toggle">برند
                                رنگ ها
                            </div>
                            <div class="c-filter c-filter--params js-box-content" style="">
                                <div class="c-box__scroll-container">
                                    <div class="c-box__scroll js-box-content-items">
                                        <ul class="checkboxUl">
                                            <li data-id="6" class="licheck">
                                                <label class="lblcheckbox" data-fa="مشکی" data-search-val="rgb(0,0,0)" data-search="مشکی black">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <span class="checkmark"></span>
                                                    مشکی
                                                    <span class="c-filter__color" style="background-color: rgb(43,43,43)"></span>

                                                </label>
                                            </li>
                                            <li data-id="7" class="licheck">
                                                <label class="lblcheckbox" data-fa="قرمز" data-search-val="rgb(255, 0, 0)" data-search="قرمز Red">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <span class="checkmark"></span>
                                                    قرمز
                                                    <span class="c-filter__color" style="background-color: rgb(255, 0, 0)"></span>

                                                </label>
                                            </li>
                                            <li data-id="3" class="licheck">
                                                <label class="lblcheckbox" data-fa="آبی" data-search-val="rgb(0, 0, 255" data-search="آبی Blue">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <span class="checkmark"></span>
                                                    آبی
                                                    <span class="c-filter__color" style="background-color: rgb(0, 0, 255)"></span>

                                                </label>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class="o-page__content">
                <ul class="breadcrumb ">
                    <li class="breadcrumb-item"><a href=""><span class="">صفحه اصلی</span></a></li>
                    <li class="breadcrumb-item"><a href=""><span class="">فهرست محصولات</span></a></li>
                    <li class="breadcrumb-item"><a href=""><span class="">محصول شماره یک</span></a></li>
                </ul>
                <div class="store-compact-products">

                    <div class="row no-gutters">
                        <div class="col-4 bm-15" 
                        v-for="item in 12" :key="item">

                            <div class="c-product-box">
                                <a href="" class="c-product-box__link">
                                    <img :src="require(`../assets/img/banner/mobile/${item}.jpg`)" 

                                    class="c-product-box__img" alt="">
                                </a>




                                <div class="c-product-box__title">
                                    <a href="">کامپیوتر همه کاره 21.5 اینچی لنوو مدل A340-C</a>
                                </div>
                                <div class="c-product-box__price">
                                    <span class="c-product-box__compare-price">13,200,000</span>
                                    <span class="c-product-box--price"><span>12,500,000 تومان</span></span>
                                </div>
                                <span class="c-product-box__discount">6٪</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
export default {
        name:"Category"
}
</script>

<style>

</style>