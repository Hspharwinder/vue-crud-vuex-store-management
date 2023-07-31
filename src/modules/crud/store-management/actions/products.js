import services from '../../services' 

const products = services.products;
const getAllProducts = async({ commit }) => {
  commit('setLoading', true);
  setTimeout(async () => {
    const productsList = await products.getAll();
    commit('setProductList', productsList);
    commit('setLoading', false);
  }, 2000); 
}

const addProduct = async({ state, commit }, product) => {
  commit('setLoading', true);
  await products.addProduct(product);
  commit('setLoading', false);
  console.log("state ", state);
  console.log("product", product);
  console.log(" commit ", commit);
}

const getProduct = async({ state, commit }, id) => {
  commit('setLoading', true);
  setTimeout(async () => {
    console.log("state ", state);
    const product = await products.getProduct(id);
    commit('setLoading', false);
    commit('setProduct', product);
  }, 3000);  
}

const updateProduct = async({ state, commit }, product) => {
  commit('setLoading', true);

  setTimeout(async () => {
    const productRes = await products.updateProduct(product);
    commit('setLoading', false);
    console.log("state ", state);
    console.log(" commit ", commit);
    commit('updateProduct', productRes);
    product
  }, 5000);
 
}

const deleteProduct = async({ state, commit }, id) => {
  commit('setLoading', true);
  await products.deleteProduct(id);
  commit('setLoading', false);
  console.log("state ", state);
  console.log(" commit ", commit);
  commit('deleteProduct', id);
}

const updateProductInput = ({ commit }, e) => {
  commit('setProductDetailInput', e);
}


export default {
  getAllProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  updateProductInput
}