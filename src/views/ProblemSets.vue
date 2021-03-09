<template>
  <div class="view-container">
    <h1>{{title}}</h1>
    <div class="">
      <h4>Description</h4>
      <MarkdownEditor raw-text="# This is some text"></MarkdownEditor>
    </div>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor.vue';

export default {
  name: 'ProblemSets',
  components: { MarkdownEditor },
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>

</style>
