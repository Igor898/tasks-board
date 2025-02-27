<template>
  <div class="task-filter">
    <label class="filter-label">
      <input
        type="radio"
        v-model="taskStore.filter"
        value="all"
        class="filter-radio"
      />
      <span class="custom-radio"></span>
      Все
    </label>
    <label class="filter-label">
      <input
        type="radio"
        v-model="taskStore.filter"
        value="completed"
        class="filter-radio"
      />
      <span class="custom-radio"></span>
      Выполненные
    </label>
    <label class="filter-label">
      <input
        type="radio"
        v-model="taskStore.filter"
        value="incomplete"
        class="filter-radio"
      />
      <span class="custom-radio"></span>
      Невыполненные
    </label>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore';

const taskStore = useTaskStore();
</script>

<style scoped>
.task-filter {
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
}

.filter-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #555;
  position: relative;
  padding-left: 25px;
}

.filter-radio {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.custom-radio {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.filter-label:hover .custom-radio {
  border-color: #42b983;
}

.filter-radio:checked ~ .custom-radio {
  background-color: #42b983;
  border-color: #42b983;
}

.filter-radio:checked ~ .custom-radio::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
}

.filter-label:hover {
  color: #42b983;
}
</style>