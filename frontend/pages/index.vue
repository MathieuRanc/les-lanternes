<template>
  <div v-if="content.phrase_debut">
    <div class="debut">
      <p v-html="$md.render(content.phrase_debut)" />
    </div>
    <img v-if="url" :src="url" alt="cover" />
    <div v-for="element in content.page" :key="element.id">
      <div v-if="element.__component === 'accueil.boutons'">
        <AccueilBouton :data="element" />
      </div>
      <div v-else-if="element.__component === 'global.content'">
        <GlobalContent :data="element" />
      </div>
    </div>
  </div>
</template>

<script>
import content from '@/assets/data/index.json'
export default {
  data() {
    return {
      content,
    }
  },
  head() {
    return {
      // title: this.content ? this.content.SEO.title : '' || '',
      title: 'Les Lanternes Thérapie Bourges',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.content ? this.content.SEO.description : '' || '',
        },
      ],
    }
  },
  mounted() {
    this.$fetch()
  },
  async fetch() {
    this.content = await fetch(process.env.BASE_URL_API + '/accueil').then(
      (res) => res.json()
    )
  },
  // fetchOnServer: false,
  computed: {
    url() {
      return process.env.BASE_URL_API + this.content.image_principale.url
    },
  },

  // async asyncData({ $http }) {
  //   const content = await $http.$get(process.env.BASE_URL_API + '/accueil')
  //   return { content }
  // },
}
</script>

<style lang="scss" scoped>
.debut {
  max-width: 1200px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  padding: 60px 20px 20px 20px;
  p {
    text-align: justify;
    max-width: 50%;
  }
}
@media screen and (max-width: 1240px) {
  .debut {
    margin-top: 40px;
    max-width: 800px;
    position: relative;
    p {
      max-width: none;
    }
  }
}
@media screen and (min-width: 1239px) {
  img {
    margin-top: 100px;
  }
}
img {
  width: 100%;
  max-width: 1500px;
  padding: 0 8%;
  margin-bottom: -10%;
}
</style>
