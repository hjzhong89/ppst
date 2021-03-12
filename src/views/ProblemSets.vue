<template>
  <div class="view-container">
    <div class="problemset-title">{{title}}</div>
    <div class="details">
      <h4>Description</h4>
      <MarkdownEditor :default-text="description" />
    </div>
    <div class="problems">
      <hr/>
      <h3>Problems</h3>
      <p v-for="problem in problems"
         v-bind:key="problem.id">
        {{problem.name}}
      </p>
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor.vue';

const description = `# Overview
Sorting algorithms rearrange elements in a list by some comparison operator`;
const problems = [
  {
    id: 1,
    name: 'Design an implement an algorithm to sort an array of integers',
  },
  {
    id: 2,
    name: 'Quicksort an array of Strings',
  },
  {
    id: 3,
    name: 'Sort a list of words by word length',
  },
];

export default {
  name: 'ProblemSets',
  components: { MarkdownEditor },
  props: {},
  data() {
    return {
      title: 'CS1001: Sorting Algorithms',
      editTitle: false,
      description: description,
      problems: problems,
    };
  },
};
</script>

<style scoped>
.problemset-title {
  width: 100%;
  font-size: 1.5em;
  font-weight: bold;
}
.view-container {
  width: 100%;
}
</style>
