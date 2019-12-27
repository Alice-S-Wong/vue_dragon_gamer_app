<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>List Type:<input v-model="listType"></p>
    <p>List Type:<input v-model="visibility"></p>
    <button v-on:click="createList()">Create List</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Create a List",
      listType: "",
      visibility: ""
    };
  },
  created: function() {},
  methods: {
    createList: function() {
      var params = {
        list_type: this.listType,
        visibility: this.visibility
      };
      axios.post("/api/lists", params).then(response => {
        this.$router.push("/lists");
      }).catch(error => {
        console.log(error.response);
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>