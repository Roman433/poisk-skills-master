import axios from 'axios'
export default {
    state: {
        photos: []
    },
    getters: {
        allPhotos(state) {
            return state.photos
        }
    },
    mutations: {
        getData(state, newData) {
            state.photos = newData
        }
    },
    actions: {
        async getData({
            commit
        }) {
            const res = await axios.get("http://localhost:3001/images");
            const newData = res.data;
            commit('getData', newData);
        }
    }
}