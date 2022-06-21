<template>
  <div>
    <splashedNavbar />
    <div class="relative">
      <div
        class="single_page"
        :style="{
          'background-image':
            'url(' + allPhotos[this.$route.params.id - 1].image + ')',
        }"
      ></div>
      <div class="container mx-auto relative z-50">
        <div class="flex pt-11 pb-10 justify-between items-center">
          <div class="flex items-center">
            <img
              width="55"
              height="55"
              class="mr-2.5 border border-white rounded-lg"
              :src="allPhotos[this.$route.params.id - 1].photo"
              alt=""
            />
            <div class="text-white">
              <p class="text-3xl">
                {{ allPhotos[this.$route.params.id - 1].name }}
              </p>
              <p class="text-base">
                {{ allPhotos[this.$route.params.id - 1].username }}
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <i
              class="fa-regular fa-heart text-2xl bg-white py-3.5 px-2.5 rounded-lg"
            ></i>
            <a
              :href="allPhotos[this.$route.params.id - 1].image"
              download
              class="bg-yel py-3.5 px-6 rounded-lg ml-5 text-xl"
              ><i class="fa fa-download pr-4 text-2xl"></i>Download</a
            >
          </div>
        </div>
        <img
          class="w-full"
          :src="allPhotos[this.$route.params.id - 1].image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import splashedNavbar from "../components/SplashedNavbar.vue";
export default {
  name: "SinglePage",
  components: {
    splashedNavbar,
  },
  computed: mapGetters(["allPhotos"]),
  methods: mapActions(["getData"]),
  async mounted() {
    this.getData();
  },
};
</script>
