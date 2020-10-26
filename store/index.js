export const state = () => ({
  status: null
})
export const mutations = {
  SetStatus(state, payload) {
    state.status = payload
  }
}
export const getters = {
  status: (state) => state.status
}
export const actions = {
  async create({ commit }, payload) {
    try {
      const create = await this.$axios.$post('/api/create', payload)
      commit('SetStatus', create)
    } catch (e) {
      commit('SetStatus', e)
      throw e
    }
  },
  async login({ commit }, payload) {
    try {
      const log = await this.$axios.$post('/api/login', payload)
      commit('SetStatus', log)
    } catch (e) {
      commit('SetStatus', e)
      throw e
    }
  },
  async verefy({ commit }, payload) {
    try {
      return await this.$axios.$post('/api/verefy', payload)
    } catch (e) {}
  }
}
