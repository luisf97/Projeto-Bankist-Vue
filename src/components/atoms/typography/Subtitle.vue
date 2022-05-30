<template>
  <label class="form__label" :class="subtitle_class"> {{ text }}</label>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      required: true,
      type: String
    },
    subtitle_class: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
.form__label {
  font-size: 1.3rem;
  text-align: center;
}
.form__label--loan {
  grid-row: 2;
}
</style>
