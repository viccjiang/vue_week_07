<template>
  <div class="home">
    產品細節頁面
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  methods: {
    getProduct () {
      const id = this.$route.params.id
      console.log(id)
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`)
        .then(res => {
          console.log(res.data)
        })
    }
  },
  mounted () {
    this.getProduct()
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
