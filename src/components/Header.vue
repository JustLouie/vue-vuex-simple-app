<template>
  <div class="Header">
    <div class="Header-search">
      <form>
        <input type="text" name="search">
      </form>
    </div>
  </div>
</template>
<script type="text/javascript">
  let headerData = {

  }
  export default {
    data () {
      return headerData
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
      background: red;
      input {
        width: 100%;
        height: 40px;
        background: white;
        border: none;
        outline: none;
        // margin: 20px;
      }
    }
  }
</style>
