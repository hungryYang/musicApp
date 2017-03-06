import Vue from 'vue'
import VueRouter from 'vue-router'

import Account from '../components/Account'
import Discovery from '../components/DiscoveryMusic'
import Friends from '../components/Friends'
import Mymusic from '../components/MyMusic'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path:'/account',component:Account,name:'account'},
    {path:'/discovery',component:Discovery,name:'discovery'},
    {path:'/friends',component:Friends,name:'friends'},
    {path:'/mymusic',component:Mymusic,name:'mymusic'}
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
