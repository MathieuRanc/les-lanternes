<template>
  <div class="content" v-if="content.champ">
    <header>
      <!-- {{ content.image_principale }} -->
      <!-- <img
        :src="baseUrlApi + content.image_principale.url"
        :alt="content.image_principale.alternativeText"
      /> -->
      <h1>Contact</h1>
    </header>
    <div class="champs">
      <section v-for="champ in content.champ" :key="champ.id">
        <h3>{{ champ.titre }}</h3>
        <span v-if="champ.type_de_champ === 'texte'">
          {{ champ.valeur }}
        </span>
        <a
          :href="'mailto:' + champ.valeur"
          v-else-if="champ.type_de_champ === 'email'"
        >
          {{ champ.valeur }}
        </a>
        <a
          :href="'tel:' + champ.valeur"
          v-else-if="champ.type_de_champ === 'telephone'"
        >
          {{ champ.valeur }}
        </a>
      </section>
    </div>
    <div class="map">
      <l-map :zoom="16" :center="content.google_map['lat-lng']">
        <!-- url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" -->
        <!-- url="https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png" -->
        <l-tile-layer
          url="https://stamen-tiles-b.a.ssl.fastly.net/toner/{z}/{x}/{y}@2x.png"
          :attribution="attribution"
        ></l-tile-layer>
        <l-marker :lat-lng="content.google_map['lat-lng']">
          <l-icon
            icon-url="/icon_map.png"
            :icon-size="[44, 66]"
            :icon-anchor="[22, 66]"
          ></l-icon>
        </l-marker>
      </l-map>
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
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> —Map data ©<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  },
  head() {
    return {
      title: 'Contact',
      // title: this.content ? this.content.SEO.title : '' || '',
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
    baseUrlApi() {
      return process.env.BASE_URL_API
    },
  },
  async fetch() {
    this.content = await this.$http.$get(process.env.BASE_URL_API + '/contact')
  },
  // fetchOnServer: false,
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}
header {
  background-color: #d7c9c1;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  img {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
  }
  h1 {
    font-weight: 300;
  }
  @media screen and (max-width: 767px) {
    margin-top: 0;
    img {
      object-fit: cover;
      max-height: 100px;
      min-width: 100vw;
    }
    h1 {
      font-size: 20px;
    }
  }
}
.champs {
  margin: 40px auto;
  section {
    text-align: center;
    h3,
    span,
    a {
      font-family: 'Open Sans';
      font-size: 18px;
      font-weight: 300;
      line-height: 24px;
      margin: 0 auto 0 auto;
    }
    h3 {
      margin: 40px 0 0 0;
      // font-weight: bold;
      font-size: 14px;
      color: var(--footer);
      // text-align: left;
      // margin-left: -40px;
    }
  }
  @media screen and (max-width: 767px) {
    margin: 10px auto;
    section {
      h3,
      span,
      a {
        font-size: 14px;
      }
      h3 {
        margin: 10px 0 0 0;
        margin-left: -10px;
      }
    }
  }
}
.map {
  width: 100vw;
  height: 350px;
  z-index: 1;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
