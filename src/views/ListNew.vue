<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="error in errors">{{error}}</div>
    <p>List Type: <select v-model="listType">
      <option disabled value="">Please select one</option>
      <option>played</option>
      <option>favorites</option>
      <option>wishlist</option>
    </select></p>
    <p>Visibility: <select v-model="visibility">
      <option disabled value="">Please select one</option>
      <option>public</option>
      <option>private</option>
    </select></p>
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
      visibility: "",
      listType: "",
      errors: []
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