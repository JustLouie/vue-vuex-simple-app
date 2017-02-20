<template>
  <div class="Header">
    <div class="Header-search">
      <form class="Search-form">
        <input @input="onSearch" type="text" name="search" :placeholder="placeholder" autocomplete="off">
        <div class="Searched-data">
          <div v-for="item in searchedItem" class="Searched-data-item">
            <div class="item-pic" :style="{backgroundImage: item.pic}"></div>
            <p>{{item.name}}</p>
          </div>
        </div>
      </form>
    </div>
    <div class="Header-cart">
      <i @click="showCart" class="material-icons">{{
        cart.shopping_cart.default
      }}
      <span>{{cartCount}}</span>
      </i>
      <i class="material-icons">{{
        cart.star.default
      }}</i>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'

  let headerData = {
    placeholder: 'Search...',
    cart: {
      star: {
        default: 'star_border'
      },
      shopping_cart: {
        default: 'shopping_cart'
      }
    }
  }
  export default {
    data () {
      return headerData
    },
    computed: {
      ...mapGetters({
        searchedItem: 'searchedProduct',
        cartCount: 'getCartCount'
      })
    },
    methods: {
      onSearch (e) {
        this.$store.dispatch('onSearch', { value: e.target.value })
      },
      showCart () {
        this.$store.dispatch('showCart', {})
      }
    }
  }
</script>
<style lang="scss">
  .Header {
    width: 100%;
    height: 100px;
    float: left;
    position: relative;
    background: blue;
    &-search {
      width: 300px;
      height: 100%;
      margin: auto;
      input {
        width: 100%;
        height: 40px;
        background: white;
        border: none;
        outline: none;
        margin-top: 28px;
        text-indent: 5px;
      }
    }
    &-cart {
      width: 200px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      i {
        height: 30px;
        margin-top: 38px;
        padding-left: 10px;
        color: white;
        cursor: pointer;
        position: relative;
        span {
          width: 15px;
          height: 15px;
          position: absolute;
          right: -5%;
          top: -18%;
          border-radius: 100%;
          line-height: 15px;
          font: {
            size: 12px;
            family: arial;
          }
          color: white;
          text: {
            align: center;
          }
          z-index: 20;
          background: {
            color: red;
          }
        }
      }
    }
  }
  .Search-form {
    position: relative;
  }
  .Searched-data {
    width: 100%;
    height: auto;
    float: left;
    background: white;
    &-item {
      width: 100%;
      height: 40px;
      float: left;
      border-bottom: 1px solid black;
      p {
        text: {
          indent: 20px;
          transform: capitalize;
        }
        line-height: 40px;
        font: {
          size: 18px;
          family: arial;
        }
      }
    }
  }
  .item-pic {
    width: 40px;
    height: 100%;
    float: left;
    background: {
      size: cover;
    }
  }
</style>
