<template>
  <FrontNavbarComponent></FrontNavbarComponent>
  <router-view></router-view>
</template>

<script>
import FrontNavbarComponent from '../../components/FrontNavbarComponent.vue'
import { RouterView } from 'vue-router'

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

  }
}
</script>

<style scoped lang="scss">

</style>
