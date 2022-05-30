<template>
  <form class="form ">
    <template v-for="(item, index) in inputs_array">
      <Inputs :key="index" :type="item.type" :maxlength="item.maxlength" />
    </template>

    <Button />

    <template v-for="item in subtitle_array">
      <Subtitle
        :key="item.text"
        :text="item.text"
        :subtitle_class="item.class"
      />
    </template>
  </form>
</template>

<script>
import Button from '@/components/atoms/Buttons'
import Inputs from '@/components/atoms/Inputs'
import Subtitle from '@/components/atoms/typography/Subtitle'

export default {
  components: { Button, Inputs, Subtitle },
  props: {
    subtitle_array: {
      type: Array,
      default: () => [
        {
          text: '',
          class: ''
        }
      ],
      required: true
    },
    inputs_array: {
      type: Array,
      default: () => [
        {
          type: '',
          maxlength: ''
        }
      ],
      required: true
    },
    form_class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 2.5fr 2.5fr 1fr;
  grid-template-rows: auto auto;
  gap: 0.4rem 1rem;
}

.form.form--loan {
  grid-template-columns: 2.5fr 1fr 2.5fr;
}
</style>
