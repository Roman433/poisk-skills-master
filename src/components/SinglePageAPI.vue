<template>
  <div>
    <splashedNavbar />
    <div class="relative px-5 lg:px-0">
      <div
        class="single_page"
        :style="{
          'background-image': 'url(' + curObj.urls.regular + ')',
        }"
      ></div>
      <div class="container mx-auto relative z-50">
        <div class="flex pt-11 pb-10 justify-between items-center">
          <div class="flex items-center">
            <img
              width="55"
              height="55"
              class="mr-2.5 border border-white rounded-lg"
              :src="curObj.urls.regular"
              alt=""
            />
            <div class="text-white">
              <p class="text-lg lg:text-3xl">
                {{ curObj.user.username }}
              </p>
              <p v-if="curObj.user.twitter_username != null" class="text-sm lg:text-base">
                @{{ curObj.user.twitter_username }}
              </p>
              <p
                v-if="curObj.user.instagram_username != null"
                class="text-sm lg:text-base"
              >
                @{{ curObj.user.instagram_username }}
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <i
              @click="getCurrentObjects(curObj)"
              class="fa-regular fa-heart text-2xl bg-white py-3.5 px-2.5 rounded-lg hover:cursor-pointer"
            ></i>
            <a
              :href="curObj.links.download"
              download="photo"
              class="bg-yel py-3.5 px-6 rounded-lg ml-4 lg:ml-5 text-xl flex"
              ><i class="fa fa-download pr-0 lg:pr-4 text-2xl"></i><span class="hidden lg:flex">Download</span></a
            >
          </div>
        </div>
        <img class="w-full" :src="curObj.urls.regular" alt="" />
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
  data() {
    return {
      curObj: this.$route.params.id,
    };
  },
  computed: mapGetters(["getPhotos", "getSearch", "getFullQuery"]),
  methods: mapActions(["getData", "getCurrentObjects"]),
  async mounted() {
    this.getData();
  },
};
</script>
