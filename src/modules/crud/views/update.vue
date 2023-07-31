<template>
    <div class="container bg-light border border-success col-4">
      <br>
      <h1>Update Form</h1><br>
      <div v-if="product && !loading">
        <form @submit="submitForm">
          <div class="form-group d-flex">
            <label for="title" class="col-4">Title:</label>
            <input type="text" class="form-control border border-success" id="title" v-model="title" />
          </div>
          <div v-if="!title && formSubmit" class="error-message text-danger">Title is required.</div>
          <br>
    
          <div class="form-group d-flex ">
            <label for="email" class="col-4">Email:</label>
            <input type="email" class="form-control border border-success" id="email" v-model="email" />
          </div>
          <div v-if="!email && formSubmit" class="error-message text-danger">Email is required</div>
          <div v-else-if="!isEmailValid && formSubmit" class="error-message text-danger">Invalid email format.</div>
          <br>

          <div class="form-group d-flex">
            <label for="author" class="col-4">Author:</label>
            <input type="author" class="form-control border border-success" id="author" v-model="author" />
          </div>
          <div v-if="!author && formSubmit" class="error-message text-danger">Author is required.</div>
          <br>
          <div class="form-group text-center ">
            <router-link to="/">
            <button type="button" class="btn btn-outline-secondary text-dark col-4 me-5">Cancel</button>
          </router-link>
            <button type="submit" :disabled="loading" class="btn btn-outline-success text-dark col-4">Submit</button>
          </div><br>
        
        </form>
      </div>

      <!-- Display loading message while data is being fetched -->
      <!-- <div v-else-if="loading"> -->
        <ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
      <!-- </div> -->
      <!-- <div >Loading...</div> -->
      <!-- Display an error message if data retrieval fails -->
      <!-- <div v-else>Error loading data.</div> -->
      product ::: {{ product }}<br>
      productData :: {{ productData }}<br>
      loading :: {{ loading }}<br>
      updatedData :: {{updatedData}}<br>
    </div>
    
  </template>
  
<script>
  import { mapActions, mapState, mapGetters, mapMutations} from 'vuex'
  import RingLoader from 'vue-spinner/src/RingLoader.vue'

  export default {
    name:"UpdatePage",
    components:{
      RingLoader
    },
    data() {
      return {
        formSubmit: false,
        id:null
      };
    },

    computed:{
      isEmailValid() {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
      },
      ...mapGetters('products', ['product', 'productData', 'loading', 'updatedData']),
      ...mapState({
        productState: state => state.products,
      }),
      title: {
        get() {
          return this.product.title;
        },
        set(newTitle) {
          // Call the mutation to update the product title
          this.SET_PRODUCT_TITLE(newTitle);
        },
      },
      email: {
        get() {
          return this.product.email;
        },
        set(newEmail) {
          // Call the mutation to update the product email
          this.SET_PRODUCT_EMAIL(newEmail);
        },
      },
      author: {
        get() {
          return this.product.author;
        },
        set(newAuthor) {
          // Call the mutation to update the product author
          this.SET_PRODUCT_AUTHOR(newAuthor);
        },
      }
    },

    watch:{
      updatedData: function () {
        if (this.updatedData && !this.loading) {
          this.$router.push("/");
        }
      },
    },

    methods: {
      ...mapMutations('products', [
        'SET_PRODUCT_TITLE',
        'SET_PRODUCT_EMAIL',
        'SET_PRODUCT_AUTHOR',
        'SET_PRODUCT_ID',
        'SET_PRODUCT_UPDATED_DATA',
        'setLoading'
      ]),
      ...mapActions('products', [
        'getProduct',
        'updateProduct'
      ]),
      
      async submitForm(event) {
        event.preventDefault();

        // Perform additional form submission logic
        this.formSubmit= true;
        if (
          !this.product
          || !this.product.title 
          || !this.product.author
          || !this.product.email 
          || !this.isEmailValid
        ) {
          return;

        } else {
          // Handle form submission logic here
          // this.book.push(this.form)
          // await axios.put("http://localhost:3000/products/"+this.id, this.product);
          // this.product['id'] = this.id;
          this.SET_PRODUCT_ID(this.id);
          this.updateProduct(this.product);
        }
      },
    },
    created() {
      this.SET_PRODUCT_UPDATED_DATA(null)
      this.id = this.$route.params.id;
      this.getProduct(this.id);
      // this.$store.dispatch('products/getProduct', this.id);
    }
  };
</script>