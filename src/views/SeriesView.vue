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
        { text: "Populaire", link: "tv/popular" },
        { text: "En diffusion", link: "tv/on_the_air" },
        { text: "Meilleure note", link: "tv/top_rated" },
      ],
      type: "series",
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
    document.title = "Netflux - Séries";
  }
};
</script>
