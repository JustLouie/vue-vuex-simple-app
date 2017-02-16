import actions from '../actions'

const state = {
  items: ['Item1', 'Item2', 'Item3', 'Item4', 'Item5']
}

export default {
  state,
  actions,
  // mutations,
  getters: {
    getItems (state) {
      return state.items
    }
  }
}
