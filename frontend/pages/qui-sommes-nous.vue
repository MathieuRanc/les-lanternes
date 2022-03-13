<template>
  <div class="content" v-if="content.titre">
    <h1>{{ content.titre }}</h1>
    <div class="row">
      <div class="personne" v-html="$md.render(content.personne_1)" />
      <div class="citations">
        <img :src="url" :alt="content.image.alternativeText" />
        <figure>
          <blockquote :cite="content.citation.source">
            <p>
              {{ content.citation.texte }}
            </p>
          </blockquote>
          <figcaption>{{ content.citation.auteur }}</figcaption>
        </figure>
      </div>
      <div class="personne" v-html="$md.render(content.personne_2)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        SEO: {
          title: null,
          description: null,
        },
      },
    }
  },
  head() {
    return {
      // title: this.content ? this.content.SEO.title : '' || '',
      title: 'Qui sommes nous ?',
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
  computed: {
    url() {
      return process.env.BASE_URL_API + this.content.image.url
    },
  },
  async fetch() {
    this.content = await this.$http.$get(
      process.env.BASE_URL_API + '/qui-sommes-nous'
    )
  },
  // fetchOnServer: false,
  // async asyncData({ $http }) {
  //   const content = await $http.$get(
  //     process.env.BASE_URL_API + '/qui-sommes-nous'
  //   )
  //   return { content }
  // },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  border-radius: 10px;
  padding: 10px 80px;
  margin: 0 auto;

  background-color: var(--main);
  transition: background-color 200ms;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-top: 20px;
  }
}
.citations {
  display: flex;
  flex-direction: column;
  // height: 100%;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    justify-content: start;
  }
  img {
    width: 100%;
    // @media screen and (min-width: 768px) {
    //   height: 60%;
    //   max-height: 300px;
    // }
    object-fit: cover;
  }
  figure {
    // max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    @media screen and (max-width: 767px) {
      font-size: 10px;
    }
    p {
      text-align: center;
      font-style: italic;
    }
    figcaption {
      align-self: flex-end;
      margin-top: 10px;
    }
  }
}
.row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 40px;
  gap: 30px;
  @media screen and (max-width: 767px) {
    padding: 10px;
    gap: 4px;
  }
}
</style>

<style lang="scss">
.personne {
  overflow: hidden;
  p {
    strong {
      font-weight: normal;
      font-size: 18px;
      color: var(--footer);
      font-weight: bold;
    }
    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 28px;
    // text-align: justify;
    @media screen and (max-width: 767px) {
      font-size: 10px;
      line-height: 14px;
      strong {
        font-size: 12px;
      }
    }
  }
}
</style>
