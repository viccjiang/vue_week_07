<template>
  <div class="card mb-3 rounded-4 ">
    <swiper :slidesPerView="1" :spaceBetween="30" :loop="true"
    :pagination="{
      clickable: true,
      el: '.swiper-pagination',
    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :modules="modules" class="mySwiper">
      <swiper-slide class="swiper-slide d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center">
          <img src="../../assets/ig.png" class="swiper-slide-img me-5" style="height:50px; width:50px; z-index:1000"
            alt="...">
          <div>
            <p>愛吃鬼的評價</p>
            <p>五顆星</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center">
          <img src="../../assets/ig.png" class="me-5" style="height:50px; width:50px" alt="...">
          <div>
            <p>愛吃鬼的評價</p>
            <p>五顆星</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center">
          <img src="../../assets/ig.png" class="me-5" style="height:50px; width:50px" alt="...">
          <div>
            <p>愛吃鬼的評價</p>
            <p>五顆星</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center">
          <img src="../../assets/ig.png" class="me-5" style="height:50px; width:50px" alt="...">
          <div>
            <p>愛吃鬼的評價</p>
            <p>五顆星</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

  </div>
  <div class="swiper-pagination"></div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default {
  data () {
    return {
      modules: [Pagination, Navigation]
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted () {

  }
}

</script>

<style scoped>
.swiper {
  /* position: relative; */
  max-width: 100%;
  height: 200px;
}

.swiper-slide img {
  /* position: absolute;
  top:-10px;
  left: 10px; */
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: 40px;
  height: 40px;
  margin-top: calc(0px - (var(--swiper-navigation-size)/ 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  background-color: #000;
  /* margin-left: -30px;
    margin-right: -30px; */

}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: swiper-icons;
  font-size: 16px;
  font-weight: bold;
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

/* 將底部 pagination 分頁的 active 狀態改為想要的樣式 */
.swiper-pagination-bullet-active {
  width: 50px;
  border-radius: 8px;
}

/* 讓分頁圓點移至下方 */
.swiper-pagination {
  position: static;
  margin-top: 10px;
}
</style>
