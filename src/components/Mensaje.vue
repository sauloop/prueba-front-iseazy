<template>
  <div class="m-10 flex justify-end rounded-md bg-blue-500 p-8 text-white">
    <div class="text-lg">
      <p>{{ mensaje.id }}</p>
      <p>{{ mensaje.texto }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mensaje: Object,
});
</script>
