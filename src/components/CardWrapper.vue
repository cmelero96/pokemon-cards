<template>
  <div class="card-wrapper">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  border: 3px solid black;
  border-radius: 1em;
  width: fit-content;
  margin: 2em auto;
}
</style>
