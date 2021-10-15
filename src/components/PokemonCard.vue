<template>
  <card-wrapper>
    <template v-slot:header>
      <header>{{ pokemon.name }}</header>
    </template>
    <template v-slot:default>
      <section><img :src="pokemon.image"></section>
    </template>
  </card-wrapper>
</template>

<script>
import CardWrapper from './CardWrapper.vue';

export default {
  components: { CardWrapper },
  props: {
    pokemon: {
      type: Object,
      required: true,
      validator(obj) {
        return obj.image && obj.name;
      },
    },
  },
};
</script>

<style scoped lang="scss">
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
</style>
