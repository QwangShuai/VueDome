import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TabView from '../components/TabView'
import Home from '../components/Home'
import Bill from '../components/Bill.vue'
import Wallet from '../components/Wallet.vue'
import Person from '../components/Person.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/bill',
      name: 'Bill',
      component: Bill
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/tabview',
      name: 'TabView',
      component: TabView
    }

  ],
  mode: 'history'
})
