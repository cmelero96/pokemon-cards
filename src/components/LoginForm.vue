<template>
  <form v-if="!username">
    <label for="user">Username</label>
    <input type="text" name="user"
      v-model.trim="user"
      :class="{ error: errorStyling }"
      @focus="errorStyling=false"
      @input="displayError=false">
    <div v-if="displayError" class="error">{{ errorMessage }}</div>
    <button @click.prevent="login">Enter</button>
  </form>
  <div class="welcome" v-else>
    <header>Welcome, {{ username }}</header>
    <button @click="logout">This isn't me</button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      user: '',
      loggedIn: false,
      errorStyling: false, // To make the box red
      displayError: false, // To display the red warning message
    };
  },
  computed: {
    ...mapGetters({
      username: 'getUser',
    }),
    errorMessage() {
      return this.user === '' ? "Username can't be empty!" : 'Username must be at least 3 characters long';
    },
  },
  methods: {
    ...mapMutations([
      'setUser',
      'clearUser',
    ]),
    login() {
      if (this.user && this.user.length >= 3) {
        this.setUser({ user: this.user });
      } else {
        this.displayError = true;
        this.errorStyling = true;
        setTimeout(() => {
          this.displayError = false;
          this.errorStyling = false;
        }, 5000);
      }
    },
    logout() {
      this.clearUser();
    },
  },
};
</script>
<style lang="scss" scoped>
  .welcome {
    header {
      margin: 1em;
      font-size: 2em;
    }
  }

  form {
    padding-top: 1em;
    font-size: 1.3em;
    position: relative;

    input {
      font-size: 1.1em;
      font-weight: bolder;
      width: 60%;
      margin: 0 20%;
    }

    button {
      position: absolute;
      top: 8em;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
    }

    input.error {
      background-color: lightcoral;
    }

    div.error {
      font-size: 0.8em;
      max-width: 100%;
      padding: 0.4em;
      margin: 1em auto 0;
      color: darkred;
    }
  }

  button {
    font-size: 1rem;
    font-weight: bold;
  }

</style>
