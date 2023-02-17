<template>
  <FrontNavbarComponent></FrontNavbarComponent>
  <router-view></router-view>
</template>

<script>
import FrontNavbarComponent from '../../components/FrontNavbarComponent.vue'
import { RouterView } from 'vue-router'

// 來設置 Collapse 元件
import * as bootstrap from 'bootstrap'
let collapseList = null

export default {
  data () {
    return {

    }
  },
  components: {
    // HelloWorld,
    RouterView,
    FrontNavbarComponent
  },
  mounted () {
    // 透過 router beforeEach 來設置 Collapse 元件
    collapseList = new bootstrap.Collapse(document.getElementById('navbarSupportedContent'), { toggle: false })
    this.$router.beforeEach((to, from) => {
      collapseList.hide()
    })
  }
}
</script>

<style scoped lang="scss">

</style>
