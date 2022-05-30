<template>
  <input class="form__input " :class="input_class" v-bind="$attrs" />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    input_class: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
.form__input {
  width: 100%;
  border: none;
  background-color: rgba(255, 255, 255, 0.4);
  font-family: inherit;
  font-size: 1.5rem;
  text-align: center;
  color: #333;
  padding: 0.3rem 1rem;
  border-radius: 0.7rem;
  transition: all 0.3s;
}

.form__input:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
