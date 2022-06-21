<template>
  <div class="bg-black px-5 lg:px-0">
    <div class="container mx-auto">
      <div class="flex items-center justify-between py-5 lg:py-9">
        <router-link to="/">
          <img class="h-8 lg:h-20" src="../assets/img/logo.png" alt=""
        /></router-link>
        <router-link
          class="text-white flex items-center"
          :to="{ name: 'favorites' }"
        >
          <i class="fa-regular fa-heart mr-2.5 text-2xl"></i>
          <div class="flex items-center"><p class="text-lg hidden lg:block">Избранное </p><p class="text-lg ml-2 w-8 text-center h-8 p-1 bg-white text-black rounded-full">{{ getFavoritesListLength }}</p></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "NavbarComp",
  computed: mapGetters(['getFavoritesListLength'])
};
</script>
