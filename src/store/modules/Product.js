import actions from '../actions'
import types from '../mutation-types'

const state = {
  type: '',
  product: [
    {
      pic: 'url(./static/logo.png)',
      name: 'Item1-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item1',
      cart: {
        default: 'add_shopping_cart',
        onClick: 'shopping_cart',
        active: false
      },
      star: {
        default: 'star_border',
        onClick: 'star',
        active: false
      }
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item2-Red Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item2',
      cart: {
        default: 'add_shopping_cart',
        onClick: 'shopping_cart',
        active: false
      },
      star: {
        default: 'star_border',
        onClick: 'star',
        active: false
      }
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item3-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item3',
      cart: {
        default: 'add_shopping_cart',
        onClick: 'shopping_cart',
        active: false
      },
      star: {
        default: 'star_border',
        onClick: 'star',
        active: false
      }
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item4-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item4',
      cart: {
        default: 'add_shopping_cart',
        onClick: 'shopping_cart',
        active: false
      },
      star: {
        default: 'star_border',
        onClick: 'star',
        active: false
      }
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item4-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item4',
      cart: {
        default: 'add_shopping_cart',
        onClick: 'shopping_cart',
        active: false
      },
      star: {
        default: 'star_border',
        onClick: 'star',
        active: false
      }
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item6-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu',
      filter: 'Item6',
      cart: {
        default: 'add_shopping_cart',
        onClick: 'shopping_cart',
        active: false
      },
      star: {
        default: 'star_border',
        onClick: 'star',
        active: false
      }
    }
  ],
  newProduct: [],
  searchedProduct: [],
  cartCount: 0
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
    },
    [types.ICON_ACTIVE] (state, action) {
      state.product[action.index][action.type].active = !state.product[action.index][action.type].active
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
    },
    getCartCount (state) {
      return state.cartCount
    }
  }

}

