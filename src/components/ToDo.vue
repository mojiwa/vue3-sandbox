<template>
  <div>
    <li v-for="todo in localTodos" v-bind:key="todo">
        {{ todo.text }}
    </li>
    <input class="mt-2 w-1/2 px-2 border-2 border-solid border-black shadow-lg outline-none" placeholder="Add a new item" v-model="tempItem" @keydown="addToDo">
  <div class="mt-2">Number of Items: {{ numberOfItems }}</div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props:['todos'],
  computed: {
    numberOfItems() {
      return this.localTodos.length
    }
  },
  data() {
    return {
      localTodos: this.todos,
      tempItem: ''
    }
  },
  methods: {
    addToDo(key) {
      if (key.key === "Enter") {        
        this.localTodos.push({text: this.tempItem});
        this.tempItem = '';
      }     
    }
  }
}
</script>