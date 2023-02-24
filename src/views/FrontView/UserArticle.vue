<template>
  <div>
    <img :src="article.imageUrl" alt="">
    <!-- <p>{{ article.content }}</p> -->
    <div v-html="article.content"></div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      article: []
    }
  },
  methods: {
    getArticle () {
      const id = this.$route.params.id
      console.log(id)
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/article/${id}`)
        .then(res => {
          console.log(res.data)
          this.article = res.data.article
        })
    }
  },
  mounted () {
    this.getArticle()
    console.log(this.$route.params.id)
  }
}
</script>
