<template>
  <!-- Render dentro de `<div id="modals"></div>` en index.html -->
  <Teleport to="#modals">
    <!-- Mostrar / ocultar el modal -->
    <div v-if="show">
      <!-- El fondo -->
      <div class="fixed inset-0 bg-gray-900 opacity-40"></div>

      <!-- Contenido -->
      <div class="fixed inset-0 mt-10 flex h-auto">
        <div
          class="m-20 w-full overflow-y-auto rounded-md bg-white text-gray-900 scrollbar-none"
        >
          <div class="relative">
            <div class="absolute top-10 right-10"><slot></slot></div>
          </div>

          <div class="flex justify-center p-10 text-lg">
            <h2>Comentarios</h2>
          </div>

          <div>
            <ul>
              <li v-for="comentario in comentariosStore.comentarios">
                <Mensaje
                  v-if="comentario.elemento === 'mensaje'"
                  :mensaje="comentario"
                />
                <Entrega v-else :entrega="comentario" />
              </li>
            </ul>
          </div>

          <div class="m-10 flex justify-between">
            <input
              :value="mensaje"
              @input="(event) => (mensaje = event.target.value)"
              class="mr-8 inline-block w-full rounded-full border px-10"
            />

            <button type="button" class="btn btn-primary" @click="nuevoMensaje">
              <font-awesome-icon icon="fa-solid fa-paper-plane" />
            </button>
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
