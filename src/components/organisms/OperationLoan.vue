<template>
  <div class="operation operation--loan">
    <Title text="Request loan" />
    <FormOperations
      :subtitle_array="array_text"
      :inputs_array="array_inputs"
      form_class="form--loan"
    />
  </div>
</template>

<script>
import Title from '@/components/atoms/typography/Title'
import FormOperations from '@/components/molecules/FormOperations'

export default {
  components: { Title, FormOperations },
  data () {
    return {
      array_text: [{ text: 'Amount', class: 'form__label--loan' }],

      array_inputs: [
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

.operation--loan {
  background-image: linear-gradient(to top left, #39b385, #9be15d);
}
</style>
