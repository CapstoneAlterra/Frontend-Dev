export const state = () => ({
    token: null,
  })
  
  export const mutations = {
    loginToken(state, token) {
        state.token = token
        },
    }
  export const actions = {
    fetchLoginToken(store, {email, password}){
        axios
            .get('https://gym.stack.co.id/member/auth/login', {email, password})
            .then((response) => {store.commit('loginToken', response.result.token);
          })
            .catch((error) => { console.log(error)
          })
      },
    }