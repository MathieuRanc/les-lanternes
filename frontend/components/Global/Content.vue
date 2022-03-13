<template>
  <div class="componentContent" v-html="$md.render(data.texte)" />
</template>

<script>
export default {
  name:'content',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.componentContent {
  text-align: justify;
  margin: 100px auto;
  max-width: 600px;
  line-height: 26px;
  padding: 10px;
  p {
    font-size: 14px;
  }
  h4 {
    margin-top: 40px;
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
