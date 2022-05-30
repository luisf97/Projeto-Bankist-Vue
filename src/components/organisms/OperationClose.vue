<template>
  <div class="operation operation--close">
    <Title text="Close account" />
    <FormOperations :subtitle_array="array_text" :inputs_array="array_inputs" />
  </div>
</template>

<script>
import Title from '@/components/atoms/typography/Title'
import FormOperations from '@/components/molecules/FormOperations'

export default {
  components: { Title, FormOperations },
  data () {
    return {
      array_text: [
        { text: 'Confirm user', class: '' },
        { text: 'Confirm PIN', class: '' }
      ],
      array_inputs: [
        {
          type: 'text',
          maxlength: ''
        },
        {
          type: 'password',
          maxlength: '4'
        }
      ]
    }
  }
}
</script>

<style scoped>
.operation {
  border-radius: 1rem;
  padding: 3rem 4rem;
  color: #333;
}

.operation--close {
  background-image: linear-gradient(to top left, #e52a5a, #ff585f);
}
</style>
