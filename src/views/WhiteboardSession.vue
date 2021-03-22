<template>
  <div class="whiteboard-session-container">
    <h1>Jaime's Whiteboard</h1>
    <Whiteboard style="height: 600px; width: 600px;"/>
    <div class="problem-modal">
      <div class="modal-tag" v-on:click="toggleModal">
        Problem
        <span v-if="!showProblem">&lt;&lt;</span>
        <span v-if="showProblem">&gt;&gt;</span>
      </div>
      <div class="modal-content">
        <ProblemDetail/>
      </div>
    </div>
  </div>
</template>

<script>
import Whiteboard from '@/components/Whiteboard.vue';
import ProblemDetail from "@/views/ProblemDetail";

export default {
  name: 'WhiteboardSession',
  components: {ProblemDetail, Whiteboard},
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    modalWidth() {
      return this.modal.clientWidth;
    },
    tagWidth() {
      return this.tag.clientWidth;
    },
    modalOffset() {
      return this.tagWidth - this.modalWidth + 20;
    }
  },
  data() {
    return {
      showProblem: true,
      modal: {},
    };
  },
  mounted() {
    this.modal = this.$el.getElementsByClassName('problem-modal')[0]
    this.tag = this.modal.getElementsByClassName('modal-tag')[0];
    this.modal.style.right = '0px'
  },
  methods: {
    toggleModal() {
      if (!this.showProblem) {
        this.modal.style.right = '0';
      } else {
        this.modal.style.right = `${this.modalOffset}px`
      }

      this.showProblem = !this.showProblem;
    },
  },
};
</script>

<style scoped>
.whiteboard-session-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.problem-modal {
  position: fixed;
  right: 0;
  top: 0;
  width: 40%;
  background: white;
  padding: 20px;
  filter: drop-shadow(5px 0 4px #999);
  display: flex;
  flex-direction: row;
}

.modal-tag {
  display: flex;
  flex-direction: row;
  padding: 20px;
  alignment-baseline: baseline;
  cursor: pointer;
}

.modal-content {
  padding: 20px;
}
</style>
