import WhiteboardTool from '@/tools/WhiteboardTool';

export default class PaintBrush extends WhiteboardTool {
  radius: number;

  color: string;

  constructor({
    radius, color,
  } = {
    radius: 10,
    color: '#000',
  }) {
    super();
    this.radius = radius;
    this.color = color;
  }

  onMouseDown(e: MouseEvent, canvas: Element, ctx: CanvasRenderingContext2D) {
    const canvasX = e.pageX - canvas.offsetLeft;
    const canvasY = e.pageY - canvas.offsetTop;
    console.log(canvasX, canvasY);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 0.1 * this.radius;
    ctx.strokeStyle = this.color;

    ctx.beginPath();
    ctx.moveTo(canvasX, canvasY);
    ctx.closePath();
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseUp(e: MouseEvent, canvas: Element, ctx: CanvasRenderingContext2D) {
    ctx.closePath();
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseMove(e: MouseEvent, canvas: Element, ctx: CanvasRenderingContext2D) {
    const canvasX = e.pageX - canvas.offsetLeft;
    const canvasY = e.pageY - canvas.offsetTop;
    ctx.lineTo(canvasX, canvasY);
    ctx.stroke();
  }
}
