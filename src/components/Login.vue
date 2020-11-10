<template>
  <div>
      <!-- $emit to raise a custom event -->
    <section
      @click="$emit('close-login-modal')"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
          <div class="p-2 border">
            <h1 class="text-2xl text-center">Login</h1>
            
            <form class="p-2 my-2">
              <div class="my-4">
                <label>Email or Username</label>
                <input
                  ref="emailRef"                  
                  class="rounded shadow p-2 w-full"
                  placeholder="Enter your email or username"
                />
              </div>
              <div class="my-4">
                <label>Password</label>
                <input                  
                  class="rounded shadow p-2 w-full"
                  type="password"
                  placeholder="enter your password"
                />
              </div>
              <div class="my-4">
                <button                  
                  class="w-full rounded shadow-md bg-gradient-to-r from-blue-800 to-blue-200 text-white p-2">
                  <span>Login</span>                  
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {  
        computed: {
           
        },
        data() {
           
        },
        mounted() {
            //Focus on a ref within the template - e.g. on an input field
           this.$refs.emailRef.focus();
        },
        methods: {
            close() {
                this.isLoginOpen = false;
            },
        },
    };
</script>

<style></style>