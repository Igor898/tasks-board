<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <input
      v-model="taskText"
      type="text"
      placeholder="Добавить задачу"
      required
      class="task-input"
    />
    <button type="submit" class="task-button">Добавить</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/taskStore';

const taskText = ref('');
const taskStore = useTaskStore();

const handleSubmit = () => {
  taskStore.addTask(taskText.value);
  taskText.value = '';
};
</script>

<style scoped>
.task-form {
  display: flex;
  margin-bottom: 20px;
}

.task-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.task-input:focus {
  border-color: #42b983;
}

.task-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.task-button:hover {
  background-color: #3aa876;
}
</style>