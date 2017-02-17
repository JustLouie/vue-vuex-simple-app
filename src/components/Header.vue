<template>
  <div class="Header">
    <div class="Header-search">
      <form>
        <input @input="onSearch" type="text" name="search" :placeholder="placeholder">
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
  .Header{
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
</style>
