import types from './mutation-types'

let actions = {
  categoryFilter ({ commit }, payload) {
    commit(types.FILTER_CATEGORY, {...payload, type: types.FILTER_CATEGORY})
  },
  onSearch ({ commit }, payload) {
    commit(types.ON_SEARCH, {...payload, type: types.ON_SEARCH})
  },
  iconActive ({ commit }, payload) {
    commit(types.ICON_ACTIVE, { ...payload, type: types.ICON_ACTIVE })
  },
  showCart ({ commit }, payload) {
    commit(types.SHOW_CART, {...payload, type: types.SHOW_CART})
  }
}

export default actions
