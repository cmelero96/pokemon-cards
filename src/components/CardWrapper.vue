<template>
  <div class="card-wrapper">
    <header>
    <slot name="header"></slot>
    </header>
    <section>
      <slot></slot>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  border: 3px solid black;
  border-radius: 1em;
  width: 20em;
  height: 20em;
  margin: 2em auto;
  box-sizing: border-box;

    header {
      font-size: large;
      font-weight: bolder;
      border-bottom: 2px solid black;
      height: 3em;
      padding: 1em;
    }

    section {
      width: auto;
      height: 16.3em;
    }
}
</style>
