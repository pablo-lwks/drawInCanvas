<script setup lang="ts">
import { ref } from 'vue';
import { DrawableCanvas } from '@/widgets/DrawableCanvas';

const drawableCanvas = ref<InstanceType<typeof DrawableCanvas> | null>(null);

function enableDrawing() {
  drawableCanvas.value?.enableDrawing();
}

function disableDrawing() {
  drawableCanvas.value?.disableDrawing();
}

function clearCanvas() {
  drawableCanvas.value?.clearCanvas();
}
</script>

<template>
  <div class="p-4 flex flex-col items-center gap-4">
    <h1 class="text-2xl font-bold">Drawable Canvas Demo</h1>
    <div class="flex gap-4">
      <button @click="enableDrawing" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Enable Drawing</button>
      <button @click="disableDrawing" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Disable Drawing</button>
      <button @click="clearCanvas" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Clear</button>
    </div>
    <DrawableCanvas ref="drawableCanvas" class="w-[800px] h-[400px] border border-gray-300">
      <div class="w-full h-full flex flex-col items-center justify-center bg-gray-100">
        <p class="text-gray-500">This is the background content. Draw on me!</p>
        <img src="https://via.placeholder.com/400x200" alt="Placeholder" class="mt-4" />
      </div>
    </DrawableCanvas>
  </div>
</template>
