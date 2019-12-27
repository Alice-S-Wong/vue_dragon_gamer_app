<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="list in lists">
      <h2>{{list.user}}'s {{list.list_type}}</h2>
      <div v-for="game in list.games">
        {{game.game}}
      </div>
      <br>
      <router-link v-bind:to="`/lists/${list.id}`">View List</router-link>
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
      message: "All Public Lists",
      lists: []
    };
  },
  created: function() {
    axios.get("/api/lists").then(response => {
      this.lists = response.data;
    });
  },
  methods: {}
};
</script>