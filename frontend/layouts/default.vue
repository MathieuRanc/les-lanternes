<template>
  <div v-if="$store.state.navigation" id="App">
    <div class="page">
      <Navbar />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$fetch()
  },
  async fetch() {
    const navigation = await fetch(
      process.env.BASE_URL_API + '/navigation'
    ).then((res) => res.json())
    this.$store.commit('setNavigation', navigation)
  },
  // fetchOnServer: false,
}
</script>

<style lang="scss">
a {
  color: black;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 200ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
html {
  font-family: 'Letter Gothic Std', 'Avenir', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  max-width: 100vw;
  box-sizing: border-box;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}

#App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.page {
  position: relative;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
</style>
