<template>
  <AppHeader />
  <div class="container mx-auto mt-10">
    <router-view></router-view>    
  </div>
</template>

<script>    
  import './assets/main.css';
  import './assets/custom.css';
  import AppHeader from './components/AppHeader'

  export default {
    name: 'App',
    components: {
      AppHeader,      
    },
    data() {
      return {        
      }
    },    
  }
</script>
