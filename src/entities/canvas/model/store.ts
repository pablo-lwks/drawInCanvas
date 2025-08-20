import { defineStore } from 'pinia'

export const useCanvasStore = defineStore('canvas', {
  state: () => ({
    // a list of paths, each path is a list of points
    paths: [] as { x: number; y: number }[][],
  }),
  actions: {
    addPath(path: { x: number; y: number }[]) {
      this.paths.push(path)
    },
    clearCanvas() {
      this.paths = []
    },
  },
})
