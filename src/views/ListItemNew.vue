<template>
  <div class="ListItemNew">
    <h1>{{ message }}</h1>
    <div v-for="error in errors">{{error}}</div>
    <p>List Type: <select v-model="listType">
      <option disabled value="">Please select one</option>
      <option>played</option>
      <option>favorites</option>
      <option>wishlist</option>
    </select></p>
    <p>Game ID:<select v-model="gameId">
      <option v-for="game in games" v-bind:value="game.id">{{game.title}}</option>
    </select></p>
    <button v-on:click="addItemToList()">Add Item to List</button>
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
      listType: "",
      gameId: "",
      games: [],
      errors: []
    };
  },
  created: function() {
    axios.get("/api/games/").then(response => {
      this.games = response.data;
    });
  },
  methods: {
    addItemToList: function() {
      var params = {
        list_type: this.listType,
        game_id: this.gameId
      };
      axios.post("/api/list_items", params).then(response => {
        this.$router.push("/lists");
      }).catch(error => {
        console.log(error.response);
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>