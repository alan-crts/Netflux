<template>
  <HeaderMenu/>
  <router-view/>
</template>

<script>
export default {
    components: {
        HeaderMenu
    }
}

import HeaderMenu from '@/components/HeaderMenu.vue'

</script>

<style>

html {
    background-color: #23002F;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #DD9296;
}
</style>
