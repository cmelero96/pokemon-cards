<template>
  <form>
    <label for="user">Username</label>
    <input type="text" name="user"
      v-model.trim="user"
      :class="{ error: errorStyling }"
      @focus="errorStyling=false">
    <div v-if="displayError" class="error">Username can't be empty!</div>
    <button @click.prevent="login">Enter</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      user: null,
      errorStyling: false, // To make the box red
      displayError: false, // To display the red warning message
    };
  },
  methods: {
    login() {
      if (this.user && this.user.length > 3) {
        console.log(this.user);
      } else {
        this.displayError = true;
        this.errorStyling = true;
        setTimeout(() => {
          this.displayError = false;
          this.errorStyling = false;
        }, 5000);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
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
      font-size: .9em;
      font-weight: bold;
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
</style>
