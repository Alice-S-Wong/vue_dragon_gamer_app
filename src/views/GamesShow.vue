<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>{{game.title}}</h2>
    <p>ID: {{game.id}}</p>
    <p>Description: {{game.description}}</p>
    <p>Release Year: {{game.release_year}}</p>
    <p>Cumulative Rating: {{game.cumulative_rating}}</p>
    <p>Genre: {{game.genre}}</p>
    <p>Platform: {{game.platform}}</p>
    <p>Review: {{game.review}}</p>
    <router-link to="/games">Return to Games Index</router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Game Info",
      game: {}
    };
  },
  created: function() {
    axios.get(`/api/games/${this.$route.params.id}`).then(response => {
      this.game = response.data;
    });
  },
  methods: {}
};
</script>