<template>
  
<nav class='w-full bg-blue-800 text-white px-4 py-5'>
    <router-link
      v-for='item in list'
      :key='item.to'
      class='mx-2 hidden md:inline-block'
      :to='item.to'
      >{{ item.title }}</router-link
    >
    <button class="mx-2" @click="$emit('open-login-modal')">
        Login
    </button>    
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: 'Home', to: '/'},
        { title: 'ToDo', to: '/todo' },
        { title: 'Calendar', to: '/calendar' },
        { title: 'Markdown', to: '/markdown' },
        { title: 'Slider', to: '/slider' },
        { title: 'Calculator', to: '/calculator' },
      ],      
    };
  },
  computed: {

  },
  methods: {   

  },
};
</script>

<style></style>