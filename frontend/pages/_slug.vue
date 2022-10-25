<template>
  <div class="slug" v-if="content.titre">
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
import jeunes from '@/assets/data/jeunes.json'
import constellationFamiliale from '@/assets/data/constellation-familiale.json'
import couple from '@/assets/data/couple.json'
import deuil from '@/assets/data/deuil.json'
const content = {
  jeunes,
  'constellation-familiale': constellationFamiliale,
  couple,
  deuil,
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export default {
  computed: {
    baseUrlApi() {
      return process.env.BASE_URL_API
    },
  },
  data() {
    return {
      content: content[this.$route.params.slug],
      titre: capitalizeFirstLetter(this.$route.params.slug).replaceAll(
        '-',
        ' '
      ),
    }
  },
  head() {
    return {
      title: 'Les Lanternes Thérapie | ' + this.titre,
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
