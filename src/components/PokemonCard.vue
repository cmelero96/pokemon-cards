<template>
  <card-wrapper>
    <template v-slot:header>{{ pokemon.name }}</template>
    <template v-slot:default>
      <div class='img-wrapper'>
        <img :src="pokemon.image">
      </div>
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
<style lang="scss" scoped>
.img-wrapper {
  padding: 1em;
  width: inherit;
  height: inherit;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }
}
</style>
