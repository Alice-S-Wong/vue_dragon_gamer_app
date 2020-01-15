import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import GamesIndex from "../views/GamesIndex.vue";
import GamesShow from "../views/GamesShow.vue";
import ListsIndex from "../views/ListsIndex.vue";
import ListNew from "../views/ListNew.vue";
import ListShow from "../views/ListShow.vue";
import ListItemNew from "../views/ListItemNew.vue";
import ReviewNew from "../views/ReviewNew.vue";
import FEStatCalculator from "../views/FEStatCalculator.vue";
import FEStatSimulator from "../views/FEStatSimulator.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { 
    path: "/signup", 
    name: "signup", 
    component: Signup 
  },
  { 
    path: "/login", 
    name: "login", 
    component: Login 
  },
  { 
    path: "/logout", 
    name: "logout", 
    component: Logout 
  },
  { 
    path: "/games", 
    name: "gamesIndex", 
    component: GamesIndex 
  },
  { 
    path: "/games/:id", 
    name: "gamesShow", 
    component: GamesShow 
  },
  { 
    path: "/lists", 
    name: "listsIndex", 
    component: ListsIndex
  },
  { 
    path: "/lists/new", 
    name: "listNew", 
    component: ListNew 
  },
  { 
    path: "/lists/:id", 
    name: "listShow", 
    component: ListShow 
  },
  { 
    path: "/list_items/new", 
    name: "listItemNew", 
    component: ListItemNew 
  },
  { 
    path: "/reviews/new", 
    name: "ReviewNew", 
    component: ReviewNew 
  },
  { 
    path: "/fe_stat_calculator", 
    name: "FEStatCalculator", 
    component: FEStatCalculator 
  },
  { 
    path: "/fe_stat_simulator", 
    name: "FEStatSimulator", 
    component: FEStatSimulator 
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
