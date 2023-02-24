<template >
  <div>
    {{ articles }}
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/articles`)
        .then(res => {
          console.log('文章', res)
          this.articles = res.data.articles
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>
