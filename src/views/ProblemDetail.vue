<template>
  <div class="view-container">
    <h3>{{problemSet.name}}</h3>
    <h1>{{name}}</h1>
    <div class="details">
      <hr/>
      <div class="detail">
        <h5>Acceptance Criteria:</h5>
        <MarkdownEditor class="ac-editor"
                        v-model="acceptanceCriteria"
                        :default-text="acceptanceCriteria"/>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor.vue';

const defaultProblem = {
  problemSet: {
    name: 'CS101: Sorting Algorithms',
  },
  name: 'Design and implement an algorithm to sort an array of integers',
  acceptanceCriteria: '1. An algorithm is implemented to sort an array of integers in ascending order.',
  estimate: 3,
  description: `
  # Objective

  Given an rray of integers, return the sorted integers in ascending order.

  # Details

  1. You can create enw arrays or modify the existing array
  `,
};
export default {
  name: 'ProblemDetail',
  components: { MarkdownEditor },
  data() {
    return { ...defaultProblem };
  },
};
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.detail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.ac-editor .md-editor {
  height: 15px;
  border: none;
}
</style>
