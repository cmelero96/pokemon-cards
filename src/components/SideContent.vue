<template>
  <button @click="isVisible = !isVisible"></button>
  <transition duration=250 @after-enter="renderForm=true" @before-leave="renderForm=false">
    <div class="form-render-control" hidden v-if="isVisible"></div>
  </transition>
    <aside :class="{ visible: isVisible }">
      <login-form v-show="renderForm"></login-form>
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
      isVisible: false,
      renderForm: false,
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
    background-color: lightgray;
    height: 100%;
    opacity:0;
    transition: all 0.5s ease-in-out;
    visibility: hidden;

    &.visible {
      width: initial;
      flex: 1 1;
      border: 1px solid black;
      visibility: visible;
      opacity:1;
    }
  }
</style>
