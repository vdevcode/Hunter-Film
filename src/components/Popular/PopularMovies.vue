<template>
  <div class="text-yellow-500 uppercase text-lg font-semibold">
    <h2>Popular Movies</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-8">
      <movies-item
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        :genres="genres"
      />
    </div>
  </div>
</template>

<script>
import MoviesItem from "../Items/MoviesItem.vue";

export default {
  name: "PopularMovies",
  components: {
    MoviesItem,
  },
  data() {
    return {
      movies: [],
      genres: [],
    };
  },
  async mounted() {
    this.fetchGenres();
    try {
      const response = await this.$http.get("/movie/popular");
      this.movies = response.data.results;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async fetchGenres() {
      try {
        const response = await this.$http.get("/genre/movie/list");
        this.genres = response.data.results;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
