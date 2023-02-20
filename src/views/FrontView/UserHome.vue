<template>
  <div class="section1 container-fluid g-0">
    <!-- hero banner -->
    <BannerSwiper></BannerSwiper>
  </div>

  <div class="container">
    <div class="row ">
      <div class="col-12 col-md-6 py-5 ">
        <div class="">
          <p class="">清晨一點甜 Sun Sweet Bakery
            甜點店，是一家獨特且美味的甜點店，提供各種經典及創新的甜點，以及咖啡和茶點。我們的手工製作精緻烘焙品，以最新鮮的配料和細膩的製作工藝製作，令您的味蕾得到最完美的享受。邀請您與朋友在清晨一點甜 Sun Sweet
            Bakery 甜點店，享受美味的甜點和舒適的氛圍。</p>
        </div>
      </div>
      <div class="col-12 col-md-6 py-5 ">
        <img class="intro-img"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1676616124986.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aLzNuEn2Ye5MTpzuPJdBjr08L0HZTsDB4CTXKUN9Su59E80t8oQNx6DPG81%2F5ze9iqLgCdXZoH9b5TucnGM7rAx3krWlhBxDfezdiGpxC6eocKVvrFHJPYZ4aQboTA3yFW15cqVaSkKvtRoVu2%2BAWKUod61HxvWWZEQpgsBqqhkGQsfcBjzWzCaApPWfF56%2B4toYOvZ4zeUBaAlG9TIk%2FNu7dzPK50NmhQ9EHaHINJPgd4tcViYJgmlNuZJgrBKG49gCAB0%2BMl2Y8N%2Bi%2F6cgoUP1NBQtUw36afVQTNftUsEKAgg2kdPFHUNTmsjMgIAKjCeHQUBzKZxiJjnyfCi4%2FA%3D%3D"
          alt="">
      </div>
    </div>
  </div>

  <!-- about -->
  <div class="about aboutBanner ">
    <div class="container text-light">
      <!-- <h3 class="py-5 m-0 text-center">About</h3> -->
      <div class="row col-12 col-lg-6 text-center ">
        <div class="">
          <p class="">清晨一點甜 Sun Sweet Bakery</p>
          <p>甜點店，是一家獨特且美味的甜點店，</p>
          <p>提供各種經典及創新的甜點和茶點。</p>
          <p>我們的手工製作精緻烘焙品，</p>
          <p>以最新鮮的配料和細膩的製作工藝製作，</p>
          <p>令您的味蕾得到最完美的享受。</p>
          <p>邀請您與朋友在</p>
          <p>清晨一點甜 SomeSweet/amBakery 甜點店，</p>
          <p>享受美味的甜點和舒適的氛圍。</p>
        </div>

      </div>

      <img
        src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1676616124986.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aLzNuEn2Ye5MTpzuPJdBjr08L0HZTsDB4CTXKUN9Su59E80t8oQNx6DPG81%2F5ze9iqLgCdXZoH9b5TucnGM7rAx3krWlhBxDfezdiGpxC6eocKVvrFHJPYZ4aQboTA3yFW15cqVaSkKvtRoVu2%2BAWKUod61HxvWWZEQpgsBqqhkGQsfcBjzWzCaApPWfF56%2B4toYOvZ4zeUBaAlG9TIk%2FNu7dzPK50NmhQ9EHaHINJPgd4tcViYJgmlNuZJgrBKG49gCAB0%2BMl2Y8N%2Bi%2F6cgoUP1NBQtUw36afVQTNftUsEKAgg2kdPFHUNTmsjMgIAKjCeHQUBzKZxiJjnyfCi4%2FA%3D%3D"
        class="aboutSwiperImg" alt="">
    </div>

  </div>
</template>

<script>
import BannerSwiper from '../../components/UserHome/BannerSwiper.vue'

export default {
  components: {
    BannerSwiper
  }
}
</script>

<style scoped lang="scss">
.intro-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.aboutBanner {
  margin-top: 200px;
  height: 500px;
  background-color: #544c4a;
  position: relative;
}

</style>
