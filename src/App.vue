<template>
  <div id="app">
    <TopNavigation />

    <PageFull />
  </div>
</template>

<script>
import TopNavigation from '@/components/TopNavigation'
import PageFull from '@/views/PageFull'

export default {
  components: { TopNavigation, PageFull }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  color: #444;
  background-color: #f3f3f3;
  height: 100vh;
  padding: 2rem;
}
</style>
