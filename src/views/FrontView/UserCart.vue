<template>
  <!-- 1. 購物車(確認訂單) -->
  <div class="home">
    <PopoverComponent></PopoverComponent>
    <p>cart</p>
  </div>
</template>

<script>
import PopoverComponent from '../../components/PopoverComponent.vue'

export default {
  components: {
    PopoverComponent
  }
}
</script>

<style scoped>
</style>
