<template>
  <h2>{{ text }}</h2>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      required: true,
      type: String
    }
  }
})
</script>

<style scoped>
h2 {
  margin-bottom: 1.5rem;
  font-size: 1.7rem;
  font-weight: 600;
  color: #333;
}
</style>
