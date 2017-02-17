<template>
  <div class="Product">
    <div v-for ="(product, index) in products" class="Product-items">
      <div class="Product-pic" :style="{backgroundImage: product.pic}"></div>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <i @click="iconActive('cart', index)" class="material-icons">{{
        product.cart.active ? product.cart.onClick : product.cart.default
      }}</i>
      <i @click="iconActive('star', index)" class="material-icons">{{
        product.star.active ? product.star.onClick : product.star.default
      }}
      </i>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'

  let productData = {

  }
  export default {
    data () {
      return productData
    },
    methods: {
      iconActive (type, index) {
        this.$store.dispatch('iconActive', { cartype: type, index: index })
      }
    },
    computed: {
      ...mapGetters({
        products: 'getProducts'
      })
    }
  }
</script>
<style lang="scss">
  .Product {
    width: 84.8%;
    height: auto;
    float: left;
    background: orange;
    &-items {
      width: 30%;
      height: 300px;
      float: left;
      h3 {
        font: {
          family: arial;
        }
        text: {
          indent: 5px;
        }
      }
      p {
        color: white;
        padding-left: 5px;
        margin-top: 10px;
      }
      i {
        color: white;
        margin-top: 10px;
        text: {
          indent: 5px;
        }
        cursor: pointer;
      }
    }
    &-pic {
      width: 100%;
      height: 60%;
      float: left;
      background: {
        size: contain;
        repeat: no-repeat;
        position: center center;
      }
    }
  }
</style>
