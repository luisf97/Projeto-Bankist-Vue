<template>
  <button class="form__btn" :class="{ form_props }">
    &rarr;
  </button>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    form_props: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
.form__btn {
  border: none;
  border-radius: 0.7rem;
  font-size: 1.8rem;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s;
}

.form__btn:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
