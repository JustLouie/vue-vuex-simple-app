<template>
  <div class="home">
    <hheader></hheader>
    <category></category>
  </div>
</template>
<script>
  import Header from './Header'
  import Category from './Category'

  export default {
    components: {
      'hheader': Header,
      'category': Category
    }
  }
</script>
