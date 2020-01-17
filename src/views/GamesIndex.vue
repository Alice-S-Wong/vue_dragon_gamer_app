<template>
  <div class="home">

    <section class="wrapper style1">
          <div class="container">
            <p>Search for games:<input type="text" v-model="searchTerm"></p>
            <div class="row" v-for="game in filterBy(games, searchTerm, 'title')">
              <section class="col-12 col-12-narrower">
                <div class="box post">
                  <a href="#" class="image left"><img v-bind:src="game.image_url" alt="" /></a>
                  <div class="inner">
                    <h3>{{game.title}}</h3>
                    <p>{{game.id}}</p>
                    <p>{{game.description}}</p>
                    <p>Cumulative Rating: {{game.cumulative_rating}}</p>
                    <router-link v-bind:to="`/games/${game.id}`">See More Info</router-link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from 'vue2-filters';
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "All Games",
      games: [],
      searchTerm: ""
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