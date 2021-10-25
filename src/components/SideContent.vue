<template>
  <button @click="isHidden = !isHidden"></button>
  <aside :class="{ hidden: isHidden }">
    <login-form :hidden="isHidden"></login-form>
  </aside>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      isHidden: false,
    };
  },
};
</script>
<style lang="scss" scoped>
  button {
    width: 4em;
    height: 4em;
  }

  aside {
    border: 1px solid black;
    height: 100%;
    right: 0;
    flex: 1 1;

    &.hidden {
      border: none;
      visibility: invisible;
      flex: none;
    }
  }
</style>
