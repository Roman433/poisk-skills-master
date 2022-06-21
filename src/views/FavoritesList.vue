<template>
  <div>
    <splashedNavbar />
    <div class="container mx-auto">
      <h1 class="my-10 lg:my-24 text-center text-4xl lg:text-7xl font-bold">Избранное</h1>
      <div class="flex flex-wrap justify-between">
        <img
          class="w-full px-5 lg:px-0 lg:w-three my-3 object-cover rounded-lg"
          v-for="favorite of getFavoritesList"
          :key="favorite.id"
          :src="favorite.urls.regular"
          alt=""
          @click="$router.push({ name: 'singleAPI', params: { id: favorite } })"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import splashedNavbar from "../components/SplashedNavbar.vue";
export default {
  computed: mapGetters(["getFavoritesList"]),
  components: {
    splashedNavbar,
  },
};
</script>
