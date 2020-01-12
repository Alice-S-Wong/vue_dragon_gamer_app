<template>
  <div class="home">

    <section class="wrapper style1">
          <div class="container">
            <div class="row" v-for="game in games">
              <section class="col-6 col-12-narrower">
                <div class="box post">
                  <a href="#" class="image left"><img src="images/pic01.jpg" alt="" /></a>
                  <div class="inner">
                    <h3>{{game.title}}</h3>
                    <p>{{game.id}}</p>
                    <p>{{game.description}}</p>
                    <p>Release Year: {{game.release_year}}</p>
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