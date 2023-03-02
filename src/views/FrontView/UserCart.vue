<template>
  <!-- 1. 購物車(確認訂單) -->
  <div class="container">
    <p class="mb-10">購物車(確認訂單)</p>
    <div class="row g-0 ">
      <ul class="steps row row-cols-4 row-cols-md-4 g-0 mb-4">
        <li class=""><small class="ls-3">STEP1</small><span>購物車(確認訂單)</span></li>
        <li class=""><small class="ls-3">STEP1</small><span>建立訂單(填寫資料)</span></li>
        <li class=""><small class="ls-3">STEP2</small><span>建立訂單(確認付款)</span></li>
        <li class=""><small class="ls-3">STEP3</small><span>完成訂單</span></li>
      </ul>
    </div>
  </div>
  <!-- 購物車列表 -->
  <div class="container" v-if="cartsLength > 0">
    <div class="text-start">
      <button v-if="cartsLength > 0" class="btn btn-outline-danger " type="button" @click="deleteAllItem">清空購物車</button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 100px">數量/單位</th>
          <th class="text-end">單價</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cartData.carts">
          <tr v-for="item in cartData.carts" :key="item.id">
            <td> <a href="#" @click.prevent="getProduct(item.product.id)"><img :src="item.product.imageUrl" alt=""
                  class="object-fit d-none d-md-block  rounded-4" style="width:100px ;height:100px"> </a> </td>
            <td>
              {{ item.product.title }}
              <!-- <div class="text-success"> 已套用優惠券 </div> -->
            </td>
            <td>
              <div class="input-group input-group-sm">
                <select name="" id="" class="form-select" v-model="item.qty" @change="updateCartItem(item)">
                  <option :value="i" v-for="i in 20" :key="i + '1234578'">{{ i }}</option>
                </select>
              </div>
            </td>
            <td class="text-end">
              <!-- <small class="text-success">折扣價：</small> -->
              {{ item.total }}
            </td>
            <td class=" text-end">
              <a href="" @click.prevent="deleteItem(item.id)"><i class="bi bi-trash3 text-danger"></i></a>
              <!-- <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item.id)">
                x
              </button> -->
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ cartData.total }}</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ cartData.final_total }}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="container">
    <div class="row ">
      <div class="d-flex justify-content-between">
        <router-link to="/products" class="btn btn-outline-primary px-5">繼續選購</router-link>
        <router-link v-if="cartsLength > 0" to="/checkout" class="btn btn-danger px-5">下一步
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '../../store/UserCartStore'
import { mapActions, mapState } from 'pinia'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
      // cart: {},
      // productId: ''
    }
  },
  methods: {
    getProducts () {
      // this.isLoading = true
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`)
        .then(res => {
          console.log('產品列表:', res.data.products)
          this.products = res.data.products
          // this.isLoading = false
        })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    ...mapActions(cartStore, ['addToCart', 'getCarts', 'updateCartItem', 'deleteItem', 'deleteAllItem', 'createOrder', 'getOrders'])

  },
  computed: {
    ...mapState(cartStore, ['cartData', 'cartsLength'])
  },
  mounted () {
    this.getProducts()
    this.getCarts()
    // this.getOrders();
  }

}
</script>

<style scoped>
.steps li.active {
  background: #414666;
  color: #fff;
}

.steps li {
  background: rgba(237, 235, 234, .6);
  padding: 1rem;
  text-align: center;
  color: #6c757d;
}
</style>
