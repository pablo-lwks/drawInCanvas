export interface CanvasAdapter {
  init(canvasElement: HTMLCanvasElement, options?: any): void;
  getCanvas(): any;
  enableDrawingMode(): void;
  disableDrawingMode(): void;
  on(event: string, handler: (e: any) => void): void;
  off(event: string, handler: (e: any) => void): void;
  clear(): void;
  getPaths(): any[];
  loadPaths(paths: any[]): void;
  destroy(): void;
  setSize(width: number, height: number): void;
}
