import axios from 'axios' // 使用 pinia 只能用 axios，不能用 this 呼叫
import { defineStore } from 'pinia'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default defineStore('cart', {
  state: () => {
    return {
      cartData: { },
      cartsLength: 0,
      status: {
        loadingItem: '' // 對應品項 id
      }
    }
  },
  actions: {
    getCarts () {
      axios
        .get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
          this.cartsLength = res.data.data.carts.length // 購物車 icon 判斷
          console.log(this.cartData, this.cartsLength)
        })
    },
    addToCart (id, qty = 1) {
      // 當沒有傳入該參數時，會使用預設值
      // this.status.loadingItem = id // 加入購物車之後 spinner 開啟
      const cart = {
        product_id: id,
        qty
      }
      console.log(id, qty)
      axios.post(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`, { data: cart })
        .then(res => {
          // this.status.loadingItem = '' // 加入購物車之後 spinner 關掉
          console.log('加入購物車', res.data)
          this.getCarts()
        })
    }

  }

})
