<template>
  <div class="Category">
    <ul class="Category-items">
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'

  let categoryData = {

  }
  export default {
    data () {
      return categoryData
    },
    computed: {
      ...mapGetters({
        items: 'getItems'
      })
    }
  }
</script>
<style lang="scss">
  .Category {
    width: 200px;
    height: 70vh;
    float: left;
    border: 1px solid black;
  }
  .Category-items {
    width: 100%;
    float: left;
    li {
      width: 100%;
      height: 40px;
      float: left;
      list-style: none;
      line-height: 40px;
      text: {
        align: center;
      }
      border-bottom: 1px solid black;
    }
  }
</style>
