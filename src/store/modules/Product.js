import actions from '../actions'

const state = {
  product: [
    {
      pic: 'url(./static/logo.png)',
      name: 'Item1-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu'
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item2-Red Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu'
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item3-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu'
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item4-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu'
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item5-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu'
    },
    {
      pic: 'url(./static/logo.png)',
      name: 'Item6-Orange Shoes',
      description: 'Bla Bla Bla Blo Blo Blo Blu Blu Blu'
    }
  ]
}

export default {
  state,
  actions,
  getters: {
    getProducts (state) {
      return state.product
    }
  }

}
