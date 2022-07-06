import axios from 'axios'

export const state = () => ({
    admins: [],

})

export const mutations = {
    setList(state, param) {
        state.admins = param;
    }
}

export const actions = {
    fetchList(store) {
        axios.get('admin/list').then((response) => {
            store.commit("setList", response.data.results)
        })
    },
}