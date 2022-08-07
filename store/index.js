export const state = () => ({
  app: {
    title: '',
    theme: {
      dark: false,
    },
  },
})

export const getters = {
  appTitle(state) {
    return state.app.title
  },
  themeDark(state) {
    return state.app.theme.dark
  },
}

export const mutations = {
  setTitle(state, value) {
    state.app.title = value
  },
  setThemeDark(state, value) {
    state.app.theme.dark = value
  },
}

export const actions = {
  setTitle({ commit }, title) {
    commit('setTitle', title)
  },
  setThemeDark({ commit }, value) {
    commit('setThemeDark', value)
  },
}
