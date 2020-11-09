<template>
  <div id="app" class="container mx-auto mt-10">
    <!-- <HelloWorld msg="Hello" />
    <div class="mt-5" />
    <ToDo :todos=todos /> -->
    <Calendar />
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue';
  // import ToDo from './components/ToDo';
  import  Calendar from './components/Calendar';
  import './assets/main.css';
  import './assets/custom.css';

  export default {
    name: 'App',
    components: {
      // HelloWorld,
      // ToDo,
      Calendar
    },
    data() {
      return {
        // todos: [
        //   { text: 'Learn JavaScript' },
        //   { text: 'Learn Vue' },
        //   { text: 'Build something awesome' }
        // ],
      }
    },    
  }
</script>
