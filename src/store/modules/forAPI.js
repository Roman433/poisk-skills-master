import axios from 'axios'
export default {
    state: {
        photos: null,
        search: "",
        accessKey: "UxQcyiv7djwaIznmB6G73bYjldVCcICcUT4HZpscGcI",
        url: "https://api.unsplash.com/search/photos",
        fullQuery: ""
    },
    getters: {
        getPhotos(state) {
            return state.photos;
        },
        getSearch(state) {
            return state.search;
        },
        getFullQuery(state) {
            return state.fullQuery;
        }
    },
    mutations: {
        setFullQuery(state) {
            state.fullQuery = state.url + "?query=${" + state.search + "}&client_id=" + state.accessKey;
        },
        setData(state, newData) {
            state.photos = newData
        },
        changeInp(state, search) {
            state.search = search;
        }
    },
    actions: {
        async getData({
            commit,
            state
        }) {
            const res = await axios.get(state.fullQuery);
            var newProduct = "";
            newProduct = res.data;
            commit('setData', newProduct);
        },
        getSearchSymbols({
            commit
        }, search) {
            commit('changeInp', search);
            commit('setFullQuery');
        }
    }
}