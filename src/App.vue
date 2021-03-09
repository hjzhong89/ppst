<template>
  <div id="app">
    <ProblemSets title="CS6460: Sorting Algorithms"></ProblemSets>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProblemSets from '@/views/ProblemSets.vue';

@Component({
  components: {
    ProblemSets,
  },
})
export default class App extends Vue {}
</script>

<style>
html, body, #app {
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.view-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
