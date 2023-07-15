<template>
  <div id="app" class="bg-slate-900 h-full w-full">
    <div
      class="flex justify-between items-center border-b border-gray-500 w-full px-10"
    >
      <navbar />
      <search-bar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Header/NavbarApp.vue";
import SearchBar from "@/components/Header/SearchBar.vue";

export default {
  components: {
    Navbar,
    SearchBar,
  },
};
</script>

<style></style>
