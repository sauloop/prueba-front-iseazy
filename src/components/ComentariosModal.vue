<template>
  <!-- Render dentro de `<div id="modals"></div>` en index.html -->
  <Teleport to="#modals">
    <!-- Mostrar / ocultar el modal -->
    <div v-if="show">
      <!-- El fondo -->
      <div class="fixed inset-0 bg-gray-900 opacity-40"></div>

      <!-- Contenido -->
      <div class="fixed inset-0 flex h-auto">
        <div
          class="mx-20 my-10 w-full overflow-y-auto rounded-md bg-white scrollbar-none"
        >
          <div class="relative">
            <div class="absolute top-10 right-10">
              <slot name="cerrarA"></slot>
            </div>
          </div>

          <div class="mt-8 flex justify-center text-lg">
            <h3>Comentarios</h3>
          </div>

          <hr class="mx-10 mt-6 h-px border-0 bg-gray-200 dark:bg-gray-700" />

          <div>
            <template
              v-for="comentario in comentariosStore.comentarios"
              :key="comentario.id"
            >
              <Mensaje
                v-if="comentario.elemento === 'mensaje'"
                :mensaje="comentario"
              />
              <Mensaje
                v-if="comentario.elemento === 'mensaje-respuesta'"
                :mensaje="comentario"
              />
              <Entrega
                v-if="comentario.elemento === 'entrega'"
                :entrega="comentario"
              />
            </template>
          </div>

          <div>
            <form class="m-10 flex justify-between">
              <input
                :value="mensaje"
                @input="(event) => (mensaje = event.target.value)"
                class="mr-8 inline-block w-full rounded-full border bg-gray-200 px-10 font-bold"
              />

              <button
                type="button"
                class="btn btn-primary"
                @click="nuevoMensaje"
              >
                <font-awesome-icon icon="fa-solid fa-paper-plane" />
              </button>
            </form>
          </div>
          <div class="m-10 flex justify-center">
            <slot name="cerrarB"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useComentariosStore } from "../stores/comentarios";
import { ref } from "vue";
import Mensaje from "./Mensaje.vue";
import Entrega from "./Entrega.vue";

defineProps({
  show: Boolean,
});

const mensaje = ref("");
const comentariosStore = useComentariosStore();

function nuevoMensaje() {
  comentariosStore.nuevoMensaje(mensaje.value);
  mensaje.value = "";
}
</script>
