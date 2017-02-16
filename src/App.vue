<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
