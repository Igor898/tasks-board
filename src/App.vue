<template>
  <div class="app">
    <h1>Junior test</h1>
    <TaskForm />
    <TaskFilter />
    <TaskList />
  </div>
</template>

<script setup>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import TaskFilter from './components/TaskFilter.vue';
import { useTaskStore } from './stores/taskStore';
import { onMounted } from 'vue';

const taskStore = useTaskStore();

onMounted(() => {
  taskStore.loadTasks();
});
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
} 

.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #42b983;
  margin-bottom: 20px;
}

/* Анимации */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>