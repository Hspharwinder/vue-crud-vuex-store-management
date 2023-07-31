
import axios from "axios";
import Swal from 'sweetalert2';
import helpers from '../helpers';
import api from '../api';

const path = api.products.path;
const Toast = helpers.Toaster.Toast;

const getAll = ()=> {
    return axios.get(path.products)
    .then(response => {
        // Handle the API response here
        // Toast.fire({
        //     icon: 'success',
        //     title: 'Success'
        //   })
        return response.data;
    })
    .catch(error => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        // Handle any errors that occurred
        console.error(error);
        return error;
    })
}

const addProduct = (product)=> {
    return axios.post(path.products, product)
    .then(response => {
        // Handle the API response here
        Toast.fire({
            icon: 'success',
            title: 'Success'
          })
        return response.data;
    })
    .catch(error => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        // Handle any errors that occurred
        console.error(error);
        return error;
    })
}

const getProduct = (id)=> {
    return axios.get(path.product + id)
    .then(response => {
        // Handle the API response here
        Toast.fire({
            icon: 'success',
            title: 'Success'
          })
        return response.data;
    })
    .catch(error => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        // Handle any errors that occurred
        console.error(error);
        return error;
    })
}

const updateProduct = (product)=> {
    return axios.put(path.product + product.id, product)
    .then(response => {
        // Handle the API response here
        Toast.fire({
            icon: 'success',
            title: 'Success'
          })
        return response.data;
    })
    .catch(error => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        // Handle any errors that occurred
        console.error(error);
        return error;
    })
}

const deleteProduct = (id)=> {
    return axios.delete(path.product + id)
    .then(response => {
        // Handle the API response here
        Toast.fire({
            icon: 'success',
            title: 'Success'
          })
        return response.data;
    })
    .catch(error => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        // Handle any errors that occurred
        console.error(error);
        return error;
    })
}

export default {
    getAll,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
}

// https://sweetalert2.github.io/#download