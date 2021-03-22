<template>
  <div class="whiteboard-container">
    <canvas class="whiteboard"
            :style="canvasStyle"
            v-on:mousedown="onMouseDown"
            v-on:mouseup="onMouseUp"
            v-on:mousemove="onMouseMove"
    ></canvas>
  </div>
</template>

<script>
import PaintBrush from '@/tools/PaintBrush';

export default {
  name: 'Whiteboard',
  props: {
    canvasStyle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      mouseDown: false,
      tool: {},
      canvas: {},
      ctx: {},
    };
  },
  mounted() {
    // eslint-disable-next-line prefer-destructuring
    this.canvas = this.$el.querySelector('.whiteboard');
    this.canvas.height = this.$el.getBoundingClientRect().height;
    this.canvas.width = this.$el.getBoundingClientRect().width;
    this.ctx = this.$el.querySelector('.whiteboard').getContext('2d');
    this.tool = {};
  },
  methods: {
    onMouseDown(e) {
      this.tool = new PaintBrush({
        radius: 5,
        color: 'black',
      });
      this.isDown = true;
      this.tool.onMouseDown(e, this.canvas, this.ctx);
    },
    onMouseMove(e) {
      if (this.isDown) {
        this.tool.onMouseMove(e, this.canvas, this.ctx);
      }
    },
    onMouseUp(e) {
      this.isDown = false;
      this.tool.onMouseUp(e, this.canvas, this.ctx);
    },
  },
};
</script>

<style scoped>
.whiteboard-container {
  width: 100%;
}
.whiteboard {
  width: 100%;
  border: solid black thin;
  cursor: crosshair;
}
</style>
