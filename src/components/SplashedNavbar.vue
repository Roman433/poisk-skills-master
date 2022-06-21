<template>
  <div class="bg-black px-5 lg:px-0">
    <div class="container mx-auto">
      <div class="flex items-center justify-between py-6">
        <router-link to="/">
          <img class="h-11 w-auto" src="../assets/img/logo.png" alt=""
        /></router-link>
        <div class="flex items-center">
          <router-link class="text-white flex items-center" to="/">
            <i class="fa fa-magnifying-glass mr-2.5 text-2xl"></i>
            <p class="text-xl hidden lg:block">Поиск</p>
          </router-link>
          <router-link
            class="text-white flex items-center ml-5 lg:ml-9"
            :to="{ name: 'favorites' }"
          >
            <i class="fa-regular fa-heart mr-2.5 text-2xl"></i>
            <div class="flex items-center"><p class="text-lg hidden lg:block">Избранное </p><p class="text-lg ml-2 w-8 text-center h-8 p-1 bg-white text-black rounded-full">{{ getFavoritesListLength }}</p></div>
          </router-link>
        </div>
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
