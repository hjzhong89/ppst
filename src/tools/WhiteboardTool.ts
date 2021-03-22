const defaultFunction = (e: MouseEvent, canvas: Element, ctx: CanvasRenderingContext2D) => {
  console.log(e, canvas, ctx);
};

export default class WhiteboardTool {
  // eslint-disable-next-line class-methods-use-this
  onMouseDown(e: MouseEvent, canvas: Element, ctx: CanvasRenderingContext2D) {
    defaultFunction(e, canvas, ctx);
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseUp(e: MouseEvent, canvas: Element, ctx: CanvasRenderingContext2D) {
    defaultFunction(e, canvas, ctx);
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseMove(e: MouseEvent, canvas: Element, ctx: CanvasRenderingContext2D) {
    defaultFunction(e, canvas, ctx);
  }
}
