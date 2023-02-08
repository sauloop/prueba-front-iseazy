<template>
  <div class="m-10 flex justify-start bg-white py-10 text-white">
    <div class="flex w-full items-center justify-between">
      <div>
        <p class="text-lg font-bold text-gray-600">
          VERSIÓN {{ entrega.numVersion }}
        </p>
        <p class="mt-1 text-xl font-bold text-blue-500">{{ entrega.nombre }}</p>
        <p class="mt-1 mr-6 inline-block text-xl font-medium text-gray-600">
          {{ entrega.tipo }}
        </p>
        <p class="mt-1 inline-block text-xl font-medium text-gray-600">
          {{ entrega.fecha }}
        </p>
      </div>

      <font-awesome-icon
        icon="fa-solid fa-cloud-arrow-down"
        class="cursor-pointer text-4xl text-blue-500"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  entrega: Object,
});
</script>
