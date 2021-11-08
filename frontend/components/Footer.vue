<template>
  <footer>
    <nuxt-link to="/mentions-legales">Mentions Légales</nuxt-link>
    <div class="copy">©{{ new Date().getFullYear() }}</div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: var(--footer);

  position: relative;
  &,
  a {
    font-weight: bold;
    color: white;
  }
  .copy {
    position: absolute;
    right: 20px;
  }
}
</style>
