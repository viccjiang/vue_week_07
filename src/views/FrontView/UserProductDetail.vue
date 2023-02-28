<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <img
          class="rounded-0 w-100"
          :src="productImg"
          :alt="product.title"
          style="
            height: 400px;
            background-size: cover;
            background-position: center center;
            object-fit: cover;
          "
        />
        <div class="row">
          <div class="col-4">
              <img
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center center;
                  object-fit: cover;
                "
                class="w-100 p-0 rounded-0 mt-2"
                :src="product.imageUrl"
                alt="產品"
                @click="changeImg(product.imageUrl)"
              />
            </div>
            <div
              class="col-4"
              v-for="(img, key) in product.imagesUrl"
              :key="`圖_${key}`"
            >
              <img
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center center;
                  object-fit: cover;
                "
                class="w-100 p-0 rounded-0 mt-2"
                :src="img"
                :alt="`圖_${key}`"
                @click="changeImg(img)"
              />
            </div>
        </div>
      </div>
      <div class="col-12 col-md-6">右邊</div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: [], // 單一產品資訊
      id: '', // 單一產品的 id
      productImg: ''
    }
  },
  methods: {
    getProduct () {
      // $route 物件取值
      // $router 方法
      const { id } = this.$route.params
      console.log(id)
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`)
        .then(res => {
          console.log(res.data)
          const { product } = res.data
          this.product = product
          this.productImg = this.product.imageUrl
          console.log(this.product, this.productImg)
        })
    },
    changeImg (img) {
      this.productImg = img
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getProduct()
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped></style>
