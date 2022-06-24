export const state = () => ({
  token: null,
})

export const mutations = {
  loginToken(state, token) {
      state.token = token
      },
  }
