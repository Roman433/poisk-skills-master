export default {
    state: {
        favorites: []
    },
    getters: {
        getFavoritesList(state) {
            return state.favorites;
        },
        getFavoritesListLength(state) {
            return state.favorites.length;
        }
    },
    mutations: {
        setFav(state, curObj) {
            state.favorites.push(curObj)
        }
    },
    actions: {
        getCurrentObjects({
            commit
        }, curObj) {
            commit('setFav', curObj)
        }
    }
}