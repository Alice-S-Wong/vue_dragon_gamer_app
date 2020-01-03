<template>
  <div class="ReviewNew">
    <h1>{{ message }}</h1>
    <div v-for="error in errors">{{error}}</div>
    <p>Game ID:<input v-model="gameId"></p>
    <p>Rating:<input v-model="rating"></p>
    <p>Review:<input v-model="review"></p>
    <button v-on:click="createReview()">Create Review</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Add Item to List",
      gameId: "",
      rating: "",
      review: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createReview: function() {
      var params = {
        game_id: this.gameId,
        rating: this.rating,
        review: this.review
      };
      axios.post("/api/reviews", params).then(response => {
        this.$router.push(`/games/${this.gameId}`);
      }).catch(error => {
        console.log(error.response);
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>