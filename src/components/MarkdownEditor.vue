<template>
  <div class="md-editor-container">
    <div class="md-editor">
      <div class="md-view"
           v-if="!isEditing"
           v-on:click="toggleEdit"
      >
        <div v-html="md"></div>
      </div>
      <textarea class="md-edit"
                v-if="isEditing"
                v-model="rawText"
      ></textarea>
    </div>
    <div class="change-btn"
         v-on:click="toggleEdit">
      Submit
    </div>
  </div>
</template>

<script>
import * as marked from 'marked';
import * as purify from 'dompurify';

export default {
  name: 'MarkdownEditor',
  props: {},
  computed: {
    md() {
      if (!this.rawText) {
        return '';
      }
      return purify.sanitize(marked(this.rawText));
    },
  },
  data() {
    return {
      isEditing: false,
      rawText: '',
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
  },
};
</script>

<style scoped>
.md-editor {
  width: 100%;
  border: #2c3e50 solid 1px;
}

.md-view {
  width: 100%;
  cursor: pointer;
  padding: 8px;
}

.md-edit {
  width: 100%;
  padding: 8px;
  min-height: 300px;
}
</style>
