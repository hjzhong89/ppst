<template>
  <div class="view-container">
    <h3>{{ problemSet.name }}</h3>
    <h1>{{ name }}</h1>
    <div class="details">
      <hr/>
      <div class="detail">
        <h5>Acceptance Criteria:</h5>
        <MarkdownEditor class="ac-editor"
                        v-model="acceptanceCriteria"
                        :default-text="acceptanceCriteria"/>
      </div>
      <div class="detail">
        <h5>Estimate:</h5>
        <input v-model="estimate">
      </div>
      <div class="detail">
        <h5>Description:</h5>
        <MarkdownEditor v-model="description"
                        :default-text="description"
        ></MarkdownEditor>
      </div>
    </div>

    <div class="sessions">
      <hr/>
      <div v-for="session in sessions"
           v-bind:key="session.id"
           class="session">
        <span>{{ session.name }}</span>
        <div class="justify-end">
          <div class="users">
            <div v-for="user in session.users"
                 v-bind:key="user[0]"
                 class="user">
              {{ user[0] }}
            </div>
          </div>
          <button class="join-btn">Join</button>
        </div>
      </div>
    </div>
    <Whiteboard style="width: 100%;"></Whiteboard>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor.vue';
import Whiteboard from '@/components/Whiteboard.vue';

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

const defaultSessions = [
  {
    id: 1,
    name: 'Session 1',
    users: ['Henry', 'Jaime'],
  },
];

export default {
  name: 'ProblemDetail',
  components: { Whiteboard, MarkdownEditor },
  data() {
    return { ...defaultProblem, sessions: defaultSessions };
  },
};
</script>

<style scoped>
.details, .sessions {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.detail input {
  padding: 5px;
}

.session {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px;
  background: lightgray;
  font-weight: bold;
  text-anchor: middle;

}

.session span {
  align-self: start;
}

.ac-editor .md-editor {
  height: 15px;
  border: none;
}

.users {
  display: flex;
  flex-direction: row;
}

.user {
  padding: 5px;
  border-radius: 45%;
  background: white;
  margin: 0 2px;
}

.join-btn {
  border-radius: 2px;
  border: none;
  margin: 0 10px;
}

.justify-end {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
