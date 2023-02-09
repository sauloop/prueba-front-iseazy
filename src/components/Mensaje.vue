<template>
  <div
    class="mx-10 my-8 w-auto rounded-md px-8 py-4"
    :class="{
      'ml-96 bg-sky-500 text-white': mensaje.elemento === 'mensaje',
      'mr-96  bg-gray-200 text-black': mensaje.elemento === 'mensaje-respuesta',
    }"
  >
    <div class="flex w-full justify-start">
      <div>
        <p class="text-lg font-bold">{{ mensaje.texto }}</p>
        <p class="mt-2 text-sm">{{ mensaje.fecha }}</p>
      </div>
    </div>
  </div>
  <hr class="my-2 mx-10 h-px border-0 bg-gray-200 dark:bg-gray-700" />
</template>

<script setup>
defineProps({
  mensaje: Object,
});
</script>
