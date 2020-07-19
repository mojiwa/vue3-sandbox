<template>
  <div id="app" class="container mx-auto mt-10">
    <HelloWorld msg="Welcome to Your Vue.js App" v-bind:seen="false"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import './assets/main.css'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
