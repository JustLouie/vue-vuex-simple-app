<template>
  <div class="home">
    <appheader />
    <category />
    <products />
  </div>
</template>
<script>
  import Header from './Header'
  import Category from './Category'
  import Products from './Products'

  export default {
    components: {
      'appheader': Header,
      'category': Category,
      'products': Products
    }
  }
</script>
