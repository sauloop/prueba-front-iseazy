<template>
  <div class="mx-auto max-w-4xl">
    <h1 class="p-10 text-center">Prueba desarrollo front-end isEazy</h1>

    <div class="flex justify-center p-10">
      <button type="button" class="btn btn-primary" @click="showModal = true">
        Comentarios
      </button>
    </div>

    <ComentariosModal :show="showModal">
      <button
        type="button"
        class="btn btn-primary mt-4"
        @click="showModal = false"
      >
        Cerrar
      </button>
    </ComentariosModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ComentariosModal from "./components/ComentariosModal.vue";

const showModal = ref(false);
</script>
