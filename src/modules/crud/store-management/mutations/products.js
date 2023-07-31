const setProductList = (state, products) => {
    state.productList = products
}

const setProduct = (state, product) => {
    state.productData = product;
    state.product = product;

}

const updateProduct = (state, product) => {
    state.updatedData = product;
}

const deleteProduct =  (state, id) => {
    const index = state.productList.findIndex(obj => obj.id === id);
    if (index !== -1) {
        state.productList.splice(index, 1);
    }
}

const setProductDetailInput = (state, e) => {
    let product = state.product;
    product[e.target.name] = e.target.value;
    state.product = product
}

const setLoading = (state, value) => {
    state.loading = value;
}

const SET_PRODUCT_TITLE = (state, newTitle) => {
    state.product.title = newTitle;
    state.productData.title = newTitle;
}

const SET_PRODUCT_EMAIL = (state, newEmail) => {
    state.product.email = newEmail;
    state.productData.email = newEmail;
}

const SET_PRODUCT_AUTHOR = (state, newAuthor) => {
    state.product.author = newAuthor;
    state.productData.author = newAuthor;
}

const SET_PRODUCT_ID = (state, id) => {
    state.product.id = id;
    state.productData.id = id;
}

const SET_PRODUCT_UPDATED_DATA  = (state, data) => {
    state.updatedData = data;
    state.product = data;

}

export default {
    setProductList,
    setProduct,
    updateProduct,
    deleteProduct,
    setProductDetailInput,
    setLoading,
    SET_PRODUCT_TITLE,
    SET_PRODUCT_EMAIL,
    SET_PRODUCT_AUTHOR,
    SET_PRODUCT_ID,
    SET_PRODUCT_UPDATED_DATA
}