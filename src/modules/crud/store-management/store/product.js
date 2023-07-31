import productActions from '../actions';
import productMutations from '../mutations';
import productGetters from '../getters/products';
import state from '../state';

// const state = {
//   ...productState
// };

const getters = {
  ...productGetters
};
const actions = {
  ...productActions
};
const mutations = {
  ...productMutations
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}