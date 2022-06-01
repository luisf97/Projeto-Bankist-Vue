<template>
  <nav>
    <p class="welcome">
      {{
        text_content !== ''
          ? `Welcome back, ${text_content} `
          : 'Log in to get started'
      }}
    </p>
    <img src="@/assets/logo.png" alt="Logo" class="logo" />
    <form class="login">
      <input
        type="text"
        placeholder="user"
        v-model="username"
        class="login__input login__input--user"
      />
      <input
        type="text"
        placeholder="PIN"
        v-model="pin"
        maxlength="4"
        class="login__input login__input--pin"
      />
      <button @click.prevent="change_screen" class="login__btn">&rarr;</button>
    </form>
  </nav>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { accounts } from '@/repositories/accounts'
import { GET_SCREEN_TEXT_CONTENT } from '@/store/screen/variables/getters'
import { LOGIN } from '@/store/login/variables/actions'

export default Vue.extend({
  data () {
    return {
      accounts,
      username: '',
      pin: '',
      currentAccount: ''
    }
  },
  methods: {
    change_screen () {
      this.$store.dispatch(LOGIN, { username: this.username, pin: this.pin })
      this.username = ''
      this.pin = ''
    }
  },
  computed: {
    ...mapGetters([GET_SCREEN_TEXT_CONTENT]),
    text_content () {
      return this.GET_SCREEN_TEXT_CONTENT
    }
  }
})
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.welcome {
  font-size: 1.9rem;
  font-weight: 500;
}

.logo {
  height: 5.25rem;
}

.login {
  display: flex;
}

.login__input {
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1.6rem;
  font-family: inherit;
  text-align: center;
  width: 12rem;
  border-radius: 10rem;
  margin-right: 1rem;
  color: inherit;
  border: 1px solid #fff;
  transition: all 0.3s;
}

.login__input:focus {
  outline: none;
  border: 1px solid #ccc;
}

.login__input::placeholder {
  color: #bbb;
}

.login__btn {
  border: none;
  background: none;
  font-size: 2.2rem;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s;
}

.login__btn:hover,
.login__btn:focus,
.btn--sort:hover,
.btn--sort:focus {
  outline: none;
  color: #777;
}
</style>
