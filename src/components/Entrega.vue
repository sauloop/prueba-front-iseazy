<template>
  <div class="mx-10 my-0 flex justify-start bg-white py-8 text-white">
    <div class="flex w-full items-center justify-between">
      <div class="text-lg font-bold">
        <p class="text-gray-700">VERSIÓN {{ entrega.numVersion }}</p>
        <p class="mt-1 text-blue-500">{{ entrega.nombre }}</p>
        <p class="mt-1 mr-6 inline-block text-gray-700">
          {{ entrega.tipo }}
        </p>
        <p class="mt-1 inline-block text-gray-700">
          {{ entrega.fecha }}
        </p>
      </div>

      <font-awesome-icon
        icon="fa-solid fa-cloud-arrow-down"
        class="cursor-pointer text-4xl text-sky-500"
      />
    </div>
  </div>
  <hr class="my-2 mx-10 h-px border-0 bg-gray-200 dark:bg-gray-700" />
</template>

<script setup>
defineProps({
  entrega: Object,
});
</script>
