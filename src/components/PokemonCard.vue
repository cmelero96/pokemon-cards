<template>
  <card-wrapper>
    <template v-slot:header>{{ pokemon.name }}</template>
    <template v-slot:default><img :src="pokemon.image"></template>
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
