<template>
  <div class="balance">
    <div>
      <p class="balance__label">Saldo Atual</p>
      <p class="balance__date">As of <span class="date">05/03/2037</span></p>
    </div>
    <p class="balance__value">${{ currentBalance }}</p>
  </div>
</template>

<script>

import { GET_BALANCE } from '@/store/user_account/variables/getters'

export default {
  computed: {
    currentBalance () {
      return this.$store.getters[GET_BALANCE]
    }
  }
}
</script>

<style>
.balance {
  grid-column: 1 / span 2;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.balance__label {
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: -0.2rem;
}

.balance__date {
  font-size: 1.4rem;
  color: #888;
}

.balance__value {
  font-size: 4.5rem;
  font-weight: 400;
}
</style>
