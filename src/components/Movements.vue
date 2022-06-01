<template>
  <div class="movements">
    <div class="movements__row" v-for="(mov, index) in currentAccount.movements" :key="index">
      <div class="movements__type" :class="mov > 0 ? 'deposit' : 'withdrawal'">
        {{ index + 1 }} {{ mov > 0 ? 'deposit' : 'withdrawal' }}
      </div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${{ Math.abs(mov) }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { accounts } from '@/repositories/accounts'
import { GET_ACCOUNT } from '@/store/user_account/variables/getters'

export default Vue.extend({
  data () {
    return {
      accounts,
      value: 100
    }
  },
  computed: {
    currentAccount () {
      return this.$store.getters[GET_ACCOUNT]
    }
  }
})
</script>

<style>
.movements {
  grid-row: 2 / span 3;
  background-color: #fff;
  border-radius: 1rem;
  overflow: scroll;
}

.movements__row {
  padding: 2.25rem 4rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.movements__type {
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
  padding: 0.1rem 1rem;
  border-radius: 10rem;
  margin-right: 2rem;
}

.movements__date {
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #666;
}

.deposit {
  background-image: linear-gradient(to top left, #39b385, #9be15d);
}

.withdrawal {
  background-image: linear-gradient(to top left, #e52a5a, #ff585f);
}

.movements__value {
  font-size: 1.7rem;
  margin-left: auto;
}
</style>
