<template>
  <div>
    <navbar />
    <div class="home">
      <div class="set_search">
        <form action="">
          <div class="container mx-auto py-24 relative w-full lg:w-1/2 px-5 lg:px-0">
            <input
              class="block mx-auto px-10 py-5 text-black w-full"
              type="text"
              placeholder="Поиск"
              v-model="search"
              @keyup="enterSearch()"
            />
            <i
              class="fa fa-magnifying-glass set_button hover:cursor-pointer"
            ></i>
          </div>
        </form>
      </div>
      <div v-if="search != ''" class="container mx-auto my-24">
        <div class="flex flex-wrap justify-between">
          <img
            class="w-full px-5 lg:px-0 lg:w-three my-3 object-cover rounded-lg"
            v-for="photo of getPhotos.results"
            :key="photo.id"
            :src="photo.urls.regular"
            alt=""
            @click="$router.push({ name: 'singleAPI', params: { id: photo } })"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/NavbarComp.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomeView",
  components: {
    navbar,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: mapGetters(["getPhotos", "getSearch", "getFullQuery"]),
  methods: {
    ...mapActions(["getData", "getSearchSymbols"]),
    enterSearch() {
      this.getSearchSymbols(this.search);
      this.getData();
    },
  },
};
</script>
