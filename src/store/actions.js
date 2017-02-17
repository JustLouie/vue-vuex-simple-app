import types from './mutation-types'

let actions = {
  categoryFilter ({ commit }, payload) {
    commit(types.FILTER_CATEGORY, {...payload, type: types.FILTER_CATEGORY})
  },
  onSearch ({ commit }, payload) {
    commit(types.ON_SEARCH, {...payload, type: types.ON_SEARCH})
  }
}

export default actions
