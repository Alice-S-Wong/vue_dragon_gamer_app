<template>
  <div id="app">
    <div id="header">

          <!-- Logo -->
            <h1><a href="index.html" id="logo">Dragon Gamer</a></h1>
            <p>{{username_display}}</p>

          <!-- Nav -->
            <nav id="nav">
              <ul>
                <!-- <li class="current"><a href="index.html">Home</a></li>
                <li>
                  <a href="#">User Tools</a>
                  <ul>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/logout">Logout</a></li>
                    <li>
                      <a href="#">Submenu</a>
                      <ul>
                        <li><a href="#">Lorem dolor</a></li>
                        <li><a href="#">Phasellus magna</a></li>
                        <li><a href="#">Magna phasellus</a></li>
                        <li><a href="#">Etiam nisl</a></li>
                        <li><a href="#">Veroeros feugiat</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Veroeros feugiat</a></li>
                  </ul>
                </li> -->
                <li><a href="/games">Games Index</a></li>
                <li><a href="/lists">Lists Index</a></li>
                <li><a href="/lists_private">Private Lists</a></li>
                <li><a href="/lists/new">Make New List</a></li>
                <li><a href="/list_items/new">Add Item to List</a></li>
                <li><a href="/reviews/new">Write a Review</a></li>
                <li><a href="/signup">Signup</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/logout">Logout</a></li>
                <li><a href="/iv_calculator">Pokemon IV Calculator</a></li>
                <li><a href="/fe_stat_calculator">Fire Emblem Stat Calculator</a></li>
                <li><a href="/fe_stat_simulator">Fire Emblem Stat Simulator</a></li>
                <li><a href="/fea_avatar_creator">FE Awakening Avatar Creator</a></li>
              </ul>
            </nav>

        </div>
    <router-view/>
    <div id="footer">
          <!-- <div class="container">
            <div class="row">
              <section class="col-3 col-6-narrower col-12-mobilep">
                <h3>Links to Stuff</h3>
                <ul class="links">
                  <li><a href="#">The Adventure of Link</a></li>
                  <li><a href="#">Link's Crossbow Training</a></li>
                  <li><a href="#">Link's Awakening</a></li>
                </ul>
              </section>
              <section class="col-3 col-6-narrower col-12-mobilep">
                <h3>More Links to Stuff</h3>
                <ul class="links">
                  <li><a href="#">A Link Between Worlds</a></li>
                  <li><a href="#">A Link to the Past</a></li>
                </ul>
              </section>
              <section class="col-6 col-12-narrower">
                <h3>Get In Touch</h3>
                <form>
                  <div class="row gtr-50">
                    <div class="col-6 col-12-mobilep">
                      <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div class="col-6 col-12-mobilep">
                      <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div class="col-12">
                      <textarea name="message" id="message" placeholder="Message" rows="5"></textarea>
                    </div>
                    <div class="col-12">
                      <ul class="actions">
                        <li><input type="submit" class="button alt" value="Send Message" /></li>
                      </ul>
                    </div>
                  </div>
                </form>
              </section>
            </div> -->
          <!-- </div> -->

          <!-- Icons -->
            <ul class="icons">
              <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
              <li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
              <li><a href="#" class="icon brands fa-google-plus-g"><span class="label">Google+</span></a></li>
            </ul>

          <!-- Copyright -->
            <div class="copyright">
              <ul class="menu">
                <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </div>

        </div>

  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      username: {},
      username_display: ""
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      if (response.data) {
        this.username = response.data;
        this.username_display = `Hello ${this.username["username"]}`;
      }
    });
  },
  methods: {}
};
</script>