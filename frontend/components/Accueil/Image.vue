<template>
  <img v-if="url" :src="url" alt="cover" />
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    url() {
      return process.env.BASE_URL_API + this.data.image.url
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 1500px;
  max-height: 100vh;
  object-fit: contain;
  margin: -5% 0 -20% 0;
  z-index: -1;
}
</style>
