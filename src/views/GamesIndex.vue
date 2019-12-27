<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="game in games">
      <h2>{{game.title}}</h2>
      <p>ID: {{game.id}}</p>
      <p>Description: {{game.description}}</p>
      <p>Release Year: {{game.release_year}}</p>
      <p>Cumulative Rating: {{game.cumulative_rating}}</p>
      <router-link v-bind:to="`/games/${game.id}`">See More Info</router-link>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "All Games",
      games: []
    };
  },
  created: function() {
    axios.get("/api/games").then(response => {
      this.games = response.data;
    });
  },
  methods: {}
};
</script>