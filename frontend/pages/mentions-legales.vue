<template>
  <div
    id="mentions-legales"
    v-if="content"
    v-html="$md.render(content.contenu)"
  />
</template>

<script>
export default {
  data() {
    return {
      content: null,
    }
  },
  mounted() {
    this.$fetch()
  },
  async fetch() {
    this.content = await this.$http.$get(
      process.env.BASE_URL_API + '/mentions-legales'
    )
  },
  // fetchOnServer: false,
}
</script>

<style lang="scss">
#mentions-legales {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1500px;
  margin: 40px 20px;
  // :nth-child(n) {
  //   margin: 10px 0;
  // }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 40px 0 20px 0;
  }
}
@media screen and (max-width: 1000px) {
  #mentions-legales {
    margin: 40px 10px;
  }
}
</style>
