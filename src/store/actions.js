import types from './mutation-types'

let actions = {
  categoryFilter ({ commit }, payload) {
    commit(types.FILTER_CATEGORY, {...payload, type: types.FILTER_CATEGORY})
  }
}

export default actions
