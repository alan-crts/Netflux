<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header
        class="modal-header"
        :style="
          'background-image: url(https://image.tmdb.org/t/p/original' +
          data.backdrop_path +
          ');'
        "
      >
        <slot name="header">
          <div>
            <h1 v-if="this.$parent.type == 'movies'">{{ data.title }}</h1>
            <h1 v-if="this.$parent.type == 'series'">{{ data.name }}</h1>
            <button type="button" class="btn-close" @click="close">x</button>
          </div>
        </slot>
      </header>

      <section class="modal-body">
        <slot name="body">
          <p v-if="this.$parent.type == 'movies'">
            <span class="underline">Sortie le :</span>
            {{ new Date(data.release_date).toLocaleDateString("fr-FR") }}
          </p>
          <p v-if="this.$parent.type == 'series'">
            <span class="underline">Sortie le :</span>
            {{ new Date(data.first_air_date).toLocaleDateString("fr-FR") }}
          </p>
          <p>
            <span class="underline">Note moyenne du publique :</span>
            {{ data.vote_average }}/10 sur {{ data.vote_count }} votes
          </p>
          <p>
            <span class="underline" v-if="data.overview != ''">Synopsis :</span>
            {{ data.overview }}
          </p>
          <MainCategorie
            text="Films similaires"
            :link="'movie/' + data.id + '/similar'"
            v-if="data.id != undefined && renderComponent == true && this.$parent.type == 'movies'"
          />
                    <MainCategorie
            text="Films similaires"
            :link="'tv/' + data.id + '/similar'"
            v-if="data.id != undefined && renderComponent == true && this.$parent.type == 'series'"
          />
        </slot>
      </section>
    </div>
  </div>
</template>

<script>
import MainCategorie from "./MainCategorie.vue";

export default {
  components: {
    MainCategorie,
  },
  name: "ModalCard",
  props: ["data"],
  data: function () {
    return {
      renderComponent: true,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  watch: {
    data: function () {
      this.renderComponent = false;
      this.$nextTick(function () {
        this.renderComponent = true;
      });
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #23002f;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 10px;
}

.modal-header,
.modal-footer {
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #ffffff;
  color: #dd9296;
  justify-content: space-between;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;
  height: 30vh;
}

.modal-header div {
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    rgba(0, 0, 0, 0.6) 40%,
    rgba(0, 212, 255, 0) 100%
  );
  height: 30%;
}

.modal-header h1 {
  margin: 0.2em 0 0 0.5em;
  border-radius: 5px;
  font-size: 30px;
}

.modal-body {
  position: relative;
  padding: 0 5px 10px 10px;
}

.btn-close {
  position: absolute;
  top: 0.2em;
  right: 0.4em;
  border: none;
  font-size: 30px;
  cursor: pointer;
  font-weight: bold;
  color: #cc40a0;
  background: transparent;
  transition: transform 0.3s;
}

.btn-close:hover {
  transform: translate(1px, -1px);
}

.underline {
  text-decoration: underline;
}
</style>
