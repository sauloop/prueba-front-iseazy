<template>
  <div class="mx-auto max-w-4xl">
    <h1 class="p-20 text-center">Prueba desarrollo front-end isEazy</h1>

    <div class="flex justify-center">
      <button type="button" class="btn btn-primary" @click="showModal = true">
        Comentarios
      </button>
    </div>

    <ComentariosModal :show="showModal">
      <template v-slot:cerrarA>
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="cursor-pointer text-3xl text-sky-500 hover:opacity-80"
          @click="showModal = false"
        />
      </template>

      <template v-slot:cerrarB>
        <font-awesome-icon
          icon="fa-solid fa-circle-xmark"
          @click="showModal = false"
          class="text-4xl text-gray-700 hover:opacity-80"
        />
      </template>
    </ComentariosModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ComentariosModal from "./components/ComentariosModal.vue";

const showModal = ref(false);
</script>
