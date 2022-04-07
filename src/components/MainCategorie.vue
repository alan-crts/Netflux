<template>
  <h1>{{ text }} :</h1>
  <div class="cat">
    <CategorieItem
      v-for="film in posts"
      :key="film.original_title"
      :data="film"
    />
  </div>
</template>

<script>
import CategorieItem from "./CategorieItem.vue";

export default {
  name: "MainCategorie",
  props: ["text", "link"],
  components: {
    CategorieItem,
  },
  data: function () {
    return {
      posts: [],
    };
  },
  methods: {
    async getData() {
      try {
        let response = await fetch("https://api.themoviedb.org/3/" + this.$props.link + "?api_key=e56bed4c30ae6d01ea9df6c374fe2d04&language=fr-FR&page=1");
        response = await response.json();
        this.posts = response.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.cat {
  margin: 0 0 5em;
  display: flex;
  flex-direction: row;
  overflow: auto;
}

.cat:last-of-type {
    margin: 0;
}

.cat::-webkit-scrollbar {
  height: 8px;
}

.cat::-webkit-scrollbar-thumb {
  opacity: .3;
  border-radius: 4px;
  background: #FFF;
}

h1 {
  margin: 0 0 0 1em;
  text-decoration: underline;
}
</style>
