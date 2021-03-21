<template>
  <div class="whiteboard-container">
    <canvas class="whiteboard"
            v-on:mousedown="onMouseDown"
            v-on:mouseup="onMouseUp"
            v-on:mousemove="onMouseMove"
    ></canvas>
  </div>
</template>

<script>
import WhiteboardTool from '@/tools/WhiteboardTool';

export default {
  name: 'Whiteboard',
  computed: {
    canvas() {
      return this.$children[0];
    },
  },
  data() {
    return {
      mouseDown: false,
      tool: new WhiteboardTool(),
    };
  },
  methods: {
    onMouseDown(e) {
      this.isDown = true;
      this.tool.onMouseDown(e, this.$el.querySelector('.whiteboard'));
    },
    onMouseMove(e) {
      if (this.isDown) {
        this.tool.onMouseMove(e, this.$el.querySelector('.whiteboard'));
      }
    },
    onMouseUp(e) {
      this.isDown = false;
      this.tool.onMouseUp(e, this.$el.querySelector('.whiteboard'));
    },
  },
};
</script>

<style scoped>
.whiteboard-container {
  min-width: 600px;
  min-height: 366px;
}
.whiteboard {
  width: 100%;
  border: solid black thin;
}
</style>
