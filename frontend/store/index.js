export const state = () => ({
  navigation: null,
})

export const mutations = {
  setNavigation(state, navigation) {
    state.navigation = navigation
  },
}
