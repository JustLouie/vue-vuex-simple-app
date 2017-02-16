<template>
  <div class="home">
    <hheader></hheader>
    <category></category>
    <products></products>
  </div>
</template>
<script>
  import Header from './Header'
  import Category from './Category'
  import Products from './Products'

  export default {
    components: {
      'hheader': Header,
      'category': Category,
      'products': Products
    }
  }
</script>
