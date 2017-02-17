<template>
  <div class="Header">
    <div class="Header-search">
      <form class="Search-form">
        <input @input="onSearch" type="text" name="search" :placeholder="placeholder">
        <div class="Searched-data">
          <div class="Searched-data-item">
            <div class="item-pic" style="background-image: url('./static/logo.png');"></div>
            <p>blblblblb</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script type="text/javascript">
  let headerData = {
    placeholder: 'Search...'
  }
  export default {
    data () {
      return headerData
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
  }
  .Search-form {
    position: relative;
  }
  .Searched-data {
    width: 100%;
    height: 100px;
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
