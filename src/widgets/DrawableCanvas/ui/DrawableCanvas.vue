<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useCanvasStore } from '@/entities/canvas/model/store';
import { FabricCanvasAdapter } from '@/shared/lib/canvas-adapter/fabric-adapter';
import type { CanvasAdapter } from '@/shared/lib/canvas-adapter/types';

const canvasEl = ref<HTMLCanvasElement | null>(null);
const canvasContainer = ref<HTMLElement | null>(null);
const canvasStore = useCanvasStore();

let canvasAdapter: CanvasAdapter | null = null;
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  if (canvasEl.value && canvasContainer.value) {
    canvasAdapter = new FabricCanvasAdapter();
    canvasAdapter.init(canvasEl.value);

    // Sync canvas size with container size
    resizeObserver = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      canvasAdapter?.setSize(width, height);
    });
    resizeObserver.observe(canvasContainer.value);

    // Load initial paths from store
    if (canvasStore.paths.length > 0) {
      canvasAdapter.loadPaths(canvasStore.paths);
    }

    // Listen for new paths from fabric and update store
    canvasAdapter.on('path:created', (e: any) => {
      // In a real app, you might want to serialize the path object
      // For now, we store the fabric object itself
      canvasStore.addPath(e.path);
    });
  }
});

onUnmounted(() => {
  canvasAdapter?.destroy();
  if (resizeObserver && canvasContainer.value) {
    resizeObserver.unobserve(canvasContainer.value);
  }
});

// Watch for external changes to the store (e.g., clear canvas)
watch(() => canvasStore.paths, (newPaths, oldPaths) => {
  // Simple check to see if canvas was cleared
  if (newPaths.length === 0 && oldPaths.length > 0) {
    canvasAdapter?.clear();
  }
  // More complex logic would be needed for selective path updates
}, { deep: true });

// Expose methods to parent components if needed
defineExpose({
  enableDrawing: () => canvasAdapter?.enableDrawingMode(),
  disableDrawing: () => canvasAdapter?.disableDrawingMode(),
  clearCanvas: () => canvasStore.clearCanvas(),
});

</script>

<template>
  <div ref="canvasContainer" class="relative w-full h-full">
    <div class="absolute top-0 left-0 w-full h-full">
      <slot></slot>
    </div>
    <canvas ref="canvasEl" class="absolute top-0 left-0 w-full h-full z-10"></canvas>
  </div>
</template>
