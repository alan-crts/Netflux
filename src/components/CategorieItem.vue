<template>
  <div :style="'background-image: url(https://image.tmdb.org/t/p/original' + data.poster_path  + ');'" @click="this.$parent.$parent.showModal(this.data)" v-if="this.$parent.$parent.showModal">
          <span>{{ data.vote_average }}/10</span>
  </div>
    <div :style="'background-image: url(https://image.tmdb.org/t/p/original' + data.poster_path  + ');'" v-if="!this.$parent.$parent.showModal">
          <span>{{ data.vote_average }}/10</span>
  </div>
</template>

<script>
export default {
  name: "CategorieItem",
  props: ["data"]
};
</script>

<style scoped>

div:hover {
    transform: scale(1.1);
    cursor: pointer;
}

div:active {
    transform: scale(1);
}

div {
    min-width: 10em;
    height: 15em;
    margin: 1em;
    border-radius: 5px;
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
    transition: transform .2s ease-in-out;
}

span {
  border-radius: 5px 0;
  padding: 0 .4em;
    opacity: 0.7;
    color: #000;
    background-color: #fff;
}
</style>
