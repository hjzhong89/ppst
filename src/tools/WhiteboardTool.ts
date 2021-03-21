import Vue from 'vue';

const defaultFunction = (e: Event, canvas: Vue) => {
  console.log(e, canvas);
};

export default class WhiteboardTool {
  // eslint-disable-next-line class-methods-use-this
  onMouseDown(e: Event, canvas: Vue) {
    defaultFunction(e, canvas);
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseUp(e: Event, canvas: Vue) {
    defaultFunction(e, canvas);
  }

  // eslint-disable-next-line class-methods-use-this
  onMouseMove(e: Event, canvas: Vue) {
    defaultFunction(e, canvas);
  }
}
