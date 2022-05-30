<template>
  <main class="app" :class="{ active_opacity: opacity === 100 ? true : false }">
    <Balance />

    <Movements />

    <OperationTransfers />
    <OperationLoan />
    <OperationClose />

    <Summary />
  </main>
</template>

<script>
import Balance from '@/components/Balance'
import Movements from '@/components/Movements'
import Summary from '@/components/Summary'
import OperationClose from '@/components/organisms/OperationClose'
import OperationLoan from '@/components/organisms/OperationLoan.vue'
import OperationTransfers from '@/components/organisms/OperationTransfers.vue'
import { GET_SCREEN_OPACITY } from '@/store/screen/variables/getters'

export default {
  components: {
    Balance,
    Movements,
    Summary,
    OperationClose,
    OperationLoan,
    OperationTransfers
  },
  computed: {
    opacity () {
      return this.$store.getters[GET_SCREEN_OPACITY]
    }
  }
}
</script>

<style>
.app {
  position: relative;
  max-width: 100rem;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: auto repeat(3, 15rem) auto;
  gap: 2rem;
  opacity: 0;
  transition: all 1s;
}
.app.active_opacity {
  opacity: 100;
}
</style>
