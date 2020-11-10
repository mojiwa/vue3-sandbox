<template>
  <AppHeader @open-login-modal='isLoginOpen = true' />
  <div class='px-4 mx-auto mt-10'>
    <router-view></router-view>    
  </div>
  <!-- teleport to moves a component out of where it is in virtual DOM and into
  a new location on the DOM - even outside of the app div - e.g. into the body -->
  <teleport to='body'>
    <!-- @some-thing-like-this : listens to a custom event -->
    <Login v-if="isLoginOpen" @close-login-modal='isLoginOpen = false'/>      
  </teleport>
</template>

<script>    
  import './assets/main.css';
  import './assets/custom.css';
  import AppHeader from './components/AppHeader';
  import Login from './components/Login';

  export default {
    name: 'App',
    components: {
      AppHeader,  
      Login,    
    },
    data() {
      return {            
        isLoginOpen: false,
      };
    },    
  }
</script>
