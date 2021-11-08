<template>
  <div class="slug" v-if="content">
    <div class="bandeau">
      <h1>{{ content.titre }}</h1>
    </div>
    <section v-for="section in content.section" :key="section.id">
      <h2>{{ section.titre }}</h2>
      <p v-html="$md.render(section.description)" />
      <!-- <p v-html="$md.render(section.description)"></p> -->
      <br />
    </section>
    <div>
      <img
        v-for="image in content.images"
        :key="image.id"
        :src="baseUrlApi + image.url"
        :alt="image.alternativeText"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    baseUrlApi() {
      return process.env.BASE_URL_API
    },
  },
  data() {
    return {
      content: null,
    }
  },
  mounted() {
    this.$fetch()
  },
  async fetch() {
    this.content = (
      await this.$http.$get(process.env.BASE_URL_API + '/nos-activites')
    ).find((activite) => activite.URL === this.$route.params.slug)
  },
  // fetchOnServer: false,
  // async asyncData({ params, $http }) {
  //   const content = (
  //     await $http.$get(process.env.BASE_URL_API + '/nos-activites')
  //   ).find((activite) => activite.URL === params.slug)
  //   return { content }
  // },
}
</script>

<style lang="scss" scoped>
.bandeau {
  margin-top: 20px;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  padding: 60px 20px 80px 20px;
  background-color: var(--main);
  h1 {
    margin: 0 auto;
    max-width: 1500px;
    font-size: 40px;
    font-weight: 700;
    line-height: 33px;
  }
  @media screen and (max-width: 767px) {
    padding: 20px;
    h1 {
      font-size: 20px;
    }
  }
}
h2 {
  padding: 30px;
  font-size: 22px;
  font-weight: 700;
}
p {
  padding: 0 60px;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 300;
  line-height: 33px;
}
@media screen and (max-width: 767px) {
  h2 {
    font-size: 14px;
    padding: 10px 10px 0 10px;
  }
  p {
    font-size: 12px;
    padding: 0 10px;
  }
}
</style>
