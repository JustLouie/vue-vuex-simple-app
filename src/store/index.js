import Vue from 'vue'
import Vuex from 'vuex'
import Category from './modules/Category'
import Header from './modules/Header'
import Product from './modules/Product'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category: Category,
    header: Header,
    product: Product
  }

})
