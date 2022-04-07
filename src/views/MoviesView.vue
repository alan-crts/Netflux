<template>
  <div>
    <MainCategorie
      v-for="Categorie in Categories"
      :key="Categorie.text"
      :text="Categorie.text"
      :link="Categorie.link"
    />
  </div>

  <ModalCard v-show="isModalVisible" @close="closeModal" :data="info" />
</template>

<script>
import MainCategorie from "@/components/MainCategorie.vue";
import ModalCard from "@/components/Modal.vue";

export default {
  name: "MainPage",
  components: {
    MainCategorie,
    ModalCard,
  },
  data: function () {
    return {
      Categories: [
        { text: "Populaire", link: "movie/popular" },
        { text: "À l'affiche", link: "movie/now_playing" },
        { text: "Bientôt à l'affiche", link: "movie/upcoming" },
        { text: "Meilleure note", link: "movie/top_rated" },
      ],
      type: "movies",
      isModalVisible: false,
      info: {},
    };
  },
  methods: {
    showModal(data) {
      this.info = data;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  created() {
    document.title = "Netflux - Films";
  }
};
</script>
