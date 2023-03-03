<template>
    <div>
    <!-- 4. 完成訂單 -->
    <p>完成訂單</p>
  </div>
  <!-- 訂單表格 -->
  <div class="bg-light pt-5 pb-7 mt-5">
    <div class="container">
     此為您的訂單編號 {{ orderId }}
    </div>
  </div>
</template>

<script>
// import cartStore from '../../store/UserCartStore'
// import { mapActions, mapState } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: ''
      // cart: []
    }
  },
  methods: {
    getOrder () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order
          console.log(this.order)
        }
      })
    },
    // getCarts () {
    //   this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`)
    //     .then(res => {
    //       this.cart = res.data.data
    //       console.log('購物車:', this.cart)
    //     })
    // },
    payOrder () {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.order.is_paid = true
          this.$router.push('/order_completed')
          this.getOrder()
          // this.getCarts()
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.query.id
    console.log(this.orderId)
    this.getOrder()
  }
}

</script>
