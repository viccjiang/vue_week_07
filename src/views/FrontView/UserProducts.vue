<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="product card h-100">
          <img :src="product.imageUrl" class="card-img-top object-fit" :alt="product.title">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text text-truncate">{{ product.content }}</p>
          </div>
          <div class="card-footer bg-white">
            <router-link class="ben btn-primary" :to="`/product/${product.id}`">查看更多</router-link>
          </div>
        </div>
      </div>

    </div>
    <!-- 分頁元件 -->
  <PaginationComponent class="mt-5 mb-5" :pages="pagination" @emit-pages="getProducts"></PaginationComponent>
  <!-- 分頁元件 -->
  </div>

</template>

<script>
import PaginationComponent from '../../components/PaginationComponent.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  components: {
    PaginationComponent
  },
  data () {
    return {
      products: [],
      pagination: {}
    }
  },
  methods: {
    // api 有 page 的
    getProducts (page = 1) {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/products?page=${page}`).then((res) => {
        // 先把 products pagination資料存起來
        const { products, pagination } = res.data
        this.products = products
        this.pagination = pagination
        console.log(this.products, this.pagination)
      })
    }
  },
  mounted () {
    // 進頁面先抓產品資料
    this.getProducts()
  }
}
</script>

<style scoped lang="scss">
.product .card-img-top {
  width: 100%;
  height: 200px;
}
.object-fit {
  object-fit: cover
}
</style>
