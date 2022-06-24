
    export const state = () => ({
      users: [],
    })
    
    export const mutations = {
      setUser(state, playload) {
          state.users = playload;
        },
      }
    export const actions = {
      fetchUser(store){
          axios
              .get(`https://gym.stack.co.id/member`)
              .then((response) => {store.commit('setUser', response);
              console.log(response)
            })
              .catch((error) => { console.log(error)
            })
        },
      }