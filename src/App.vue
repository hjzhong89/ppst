<template>
  <div id="app">
    <div id="top-nav"></div>
    <div id="body-container">
      <div id="side-bar"></div>
      <div id="content">
        <ProblemDetail></ProblemDetail>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProblemSets from '@/views/ProblemSets.vue';
import ProblemDetail from '@/views/ProblemDetail.vue';

@Component({
  components: {
    ProblemDetail,
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

#top-nav {
  width: 100%;
  height: 50px;
  background: #2c3e50;
  margin: 0;
}

#body-container {
  display: flex;
  flex-direction: row;
}

#side-bar {
  width: 25px;
  min-height: 600px;
  background: oldlace;
}

#content {
  margin: 18px;
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
