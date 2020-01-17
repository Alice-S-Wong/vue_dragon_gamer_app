<template>
  <div class="home">
    <section class="wrapper style1">
          <div class="container">
            <div class="row">
              <section class="col-12 col-12-narrower">
                <div class="box post">
                  <a href="#" class="image left"><img v-bind:src="game.image_url" alt="" /></a>
                  <div class="inner">
                    <h3>{{game.title}}</h3>
                    <p>{{game.description}}</p>
                    <p>Cumulative Rating: {{game.cumulative_rating}}</p>
                    <p>Genres:</p>
                    <div v-for="genre in game.genre">
                      {{genre.genre}}
                    </div>
                    <br>
                    <p>Platforms:</p>
                    <div v-for="platform in game.platform">
                      {{platform.platform}}
                    </div>
                    <p>Release Dates:</p>
                    <div v-for="date in game.release_dates">
                      {{date.date}}
                    </div>
                    <router-link to="/games">Return to Games Index</router-link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section class="wrapper style1">
          <div class="container">
            <div class="row" v-for="review in game.review">
              <section class="col-6 col-12-narrower">
                <div class="box post">
                  <a href="#" class="image left"><img src="images/pic01.jpg" alt="" /></a>
                  <div class="inner">
                    <h3>Review</h3>
                    <p>User: {{review.user}}</p>
                    <p>Rating: {{review.rating}}</p>
                    <p>{{review.review}}</p>
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