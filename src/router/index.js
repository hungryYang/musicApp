import Vue from 'vue'
import VueRouter from 'vue-router'

import Discovery from '../components/DiscoveryMusic'
import Mymusic from '../components/MyMusic'
import NowPlaying from '../components/NowPlaying'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path:'/discovery',component:Discovery,name:'discovery'},
    {path:'/mymusic',component:Mymusic,name:'mymusic'},
    {path :'/nowplaying',component:NowPlaying,name:'nowplaying'}
  ]
})

// const routers = [
//   {path:'/account',component:Account,name:'account'},
//   {path:'/discovery',component:Discovery,name:'discovery'},
//   {path:'/friends',component:Friends,name:'friends'},
//   {path:'/mymusic',component:Mymusic,name:'mymusic'}
// ]
// const router = new VueRouter({
//   routers
// })
// export {router}
