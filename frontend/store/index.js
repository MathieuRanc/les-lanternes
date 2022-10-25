import navigation from '@/assets/data/navigation.json';

export const state = () => ({
  navigation,
})

export const mutations = {
  setNavigation(state, navigation) {
    state.navigation = navigation
  },
}
