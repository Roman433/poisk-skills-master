<template>
  <div>
    <navbar />
    <div class="home">
      <div class="set_search">
        <form action="">
          <div class="container mx-auto py-24 relative w-1/2">
            <input
              class="block mx-auto px-10 py-5 text-black w-full"
              type="text"
              placeholder="Поиск"
            />
            <i
              class="fa fa-magnifying-glass set_button hover:cursor-pointer"
            ></i>
          </div>
        </form>
      </div>
      <div class="container mx-auto my-24">
        <div class="flex flex-wrap justify-between">
          <img
            @click="$router.push({ name: 'single', params: { id: photo.id } })"
            class="w-three my-3 object-cover"
            v-for="photo of allPhotos"
            :key="photo"
            :src="photo.image"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import navbar from "../components/NavbarComp.vue";
export default {
  name: "LocalFetch",
  components: {
    navbar,
  },
  computed: mapGetters(["allPhotos"]),
  methods: mapActions(["getData"]),
  async mounted() {
    this.getData();
  },
};
</script>
