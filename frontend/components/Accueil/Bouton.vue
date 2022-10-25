<template>
  <div v-if="data.elements">
    <button
      v-for="button in data.elements"
      :key="button.id"
      @click="$router.push('/' + button.activite.URL)"
      v-html="$md.render(button.titre)"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  color: black;
}
div {
  margin: 100px auto;
  width: 100vw;
  max-width: 1500px;
  display: flex;
  justify-content: space-evenly;
  button {
    color: black;
    font-family: 'Letter Gothic Std';
    font-size: 22px;
    font-style: normal;
    font-weight: 700;

    border: none;
    border-radius: 10px;
    padding: 4px 60px;

    background-color: var(--main);
    transition: background-color 200ms;

    cursor: pointer;
    &:hover {
      background-color: var(--main-hover);
    }
  }
  @media screen and (max-width: 1023px) {
    margin: 40px auto;
    flex-direction: column;
    button {
      padding: 4px auto;
      width: 280px;
      font-size: 18px;
      margin: 0 auto;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
