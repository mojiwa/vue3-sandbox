<template>
  <div>
    <li v-for="todo in todos" v-bind:key="todo">
        {{ todo.text }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props:['todos'],
}
</script>