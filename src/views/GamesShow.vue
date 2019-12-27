<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>{{game.title}}</h2>
    <p>ID: {{game.id}}</p>
    <p>Description: {{game.description}}</p>
    <p>Release Year: {{game.release_year}}</p>
    <p>Cumulative Rating: {{game.cumulative_rating}}</p>
    <p>Genres:</p>
    <div v-for="genre in game.genre">
      {{genre.genre}}
    </div>
    <p>Platforms:</p>
    <div v-for="platform in game.platform">
      {{platform.platform}}
    </div>
    <p>Reviews:</p>
    <div v-for="review in game.review">
      <p>User: {{review.user}}</p>
      <p>Rating: {{review.rating}}</p>
      <p>{{review.review}}</p>
      <br>
    </div>
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