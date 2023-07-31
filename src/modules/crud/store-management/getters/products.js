// getters
const getters = {
    productData: state => state.productData,
    productList: state => state.productList,
    product:state => state.product,
    loading:state => state.loading,
    updatedData:state => state.updatedData,
};

export default{
    ...getters
}