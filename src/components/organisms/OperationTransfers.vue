<template>
  <div class="operation operation--transfer">
    <Title text="Transfer money" />
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
        { text: 'Transfer to', class: '' },
        { text: 'Amount', class: '' }
      ],
      array_inputs: [
        {
          type: 'text',
          maxlength: ''
        },
        {
          type: 'number',
          maxlength: ''
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

.operation--transfer {
  background-image: linear-gradient(to top left, #ffb003, #ffcb03);
}
</style>
