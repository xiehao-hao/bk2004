import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import flims from "@/router/routers/films"
import cinemas from "@/router/routers/cinemas"
import center from "@/router/routers/center"




const routes = [
  
    {path:"/",redirect: "/films/nowPlaying"},

    ...flims,
    cinemas,
    center

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
