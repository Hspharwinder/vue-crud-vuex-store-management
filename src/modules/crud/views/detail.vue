<template>
    <div class="container bg-light border border-success col-8">
        <div v-if="product">
            <br>
            <h1>Detail Page</h1>
            <br>
            <div class="d-flex aligns-items-center justify-content-center">
                <p class="col-3 bg-light">Id</p>
                <p class="col-6 border bg-light d-flex">
                {{product.id}}
                </p>
            </div>
            <div class="d-flex aligns-items-center justify-content-center">
                <p class="col-3 bg-light">Title</p>
                <p class="col-6 border bg-light d-flex">
                {{product.title}}
                </p>
            </div>
            <div class="d-flex aligns-items-center justify-content-center">
                <p class="col-3 bg-light">Email</p>
                <p class="col-6 border bg-light d-flex">
                {{product.email}}
                </p>
            </div>
            <div class="d-flex aligns-items-center justify-content-center">
                <p class="col-3 bg-light">Author</p>
                <p class="col-6 border bg-light aligns-items-left d-flex">
                {{product.author}}
                </p>
            </div>
        </div>   
        <br>
        <br>

        <div class="d-flex aligns-items-center justify-content-center">
            <ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
        </div>
        <br>
        <br>

        <router-link to="/">
            <button class="mt-2 mb-3 btn btn-success">Home</button>
        </router-link>
  </div> 


</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import RingLoader from 'vue-spinner/src/RingLoader.vue'

export default {
    name:"DetailPage",
    components:{
        RingLoader
    },
    data() {
        return {
            id:""
        };
    },
    computed: { 
        ...mapState({
            product: state => state.product,
        }),
        ...mapGetters('products', ['product', 'loading']),
    },  
    
    methods: {
        ...mapMutations('products', [
            'SET_PRODUCT_UPDATED_DATA'
        ]),
        ...mapActions('products', [
            'getProduct'
        ]),

    },
    created() {
        this.SET_PRODUCT_UPDATED_DATA(null);
        this.id = this.$route.params.id;
        this.getProduct(this.id);
    }  
};
</script>