import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    filter: 'all',
  }),
  getters: {
    filteredTasks(state) {
      switch (state.filter) {
        case 'completed':
          return state.tasks.filter((task) => task.completed);
        case 'incomplete':
          return state.tasks.filter((task) => !task.completed);
        default:
          return state.tasks;
      }
    },
  },
  actions: {
    loadTasks() {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    },
    addTask(text) {
      this.tasks.push({ id: Date.now(), text, completed: false });
      this.saveTasks();
    },
    editTask(id, newText) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.text = newText;
        this.saveTasks();
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.saveTasks();
    },
    toggleCompletion(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
        this.saveTasks();
      }
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
  },
});