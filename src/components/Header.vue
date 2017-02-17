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
      <i class="material-icons">add_shopping_cart</i>
      <i class="material-icons">star</i>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'

  let headerData = {
    placeholder: 'Search...'
  }
  export default {
    data () {
      return headerData
    },
    computed: {
      ...mapGetters({
        searchedItem: 'searchedProduct'
      })
    },
    methods: {
      onSearch (e) {
        this.$store.dispatch('onSearch', { value: e.target.value })
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
        line-height: 100px;
        padding-left: 10px;
        color: white;
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
