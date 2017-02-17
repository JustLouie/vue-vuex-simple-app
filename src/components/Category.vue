<template>
  <div class="Category">
    <ul class="Category-items">
      <li v-for="(item, index) in items" @click="categoryFilter(item, index)">{{ item }}</li>
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
    methods: {
      categoryFilter (item, index) {
        this.$store.dispatch('categoryFilter', { item: item, index: index })
      }
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
    width: 15%;
    height: auto;
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
      &:hover {
        background: black;
        color: white;
        cursor: pointer;
      }
    }
  }
</style>
