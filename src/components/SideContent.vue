<template>
  <aside :class="{ hidden: isHidden }">
    <button @click="isHidden = !isHidden"></button>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      isHidden: false,
    };
  },
};
</script>
<style lang="scss" scoped>
  aside {
    border: 1px solid black;
    height: 100%;
    right: 0;
    flex: 1 1;
    position: relative;

    button {
      width: 4em;
      height: 4em;
      position: absolute;
      right: 18.2em;
      visibility: visible;
    }

    &.hidden {
      visibility: invisible;
      flex: none;

      button {
        right: 0;
      }
    }
  }
</style>
