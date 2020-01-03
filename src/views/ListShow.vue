<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>{{list.user}}'s {{list.list_type}}</h2>
    <div v-for="game in list.games">
      {{game.game}} <button v-on:click="destroyItem(game)">Remove from List</button>
    </div>
    <br>
    <router-link to="/lists">Return to list index</router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "View List",
      list: {}
    };
  },
  created: function() {
    axios.get(`/api/lists/${this.$route.params.id}`).then(response => {
      this.list = response.data;
    });
  },
  methods: {
    destroyItem: function(game) {
      axios.delete(`/api/list_items/${game.id}`).then(response => {
      });
      var index = this.list.games.indexOf(game);
      this.list.games.splice(index, 1);    
    }
  }
};
</script>