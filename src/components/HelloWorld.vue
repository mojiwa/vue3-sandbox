<template>
  <div class="hello">
    <h1>{{ msg }}, welcome to {{ messages }} </h1>
    <span v-bind:title="msg">
      Hover your mouse over me for a few seconds...
    </span>
    <span v-if="seen">Now you see me</span>
    <li v-for="todo in todos" v-bind:key="todo">
      {{ todo.text }}
    </li>
    <p>{{ message }}</p>
    <input class="w-1/2" v-model="message" />
    <div><button v-on:click="reverseMessage">Reverse Message</button></div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    // Pass props here
    props: {
      msg: String,
      seen: Boolean,
    },
    // Get calculated data
    data() {
      return { 
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ],
        message: "This is a message to you"
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message
          .split('')
          .reverse()
          .join('')
      }
    }
  }
</script>