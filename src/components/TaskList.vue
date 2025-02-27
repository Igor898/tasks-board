<template>
  <ul class="task-list">
    <TransitionGroup name="slide">
      <TaskItem
        v-for="task in taskStore.filteredTasks"
        :key="task.id"
        :task="task"
      />
    </TransitionGroup>
  </ul>
</template>

<script setup>
import TaskItem from './TaskItem.vue';
import { useTaskStore } from '../stores/taskStore';

const taskStore = useTaskStore();
</script>

<style scoped>
.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>