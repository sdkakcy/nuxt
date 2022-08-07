export const state = () => ({
  app: {
    title: '',
  },
})

export const getters = {
  appTitle(state) {
    return state.app.title
  },
}

export const mutations = {
  setTitle(state, value) {
    state.app.title = value
  },
}

export const actions = {
  setTitle({ commit }, title) {
    commit('setTitle', title)
  },
}
