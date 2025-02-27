<template>
  <li class="task-item">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="taskStore.toggleCompletion(task.id)"
      class="task-checkbox"
    />
    <span :class="{ completed: task.completed }" class="task-text">
      {{ task.text }}
    </span>
    <button @click="editTask" class="task-button edit-button"><i class="fas fa-edit"></i></button>
    <button @click="taskStore.deleteTask(task.id)" class="task-button delete-button"><i class="fas fa-trash-alt"></i></button>
  </li>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore';

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const taskStore = useTaskStore();

const editTask = () => {
  const newText = prompt('Редактировать задачу:', props.task.text);
  if (newText !== null) {
    taskStore.editTask(props.task.id, newText);
  }
};
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.task-item:hover {
  background-color: #f1f1f1;
  transform: translateY(-2px);
}

.task-checkbox {
  margin-right: 10px;
  cursor: pointer;
}

.task-text {
  flex: 1;
  font-size: 16px;
  color: #333;
}

.task-text.completed {
  text-decoration: line-through;
  color: #888;
}

.task-button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.edit-button {
  background-color: #ffc107;
  color: white;
}

.edit-button:hover {
  background-color: #e0a800;
}

.delete-button {
  background-color: #dc3545;
  color: white;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>