<template>
  <div class="container mx-auto">
    <div class="px-10 mt-5 mx-5">
      <popular-movies />
    </div>
  </div>
</template>

<script>
import PopularMovies from "@/components/Popular/PopularMovies.vue";

export default {
  name: "HomeView",
  components: {
    PopularMovies,
  },
};
</script>
