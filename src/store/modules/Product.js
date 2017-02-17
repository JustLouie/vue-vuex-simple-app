import actions from '../actions'
import types from '../mutation-types'

const state = {
  type: '',
  product: [
    {
      pic: 'url(./static/logo.png)',
      name: 'Item1-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item1'
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item2-Red Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item2'
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item3-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item3'
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item4-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item4'
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item4-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item4'
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item6-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item6'
    }
  ],
  newProduct: [],
  searchedProduct: []
}

export default {
  state,
  actions,
  mutations: {
    [types.FILTER_CATEGORY] (state, action) {
      state.type = action.type
      state.newProduct = state.product.filter(items => {
        if (items.filter === action.item) {
          return items
        }
      })
    },
    [types.ON_SEARCH] (state, action) {
      state.type = action.type
      let searchWord = action.value.trim().toLowerCase()
      if (action.value === '') {
        state.searchedProduct = []
      }
      else {
        state.searchedProduct = state.product.filter(items => {
          if (items.name.toLowerCase().indexOf(searchWord) !== -1) {
            return items
          }
        })
      }
    }
  },
  getters: {
    getProducts (state) {
      switch (state.type) {
        case types.FILTER_CATEGORY:
          return state.newProduct
        default:
          return state.product
      }
    },
    searchedProduct (state) {
      return state.searchedProduct
    }
  }

}

