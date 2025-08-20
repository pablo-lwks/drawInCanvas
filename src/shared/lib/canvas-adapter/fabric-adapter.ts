import { fabric } from 'fabric';
import type { CanvasAdapter } from './types';

export class FabricCanvasAdapter implements CanvasAdapter {
  private canvas: fabric.Canvas | null = null;

  init(canvasElement: HTMLCanvasElement, options?: fabric.ICanvasOptions): void {
    this.canvas = new fabric.Canvas(canvasElement, {
      isDrawingMode: false,
      ...options,
    });
  }

  getCanvas(): fabric.Canvas | null {
    return this.canvas;
  }

  enableDrawingMode(): void {
    if (this.canvas) {
      this.canvas.isDrawingMode = true;
    }
  }

  disableDrawingMode(): void {
    if (this.canvas) {
      this.canvas.isDrawingMode = false;
    }
  }

  on(event: string, handler: (e: fabric.IEvent) => void): void {
    this.canvas?.on(event, handler);
  }

  off(event: string, handler: (e: fabric.IEvent) => void): void {
    this.canvas?.off(event, handler);
  }

  clear(): void {
    this.canvas?.clear();
  }

  getPaths(): any[] {
    return this.canvas?.getObjects('path') || [];
  }

  loadPaths(paths: any[]): void {
    fabric.util.enlivenObjects(paths, (objects: fabric.Object[]) => {
      this.canvas?.clear();
      objects.forEach(o => this.canvas?.add(o));
      this.canvas?.renderAll();
    });
  }

  destroy(): void {
    this.canvas?.dispose();
    this.canvas = null;
  }

  setSize(width: number, height: number): void {
    this.canvas?.setWidth(width);
    this.canvas?.setHeight(height);
    this.canvas?.renderAll();
  }
}
