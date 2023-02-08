<template>
  <div class="m-10 flex justify-start bg-white p-10 text-white">
    <div>
      <h4>VERSIÓN {{ entrega.numVersion }}</h4>
      <h2>{{ entrega.nombre }}</h2>
      <h4>{{ entrega.fecha }}</h4>
    </div>
  </div>
</template>

<script setup>
defineProps({
  entrega: Object,
});
</script>
