<template>
<main id="cart">
    <div class="container">
        <h1 class="page-title border-bottom padding-bottom-30 margin-bottom-20">سبد خرید</h1>
        <div class="cart-items">
            <form action="">
                <div class="border-bottom cart-item"
                v-for="item in 6" :key="item"
                >
                    <div class="row no-gutters">
                        <div class="cart-image">
                            <div class="cart--image">
                                <div class="cart-item-image">
                                    <a href="#" class="cart-item-image-link">
                                       
                                          <img :src="require(`../assets/img/banner/mobile/${item}.jpg`)" class="width-100" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="cart-details">
                            <div class="cart--details ">
                                <div class="cart-item-details width-100">
                                    <h5 class="cart-item-title">
                                        <a class="cart-item-link " target="_blank" href="/product">
                                            نمونه محصول
                                        </a>
                                    </h5>
                                    <div class="cart-item-subtitle font-size-14 margin-bottom-10">
                                        رنگ: سفید، اندازه: کوچک، حجم: 32 گیگ
                                    </div>
                                    <div class="cart-item-id font-size-14">
                                        کد: 101163511
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cart-amounts">
                            <div class="cart--amounts">
                                <div class="cart-item-amounts width-100">
                                    <input type="number" min="1" placeholder="تعداد" max="1000" class="text">
                                    <div class="cart-item-price"><span>130000 تومان</span></div>
                                    <a href="#" onclick="removeCartItem(this);" class="cart-item-remove">حذف</a>
                                </div>
                            </div>
                        </div>
                        <div class="cart-subtotal">
                            <div class="cart--subtotal">
                                <div class="cart-item-subtotal">
                                    <div class="cart-item-subtotal ">
                                        <h6 class="cart-item-subtotal-title">جمع</h6>25,000,000 تومان
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>

            <div class="row no-gutters cart-coupons-code">
                <div class="col-6">
                    <form class="cart-coupons-code-group" action="">
                        <div class="d-flex">
                            <input type="text" placeholder="کوپن خود را بنویسید">
                            <button class="btn-coupons">اعماال</button>
                        </div>
                    </form>
                </div>
                <div class="col-6">
                    <table class="table text-center table-bordered table-striped">
                        <tbody>
                        <tr>
                            <th>جمع کل</th>
                            <td> 50,000,000 تومان</td>
                        </tr>
                        <tr>
                            <th>وزن</th>
                            <td>800 گرم</td>
                        </tr>
                        <tr>
                            <th> مالیات </th>
                            <td> 0 تومان</td>
                        </tr>
                        <tr>
                            <th> تخفیف </th>
                            <td class="text-red">0 تومان</td>
                        </tr>
                        <tr>
                            <th> قابل پرداخت </th>
                            <td class="text-blue"> 50,000,000 تومان</td>
                        </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-brand  box-show-btn">ثبت سفارش</button>
                </div>
            </div>
        </div>
    </div>
</main>
  
</template>

<script>
export default {
        name:"Cart",

}
</script>

<style>

</style>