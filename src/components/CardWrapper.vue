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

<style scoped lang="scss">
.card-wrapper {
  border: 3px solid black;
  border-radius: 1em;
  width: fit-content;
  margin: 2em auto;

    header {
      font-size: large;
      font-weight: bolder;
      border-bottom: 2px solid black;
      padding: 1em 0 0.5em;
      margin: -1px;
    }

    section {
      padding: 1em;
    }
}
</style>
