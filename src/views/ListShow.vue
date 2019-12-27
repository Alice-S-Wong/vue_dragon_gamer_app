<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>{{list.user}}'s {{list.list_type}}</h2>
    <div v-for="game in list.games">
      {{game.game}}
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
  methods: {}
};
</script>