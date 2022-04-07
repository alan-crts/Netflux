<template>
<div class="container">
  <img src="../assets/logo.png" alt="Netflux logo" />
  <div>
    <MenuLink
      v-for="item in items"
      :key="item.name"
      :link="item.url"
      :text="item.name"
    />
  </div>
  </div>
</template>

<script>
import MenuLink from "./MenuLink.vue";

export default {
  name: "HeaderMenu",
  components: { MenuLink },
  data: function () {
    return {
      items: [
        {
          name: "Films",
          url: "/movies",
        },
        {
          name: "Séries",
          url: "/series",
        }
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  margin: 0;
}
img {
  width: 8em;
  position: absolute;
}

.container {
    width: 98vw;
    display: flex;
    flex-direction: row;
    height: 44px;
    padding: 1vw;
    background-color: #23002F;
}

.container div {
  width: 50vw;
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-evenly;
}
</style>
