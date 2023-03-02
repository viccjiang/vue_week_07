<template>
  <div class="container">
    <!-- 3. 確認訂單(付款) -->
    <div v-for="item in order.products" :key="item.id">
    訂單內容在這裡 : {{ item.product.title }}
    </div>

  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: ''
    }
  },
  methods: {
    getOrder () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url).then((res) => {
        console.log(res)
        if (res.data.success) {
          this.order = res.data.order
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}

</script>
