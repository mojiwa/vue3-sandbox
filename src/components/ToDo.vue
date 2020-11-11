<template>
  <div>
    <li v-for='todo in localTodos' v-bind:key='todo'>
        {{ todo.text }}
    </li>
    <input ref="inputRef" class='mt-2 w-1/2 px-2 border-2 border-solid border-black shadow-lg outline-none' placeholder='Add a new item' v-model='tempItem' @keydown='addToDo'>
    <div class='mt-2'>Number of Items: {{ numberOfItems }}</div>
    <div>Number of Items in Items: {{ itemCount }} </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
export default {
  // setup() can be used instead of Created or BeforeCreated and everything can be defined (functions, state, etc)
  // within there.
  // Use ref to make things reactive.
  setup() {
    const inputRef = ref('');

    const newItem = ref('');

    const list = ref([
      { name: 'fake' },
      { name: 'real' },
    ]);
    
    function remove(index) {
      list.value = list.value.filter((item, i) => i !== index);
    }

    const itemCount = computed({
      get: () => list.value.length,
    });

    onMounted(() => {
      inputRef.value.focus();
    });
    
    return { newItem, list, remove, inputRef, itemCount, }
  },
  name: 'ToDo',
  props: { 
    todoList: 
    { 
      type: [Object], 
      required: true 
    }, 
  },
  computed: {
    numberOfItems() {
      return this.localTodos.length
    }
  },
  data() {
    return {
      localTodos: this.todoList,
      tempItem: ''
    }
  },
  methods: {
    addToDo(key) {
      if (key.key === 'Enter') {        
        this.localTodos.push({text: this.tempItem});
        this.tempItem = '';
      }     
    }
  }
}
</script>